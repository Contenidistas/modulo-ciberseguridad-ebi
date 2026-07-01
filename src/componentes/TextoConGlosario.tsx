'use client';

import { Fragment, useId } from 'react';
import { buscarEntradaGlosario, patronGlosario } from '@/contenido/glosario';

export default function TextoConGlosario({ texto }: { texto: string }) {
  const idBase = useId().replace(/:/g, '');
  const partes = texto.split(patronGlosario);

  return <>{partes.map((parte, indice) => {
    const entrada = buscarEntradaGlosario(parte);
    if (!entrada) return <Fragment key={`${parte}-${indice}`}>{parte}</Fragment>;
    const id = `${idBase}-${indice}`;
    return <span key={id} className="group relative inline-block"><button type="button" aria-describedby={id} className="cursor-help border-b border-dotted border-[#0069aa] font-semibold text-inherit">{parte}</button><span id={id} role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-slate-950 px-3 py-2 text-left text-xs font-normal leading-5 text-white shadow-lg group-hover:block group-focus-within:block">{entrada.definicion}</span></span>;
  })}</>;
}
