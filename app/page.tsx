'use client';

import { BookOpen, CheckCircle2, Copy, Download, Eye, GraduationCap, LockKeyhole, Printer, Route, ShieldCheck, Type } from 'lucide-react';
import Image from 'next/image';
import { useState, useSyncExternalStore } from 'react';
import ZonaActiva from '@/componentes/ZonaActiva';
import { crearActividades, crearEjercicios, grados, niveles, principiosLaboratorio } from '@/contenido/ciberseguridad';
import type { Grado, Unidad } from '@/contenido/ciberseguridad';

const baseAssets = process.env.NEXT_PUBLIC_REA_BASE_PATH ?? '';
const urlPublica = (process.env.NEXT_PUBLIC_REA_PUBLIC_URL ?? 'https://contenidistas.github.io/modulo-ciberseguridad-ebi/').replace(/\/$/, '');
const subscribe = (callback: () => void) => {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
};
const snapshot = () => `${window.location.pathname}${window.location.search}`;
const snapshotServidor = () => '';
const escapar = (texto: string) => texto.replace(/[&<>'"]/g, (caracter) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[caracter] ?? caracter);

const descargar = (contenido: string, nombre: string, tipo = 'text/html;charset=utf-8') => {
  const url = URL.createObjectURL(new Blob([contenido], { type: tipo }));
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombre;
  enlace.click();
  URL.revokeObjectURL(url);
};

function Controles({ contraste, textoGrande, onContraste, onTexto }: { contraste: boolean; textoGrande: boolean; onContraste: () => void; onTexto: () => void }) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1" aria-label="Accesibilidad">
      <button type="button" aria-pressed={contraste} onClick={onContraste} title="Alternar alto contraste" className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${contraste ? 'bg-[#172033] text-white' : 'text-[#0069aa] hover:bg-sky-50'}`}><Eye size={17} /></button>
      <button type="button" aria-pressed={textoGrande} onClick={onTexto} title="Alternar texto grande" className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${textoGrande ? 'bg-[#0069aa] text-white' : 'text-[#0069aa] hover:bg-sky-50'}`}><Type size={17} /></button>
    </div>
  );
}

function Encabezado({ grado, interfaz, cambiarGrado, volver, controles }: { grado: Grado; interfaz: 'docente' | 'alumno'; cambiarGrado: (grado: Grado) => void; volver?: () => void; controles: React.ReactNode }) {
  return (
    <header className="border-b border-sky-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image src={`${baseAssets}/logoedytic.jpg`} alt="Logo EDyTIC" width={112} height={56} className="h-14 w-28 rounded-lg border border-sky-100 bg-white object-contain p-2" priority />
            <div>
              <p className="text-xs font-black uppercase text-[#c65f00]">REA {interfaz === 'docente' ? 'docente' : 'estudiantil'} · Ciencias de la Computación</p>
              <h1 className="mt-1 text-2xl font-black text-[#0069aa]">Ciberseguridad y protección de datos</h1>
            </div>
          </div>
          <div className="no-print flex flex-wrap items-center gap-2">
            {controles}
            {volver && <button type="button" onClick={volver} className="inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-white px-3 py-2 text-sm font-bold text-[#0069aa]"><BookOpen size={16} />Guía docente</button>}
          </div>
        </div>
        <nav className="no-print flex gap-1 overflow-x-auto rounded-lg bg-sky-50 p-1" aria-label="Niveles">
          {grados.map((item) => <button key={item} type="button" aria-pressed={grado === item} onClick={() => cambiarGrado(item)} className={`min-w-20 rounded-md px-3 py-2 text-sm font-bold ${grado === item ? 'bg-[#0069aa] text-white' : 'text-slate-600 hover:bg-white'}`}>{niveles[item].etiqueta}</button>)}
        </nav>
      </div>
    </header>
  );
}

function LaboratorioSeguro() {
  return (
    <section className="border-y border-emerald-200 bg-emerald-50 py-6" aria-labelledby="laboratorio-seguro">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.35fr_1fr]">
          <div><ShieldCheck className="text-[#167451]" size={30} /><h2 id="laboratorio-seguro" className="mt-2 text-xl font-black text-emerald-950">Laboratorio seguro</h2></div>
          <ul className="grid gap-2 sm:grid-cols-2">{principiosLaboratorio.map((principio) => <li key={principio} className="flex gap-2 text-sm leading-6 text-emerald-950"><CheckCircle2 className="mt-1 shrink-0" size={16} />{principio}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const urlActual = useSyncExternalStore(subscribe, snapshot, snapshotServidor);
  const parametros = new URLSearchParams(urlActual.split('?')[1] ?? '');
  const gradoParametro = parametros.get('grado');
  const grado: Grado = grados.includes(gradoParametro as Grado) ? gradoParametro as Grado : '7mo';
  const interfaz = parametros.get('interfaz') === 'alumno' ? 'alumno' : 'docente';
  const nivel = niveles[grado];
  const unidadParametro = parametros.get('unidad');
  const unidad = nivel.unidades.find((item) => item.id === unidadParametro) ?? nivel.unidades[0];
  const actividades = crearActividades(unidad);
  const ejercicios = crearEjercicios(unidad);
  const [contraste, setContraste] = useState(false);
  const [textoGrande, setTextoGrande] = useState(false);
  const [estadoCopia, setEstadoCopia] = useState('');

  const navegar = (cambios: Record<string, string | null>) => {
    const siguientes = new URLSearchParams(window.location.search);
    Object.entries(cambios).forEach(([clave, valor]) => valor === null ? siguientes.delete(clave) : siguientes.set(clave, valor));
    window.history.pushState(null, '', `${window.location.pathname}?${siguientes.toString()}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cambiarGrado = (siguiente: Grado) => navegar({ grado: siguiente, unidad: niveles[siguiente].unidades[0].id });
  const urlAlumno = (publica = false) => {
    const query = new URLSearchParams({ grado, interfaz: 'alumno', unidad: unidad.id });
    return `${publica ? urlPublica : window.location.pathname}?${query.toString()}`;
  };
  const copiarIframe = async () => {
    const iframe = `<iframe src="${urlAlumno(true)}" title="${unidad.titulo}" width="100%" height="900" loading="lazy" allow="clipboard-write" style="border:0"></iframe>`;
    try {
      await navigator.clipboard.writeText(iframe);
    } catch {
      const area = document.createElement('textarea'); area.value = iframe; document.body.append(area); area.select(); document.execCommand('copy'); area.remove();
    }
    setEstadoCopia('Iframe copiado para CREA');
    window.setTimeout(() => setEstadoCopia(''), 2500);
  };
  const htmlFicha = (seleccionada: Unidad) => `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ficha docente - ${escapar(seleccionada.titulo)}</title><style>body{font-family:Arial;color:#172033;margin:0;background:#f6fafc}main{max-width:850px;margin:auto;padding:32px}h1,h2{color:#0069aa}section{background:white;border-left:4px solid #167451;margin:18px 0;padding:18px}p,li{line-height:1.6}.meta{color:#9a4f00;font-weight:bold}</style></head><body><main><p class="meta">Ficha docente · ${nivel.etiqueta}</p><h1>${escapar(seleccionada.titulo)}</h1><p>${escapar(seleccionada.referenciaPrograma)}</p><section><h2>Propósito</h2><p>${escapar(seleccionada.proposito)}</p><h2>Contenidos</h2><ul>${seleccionada.contenidosPrograma.map((item) => `<li>${escapar(item)}</li>`).join('')}</ul></section><section><h2>Actividad</h2><p>${escapar(seleccionada.situacion)}</p><p><strong>Producto:</strong> ${escapar(seleccionada.producto)}</p><p><strong>Evidencia:</strong> ${escapar(seleccionada.evidencia)}</p><p><strong>Criterio:</strong> ${escapar(seleccionada.criterio)}</p></section><section><h2>Uso en CREA</h2><p>Embeber la vista estudiantil y solicitar el producto sin datos personales reales. Usar únicamente casos ficticios y entornos autorizados.</p></section></main></body></html>`;
  const controles = <Controles contraste={contraste} textoGrande={textoGrande} onContraste={() => setContraste((valor) => !valor)} onTexto={() => setTextoGrande((valor) => !valor)} />;

  if (interfaz === 'alumno') {
    return (
      <main className="cyber-grid min-h-screen" data-contraste={contraste} data-texto={textoGrande ? 'grande' : 'normal'}>
        <Encabezado grado={grado} interfaz="alumno" cambiarGrado={cambiarGrado} volver={() => navegar({ interfaz: 'docente' })} controles={controles} />
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
          <p className="text-xs font-black uppercase text-[#c65f00]">{nivel.etiqueta} · Experiencia estudiantil</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">{unidad.titulo}</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">{unidad.proposito}</p>
          <section className="mt-7 border-l-4 border-[#c65f00] bg-orange-50 p-5">
            <h3 className="font-black text-orange-950">Situación</h3><p className="mt-2 leading-7 text-slate-700">{unidad.situacion}</p>
          </section>
          <div className="mt-8 space-y-6">{actividades.map((actividad, indice) => <article key={actividad.momento} className="border-t border-slate-200 bg-white py-5"><div className="flex gap-4"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0069aa] text-sm font-black text-white">{indice + 1}</span><div><p className="text-xs font-black uppercase text-[#167451]">{actividad.momento}</p><h3 className="mt-1 text-lg font-black text-slate-950">{actividad.titulo}</h3><p className="mt-2 leading-7 text-slate-700">{actividad.consigna}</p><p className="mt-3 text-sm font-bold text-slate-700">Evidencia: {actividad.evidencia}</p></div></div></article>)}</div>
          <div className="mt-10"><ZonaActiva ejercicios={ejercicios} /></div>
        </div>
        <LaboratorioSeguro />
      </main>
    );
  }

  return (
    <main className="cyber-grid min-h-screen" data-contraste={contraste} data-texto={textoGrande ? 'grande' : 'normal'}>
      <Encabezado grado={grado} interfaz="docente" cambiarGrado={cambiarGrado} controles={controles} />
      <nav className="no-print border-b border-sky-100 bg-white" aria-label="Secciones"><div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-sm font-bold md:px-8"><a href="#progresion" className="rounded-md px-3 py-2 text-[#0069aa] hover:bg-sky-50">Progresión</a><a href="#unidades" className="rounded-md px-3 py-2 text-[#0069aa] hover:bg-sky-50">Unidades</a><a href="#ficha" className="rounded-md px-3 py-2 text-[#0069aa] hover:bg-sky-50">Ficha docente</a><a href="#actividades" className="rounded-md px-3 py-2 text-[#0069aa] hover:bg-sky-50">Actividades</a></div></nav>

      <section className="mx-auto max-w-6xl px-4 py-9 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.36fr_1fr]"><div><p className="text-xs font-black uppercase text-[#c65f00]">Fundamentación</p><h2 className="mt-1 text-2xl font-black text-[#0069aa]">Decidir, proteger y comunicar</h2></div><div><p className="text-lg leading-8 text-slate-700">La ciberseguridad se trabaja como una práctica de cuidado, análisis y responsabilidad. El estudiante aprende a reconocer activos y riesgos, tomar decisiones defensivas y comunicar hallazgos sin invadir, dañar ni recopilar datos reales.</p><p className="mt-3 leading-7 text-slate-600">El hacking ético se limita a maquetas, cuentas ficticias y sistemas propios expresamente autorizados. La intención de ayudar nunca reemplaza la autorización.</p></div></div>
      </section>
      <LaboratorioSeguro />

      <section id="progresion" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-9 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.36fr_1fr]"><div><p className="text-xs font-black uppercase text-[#c65f00]">Matriz curricular</p><h2 className="mt-1 text-2xl font-black text-[#0069aa]">Progresión 7.º–9.º</h2></div><div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="border-b-2 border-[#0069aa]"><th className="p-3">Nivel</th><th className="p-3">Enfoque</th><th className="p-3">Desempeño esperado</th></tr></thead><tbody>{grados.map((item) => <tr key={item} className="border-b border-slate-200"><th className="p-3 font-black text-[#0069aa]">{niveles[item].etiqueta}</th><td className="p-3 leading-6 text-slate-700">{niveles[item].enfoque}</td><td className="p-3 leading-6 text-slate-700">{item === '7mo' ? 'Reconoce y protege.' : item === '8vo' ? 'Detecta y responde.' : 'Diseña y audita con autorización.'}</td></tr>)}</tbody></table></div></div>
      </section>

      <section id="unidades" className="border-y border-sky-100 bg-white py-9"><div className="mx-auto max-w-6xl px-4 md:px-8"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase text-[#c65f00]">{nivel.etiqueta}</p><h2 className="mt-1 text-2xl font-black text-[#0069aa]">Unidades del nivel</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{nivel.programa}</p></div><span className="text-xs font-bold text-slate-500">{nivel.tiempo}</span></div><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{nivel.unidades.map((item, indice) => <button key={item.id} type="button" aria-pressed={unidad.id === item.id} onClick={() => navegar({ unidad: item.id })} className={`min-h-28 rounded-lg border p-4 text-left transition ${unidad.id === item.id ? 'border-[#0069aa] bg-[#0069aa] text-white' : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-sky-400'}`}><span className={`text-xs font-black uppercase ${unidad.id === item.id ? 'text-sky-100' : 'text-[#c65f00]'}`}>Unidad {indice + 1}</span><span className="mt-2 block font-black leading-5">{item.titulo}</span></button>)}</div></div></section>

      <section id="ficha" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-9 md:px-8">
        <div className="flex flex-col gap-4 border-b-4 border-[#167451] pb-6 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-black uppercase text-[#c65f00]">Ficha docente embebible</p><h2 className="mt-1 text-2xl font-black text-slate-950">{unidad.titulo}</h2><p className="mt-2 max-w-3xl leading-7 text-slate-700">{unidad.proposito}</p></div><div className="no-print grid grid-cols-2 gap-2 sm:flex"><button type="button" onClick={() => navegar({ interfaz: 'alumno' })} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0069aa] px-3 py-2 text-xs font-bold text-white"><Eye size={14} />Previsualizar</button><button type="button" onClick={copiarIframe} className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-bold text-[#0069aa]"><Copy size={14} />Iframe CREA</button><button type="button" onClick={() => descargar(htmlFicha(unidad), `ficha-${grado}-${unidad.id}.html`)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-bold text-emerald-800"><Download size={14} />Ficha HTML</button><button type="button" onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-3 py-2 text-xs font-bold text-orange-800"><Printer size={14} />Imprimir</button></div></div>
        {estadoCopia && <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-800" aria-live="polite">{estadoCopia}</p>}
        <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><div><dt className="text-xs font-black uppercase text-slate-500">Previos</dt><dd className="mt-1 text-sm leading-6 text-slate-700">{unidad.previos}</dd></div><div><dt className="text-xs font-black uppercase text-slate-500">Dificultad frecuente</dt><dd className="mt-1 text-sm leading-6 text-slate-700">{unidad.dificultad}</dd></div><div><dt className="text-xs font-black uppercase text-slate-500">Evidencia</dt><dd className="mt-1 text-sm leading-6 text-slate-700">{unidad.evidencia}</dd></div><div><dt className="text-xs font-black uppercase text-slate-500">Continuidad</dt><dd className="mt-1 text-sm leading-6 text-slate-700">{unidad.continuidad}</dd></div></dl>
        <div className="mt-6 grid gap-5 border-t border-slate-200 pt-6 lg:grid-cols-2"><div><h3 className="font-black text-slate-950">Vinculación curricular</h3><p className="mt-2 text-sm leading-6 text-slate-600">{unidad.referenciaPrograma}</p><ul className="mt-3 space-y-2">{unidad.contenidosPrograma.map((contenido) => <li key={contenido} className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-[#167451]" size={16} />{contenido}</li>)}</ul></div><div><h3 className="font-black text-slate-950">Situación y producto</h3><p className="mt-2 text-sm leading-6 text-slate-700">{unidad.situacion}</p><p className="mt-3 text-sm font-bold text-[#0069aa]">Producto: {unidad.producto}</p><p className="mt-2 text-sm leading-6 text-slate-600">Criterio: {unidad.criterio}</p></div></div>
      </section>

      <section id="actividades" className="border-t border-sky-100 bg-white py-9"><div className="mx-auto max-w-6xl px-4 md:px-8"><div className="flex items-center gap-3"><Route className="text-[#167451]" /><div><p className="text-xs font-black uppercase text-[#c65f00]">Secuencia sugerida</p><h2 className="text-2xl font-black text-[#0069aa]">Cuatro momentos</h2></div></div><div className="mt-6 grid gap-4 md:grid-cols-2">{actividades.map((actividad, indice) => <article key={actividad.momento} className="rounded-lg border border-slate-200 bg-slate-50 p-5"><div className="flex gap-3"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#167451] text-sm font-black text-white">{indice + 1}</span><div><p className="text-xs font-black uppercase text-[#c65f00]">{actividad.momento}</p><h3 className="mt-1 font-black text-slate-950">{actividad.titulo}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{actividad.consigna}</p><p className="mt-3 text-xs font-bold text-slate-600">Evidencia: {actividad.evidencia}</p></div></div></article>)}</div></div></section>

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8"><ZonaActiva ejercicios={ejercicios} /></section>
      <footer className="border-t border-sky-100 bg-white py-6"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8"><p className="flex items-center gap-2"><LockKeyhole size={16} />Casos ficticios, prácticas defensivas y autorización explícita.</p><p className="flex items-center gap-2"><GraduationCap size={16} />REA docente · EDyTIC · CC BY-SA 4.0</p></div></footer>
    </main>
  );
}
