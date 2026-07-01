'use client';

import { CheckCircle2, RotateCcw, ShieldCheck, XCircle } from 'lucide-react';
import { useState } from 'react';
import TextoConGlosario from '@/componentes/TextoConGlosario';
import type { Ejercicio } from '@/contenido/ciberseguridad';
import { mezclar, normalizar } from '@/utilidades/opciones';

function Pregunta({ ejercicio, numero }: { ejercicio: Ejercicio; numero: number }) {
  const [selecciones, setSelecciones] = useState<number[]>([]);
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState<boolean | null>(null);
  const opciones = ejercicio.tipo === 'completar' ? [] : mezclar(ejercicio.id, ejercicio.opciones);

  const comprobar = () => {
    if (ejercicio.tipo === 'completar') {
      setResultado(ejercicio.respuestas.map(normalizar).includes(normalizar(texto)));
      return;
    }
    const correctas = ejercicio.tipo === 'unica' ? [ejercicio.correcta] : ejercicio.correctas;
    const elegidas = [...selecciones].sort((a, b) => a - b);
    const esperadas = [...correctas].sort((a, b) => a - b);
    setResultado(elegidas.length === esperadas.length && elegidas.every((valor, indice) => valor === esperadas[indice]));
  };

  const reiniciar = () => {
    setSelecciones([]);
    setTexto('');
    setResultado(null);
  };

  return (
    <article className="border-b border-slate-200 py-5 last:border-0">
      <p className="text-sm font-black leading-6 text-slate-900">{numero}. <TextoConGlosario texto={ejercicio.enunciado} /></p>
      {ejercicio.tipo === 'multiple' && <p className="mt-1 text-xs font-bold text-slate-500">Selecciona todas las opciones que correspondan.</p>}
      {ejercicio.tipo === 'completar' ? (
        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-sky-100 bg-sky-50 p-3 font-mono text-sm">
          <span>{ejercicio.plantilla.split('[HUECO]')[0]}</span>
          <input value={texto} disabled={resultado !== null} onChange={(evento) => setTexto(evento.target.value)} aria-label="Respuesta" className="min-w-32 border-b-2 border-[#0069aa] bg-white px-2 py-1 text-center font-bold outline-none" />
          <span>{ejercicio.plantilla.split('[HUECO]')[1]}</span>
        </div>
      ) : (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {opciones.map(({ texto: opcion, indiceOriginal }) => {
            const seleccionada = selecciones.includes(indiceOriginal);
            return (
              <button
                key={`${ejercicio.id}-${indiceOriginal}`}
                type="button"
                disabled={resultado !== null}
                aria-pressed={seleccionada}
                onClick={() => setSelecciones((actuales) => ejercicio.tipo === 'unica' ? [indiceOriginal] : actuales.includes(indiceOriginal) ? actuales.filter((valor) => valor !== indiceOriginal) : [...actuales, indiceOriginal])}
                className={`min-h-12 rounded-lg border p-3 text-left text-sm font-semibold transition ${seleccionada ? 'border-[#0069aa] bg-sky-50 text-[#005487]' : 'border-slate-200 bg-white text-slate-700 hover:border-sky-400'}`}
              >
                {opcion}
              </button>
            );
          })}
        </div>
      )}
      {resultado === null ? (
        <button type="button" disabled={ejercicio.tipo === 'completar' ? !texto.trim() : selecciones.length === 0} onClick={comprobar} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#0069aa] px-4 py-2 text-sm font-bold text-white disabled:opacity-40">
          <ShieldCheck size={16} /> Comprobar
        </button>
      ) : (
        <div className={`mt-3 rounded-lg border p-3 text-sm leading-6 ${resultado ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-orange-200 bg-orange-50 text-orange-950'}`} aria-live="polite">
          <div className="flex items-start gap-2">
            {resultado ? <CheckCircle2 className="mt-1 shrink-0" size={17} /> : <XCircle className="mt-1 shrink-0" size={17} />}
            <p><strong>{resultado ? 'Decisión fundamentada.' : 'Conviene revisar.'}</strong> <TextoConGlosario texto={ejercicio.feedback} /></p>
          </div>
          {!resultado && <button type="button" onClick={reiniciar} className="mt-2 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-bold"><RotateCcw size={13} />Intentar nuevamente</button>}
        </div>
      )}
    </article>
  );
}

export default function ZonaActiva({ ejercicios }: { ejercicios: Ejercicio[] }) {
  return (
    <section aria-labelledby="zona-activa">
      <div className="border-b-4 border-[#167451] pb-3">
        <p className="text-xs font-black uppercase text-[#c65f00]">Evaluación formativa</p>
        <h2 id="zona-activa" className="mt-1 text-xl font-black text-slate-950">Zona activa</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Resuelve {ejercicios.length} desafíos para reconocer conceptos, analizar evidencia, tomar decisiones y transferir el criterio a una situación nueva. Puedes revisar cada respuesta y volver a intentarlo.</p>
      </div>
      <div>{ejercicios.map((ejercicio, indice) => <Pregunta key={ejercicio.id} ejercicio={ejercicio} numero={indice + 1} />)}</div>
    </section>
  );
}
