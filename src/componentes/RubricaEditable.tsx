'use client';

import { Download, Printer, RotateCcw, Save } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { RubricaUnidad } from '@/contenido/evaluacionCiberseguridad';

const escapar = (valor: string) => valor.replace(/[&<>'"]/g, (caracter) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[caracter] ?? caracter);

const descargar = (contenido: string, nombre: string, tipo = 'text/html;charset=utf-8') => {
  const url = URL.createObjectURL(new Blob([contenido], { type: tipo }));
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombre;
  enlace.click();
  URL.revokeObjectURL(url);
};

export default function RubricaEditable({ rubrica, editable = false }: { rubrica: RubricaUnidad; editable?: boolean }) {
  const [valor, setValor] = useState(rubrica);
  const total = useMemo(() => valor.criterios.reduce((suma, criterio) => suma + (Number(criterio.peso) || 0), 0), [valor.criterios]);
  const excede = total > valor.escala;
  const incompleta = total < valor.escala;
  const factor = valor.escala === 100 ? 1 : 10;

  const actualizarCriterio = (indice: number, cambios: Partial<(typeof valor.criterios)[number]>) => {
    setValor((actual) => ({ ...actual, criterios: actual.criterios.map((criterio, i) => i === indice ? { ...criterio, ...cambios } : criterio) }));
  };
  const actualizarNivel = (criterioIndice: number, nivelIndice: number, cambios: Partial<(typeof valor.criterios)[number]['niveles'][number]>) => {
    setValor((actual) => ({
      ...actual,
      criterios: actual.criterios.map((criterio, i) => i === criterioIndice ? { ...criterio, niveles: criterio.niveles.map((nivel, j) => j === nivelIndice ? { ...nivel, ...cambios } : nivel) } : criterio),
    }));
  };
  const html = () => `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${escapar(valor.titulo)}</title><style>body{font-family:Arial;margin:0;color:#172033}main{max-width:980px;margin:auto;padding:30px}h1,h2{color:#0069aa}table{border-collapse:collapse;width:100%;font-size:13px}th,td{border:1px solid #cbd5e1;padding:8px;vertical-align:top}th{background:#e0f2fe}.meta{color:#9a4f00;font-weight:bold}</style></head><body><main><p class="meta">Escala ${valor.escala} · suficiencia ${valor.suficiencia} · total ${total}</p><h1>${escapar(valor.titulo)}</h1><p>${escapar(valor.proposito)}</p><table><thead><tr><th>Criterio</th><th>Peso</th>${valor.criterios[0]?.niveles.map((nivel) => `<th>${escapar(nivel.etiqueta)}</th>`).join('') ?? ''}</tr></thead><tbody>${valor.criterios.map((criterio) => `<tr><td><strong>${escapar(criterio.nombre)}</strong><br>${escapar(criterio.indicador)}</td><td>${criterio.peso}</td>${criterio.niveles.map((nivel) => `<td><strong>${nivel.valor}</strong><br>${escapar(nivel.descriptor)}</td>`).join('')}</tr>`).join('')}</tbody></table></main></body></html>`;

  return (
    <section className="mt-6 rounded-lg border border-sky-200 bg-white p-5" aria-labelledby={`rubrica-${valor.titulo}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase text-[#c65f00]">Evaluación auténtica</p>
          {editable ? <input value={valor.titulo} onChange={(evento) => setValor((actual) => ({ ...actual, titulo: evento.target.value }))} className="mt-1 w-full rounded-md border border-sky-200 px-3 py-2 text-xl font-black text-[#0069aa]" /> : <h3 id={`rubrica-${valor.titulo}`} className="mt-1 text-xl font-black text-[#0069aa]">{valor.titulo}</h3>}
          {editable ? <textarea value={valor.proposito} onChange={(evento) => setValor((actual) => ({ ...actual, proposito: evento.target.value }))} rows={2} className="mt-2 w-full rounded-md border border-sky-200 px-3 py-2 text-sm leading-6 text-slate-700" /> : <p className="mt-2 text-sm leading-6 text-slate-700">{valor.proposito}</p>}
        </div>
        <div className="no-print flex flex-wrap gap-2">
          {editable && <button type="button" onClick={() => setValor(rubrica)} className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-bold text-[#0069aa]"><RotateCcw size={14} />Restaurar</button>}
          <button type="button" onClick={() => descargar(html(), `rubrica-ciberseguridad.html`)} className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-bold text-emerald-800"><Download size={14} />HTML</button>
          <button type="button" onClick={() => { const ventana = window.open('about:blank', '_blank'); if (!ventana) return; ventana.opener = null; ventana.document.write(html()); ventana.document.close(); ventana.setTimeout(() => ventana.print(), 250); }} className="inline-flex items-center gap-2 rounded-lg bg-[#0069aa] px-3 py-2 text-xs font-bold text-white"><Printer size={14} />PDF</button>
        </div>
      </div>
      {editable && <div className="mt-4 grid gap-3 sm:grid-cols-3"><label className="text-xs font-black uppercase text-slate-500">Escala<select value={valor.escala} onChange={(evento) => setValor((actual) => ({ ...actual, escala: Number(evento.target.value) as 10 | 100 }))} className="mt-2 block w-full rounded-md border border-sky-200 px-3 py-2 text-sm normal-case text-slate-800"><option value={100}>1 a 100</option><option value={10}>1 a 10</option></select></label><label className="text-xs font-black uppercase text-slate-500">Suficiencia<input type="number" value={valor.suficiencia} onChange={(evento) => setValor((actual) => ({ ...actual, suficiencia: Number(evento.target.value) }))} className="mt-2 block w-full rounded-md border border-sky-200 px-3 py-2 text-sm normal-case text-slate-800" /></label><div className={`rounded-md border p-3 text-sm font-bold ${excede ? 'border-rose-200 bg-rose-50 text-rose-800' : incompleta ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-emerald-200 bg-emerald-50 text-emerald-800'}`}><Save className="mr-2 inline" size={14} />Total: {total}/{valor.escala}<span className="block text-xs font-semibold">{excede ? 'El peso supera la escala.' : incompleta ? 'Queda peso por asignar.' : 'Peso distribuido correctamente.'}</span></div></div>}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead><tr className="border-b-2 border-[#0069aa]"><th className="min-w-56 p-3">Criterio</th><th className="w-24 p-3">Peso</th>{valor.criterios[0]?.niveles.map((nivel) => <th key={nivel.etiqueta} className="min-w-52 p-3">{nivel.etiqueta}</th>)}</tr></thead>
          <tbody>{valor.criterios.map((criterio, criterioIndice) => <tr key={criterio.id} className="border-b border-slate-200 align-top"><td className="p-3">{editable ? <><input value={criterio.nombre} onChange={(evento) => actualizarCriterio(criterioIndice, { nombre: evento.target.value })} className="w-full rounded-md border border-slate-200 px-2 py-1 font-black text-slate-950" /><textarea value={criterio.indicador} onChange={(evento) => actualizarCriterio(criterioIndice, { indicador: evento.target.value })} rows={3} className="mt-2 w-full rounded-md border border-slate-200 px-2 py-1 leading-5 text-slate-700" /></> : <><p className="font-black text-slate-950">{criterio.nombre}</p><p className="mt-1 leading-5 text-slate-600">{criterio.indicador}</p></>}</td><td className="p-3">{editable ? <><input type="number" value={criterio.peso} onChange={(evento) => actualizarCriterio(criterioIndice, { peso: Number(evento.target.value) })} min={0} max={valor.escala} className="w-20 rounded-md border border-slate-200 px-2 py-1 font-bold" /><span className="mt-1 block text-[11px] text-slate-500">{Math.round((criterio.peso / valor.escala) * 100)}%</span></> : <><span className="font-black">{criterio.peso / factor}</span><span className="block text-[11px] text-slate-500">{Math.round((criterio.peso / valor.escala) * 100)}%</span></>}</td>{criterio.niveles.map((nivel, nivelIndice) => <td key={`${criterio.id}-${nivel.etiqueta}`} className="p-3">{editable ? <><input type="number" value={nivel.valor} onChange={(evento) => actualizarNivel(criterioIndice, nivelIndice, { valor: Number(evento.target.value) })} className="mb-2 w-16 rounded-md border border-slate-200 px-2 py-1 font-bold" /><textarea value={nivel.descriptor} onChange={(evento) => actualizarNivel(criterioIndice, nivelIndice, { descriptor: evento.target.value })} rows={5} className="w-full rounded-md border border-slate-200 px-2 py-1 leading-5 text-slate-700" /></> : <><p className="font-black text-[#0069aa]">{nivel.valor}</p><p className="mt-1 leading-5 text-slate-600">{nivel.descriptor}</p></>}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
