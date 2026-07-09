import type { Unidad } from '@/contenido/ciberseguridad';

export type NivelComplejidadId = 'acompanado' | 'base' | 'extendido';

export type NivelComplejidad = {
  id: NivelComplejidadId;
  etiqueta: string;
  foco: string;
  consigna: string;
  apoyos: string[];
  evidencia: string;
  desafioAmpliado: boolean;
  andamiaje: number;
};

export type NivelRubrica = {
  valor: number;
  etiqueta: string;
  descriptor: string;
};

export type CriterioRubrica = {
  id: string;
  nombre: string;
  peso: number;
  indicador: string;
  niveles: NivelRubrica[];
};

export type RubricaUnidad = {
  titulo: string;
  proposito: string;
  escala: 10 | 100;
  suficiencia: number;
  criterios: CriterioRubrica[];
};

export const etiquetasNivelComplejidad: Record<NivelComplejidadId, string> = {
  acompanado: 'Acompañado',
  base: 'Base',
  extendido: 'Extendido',
};

export const esNivelComplejidad = (valor: string | null): valor is NivelComplejidadId =>
  valor === 'acompanado' || valor === 'base' || valor === 'extendido';

export const crearNivelesComplejidad = (unidad: Unidad): NivelComplejidad[] => [
  {
    id: 'acompanado',
    etiqueta: etiquetasNivelComplejidad.acompanado,
    foco: 'Para estudiantes que necesitan menor carga simultánea, plantilla explícita y decisiones paso a paso.',
    consigna: `${unidad.situacion} Trabaja con un único caso ficticio, completa la plantilla evidencia-inferencia-dato faltante-verificación y redacta una decisión segura en 3 a 5 líneas.`,
    apoyos: [
      'Elegir un caso y no comparar varios al mismo tiempo.',
      'Usar lista de señales, glosario y plantilla guiada.',
      'Responder con frases breves o audio, sin datos personales reales.',
    ],
    evidencia: `Plantilla completa, decisión segura y una explicación breve vinculada al criterio: ${unidad.criterio}`,
    desafioAmpliado: false,
    andamiaje: 3,
  },
  {
    id: 'base',
    etiqueta: etiquetasNivelComplejidad.base,
    foco: 'Para el desempeño esperado del nivel: analizar evidencia, decidir y justificar sin aumentar el riesgo.',
    consigna: `${unidad.situacion} Analiza señales, datos faltantes y canal de verificación. Produce: ${unidad.producto.toLowerCase()}.`,
    apoyos: [
      'Revisar al menos dos conceptos de la unidad.',
      'Separar evidencia observable de suposición.',
      'Verificar por un canal independiente o entorno autorizado.',
    ],
    evidencia: unidad.evidencia,
    desafioAmpliado: false,
    andamiaje: 1,
  },
  {
    id: 'extendido',
    etiqueta: etiquetasNivelComplejidad.extendido,
    foco: 'Para estudiantes con autonomía: transferir el criterio, comparar casos y justificar mejoras.',
    consigna: `${unidad.situacion} Resuelve la consigna base y agrega una variante: compara otro caso o contexto, anticipa un riesgo adicional y justifica una mejora verificable del producto.`,
    apoyos: [
      'Comparar dos escenarios o roles con el mismo criterio.',
      'Incluir un riesgo de privacidad, disponibilidad o abuso posible.',
      'Documentar una mejora y cómo comprobarla sin tocar sistemas reales.',
    ],
    evidencia: `${unidad.evidencia} Debe incluir comparación, mejora propuesta y evidencia de verificación segura.`,
    desafioAmpliado: true,
    andamiaje: 0,
  },
];

export const obtenerNivelComplejidad = (unidad: Unidad, nivel: NivelComplejidadId) =>
  crearNivelesComplejidad(unidad).find((item) => item.id === nivel) ?? crearNivelesComplejidad(unidad)[1];

export const crearRubricaUnidad = (unidad: Unidad): RubricaUnidad => ({
  titulo: `Rúbrica analítica · ${unidad.titulo}`,
  proposito: `Valorar la producción "${unidad.producto}" con foco en seguridad, evidencia, ética y transferencia.`,
  escala: 100,
  suficiencia: 60,
  criterios: [
    {
      id: 'analisis',
      nombre: 'Análisis de evidencia y riesgo',
      peso: 30,
      indicador: 'Identifica señales observables, datos faltantes y riesgos sin basarse solo en apariencia o intuición.',
      niveles: [
        { valor: 10, etiqueta: 'Inicial', descriptor: 'Menciona 1 señal aislada y no distingue evidencia de suposición.' },
        { valor: 20, etiqueta: 'En proceso', descriptor: 'Reconoce 2 señales, pero deja sin explicitar al menos 1 dato faltante o impacto.' },
        { valor: 30, etiqueta: 'Esperado', descriptor: 'Registra 3 o más señales, 1 dato faltante y 1 riesgo concreto vinculado al caso.' },
        { valor: 40, etiqueta: 'Avanzado', descriptor: 'Compara 2 escenarios o fuentes, prioriza riesgos y justifica la decisión con evidencia verificable.' },
      ],
    },
    {
      id: 'decision',
      nombre: 'Decisión segura y procedimiento',
      peso: 25,
      indicador: 'Propone una acción que reduce exposición de personas, datos y sistemas, respetando canales autorizados.',
      niveles: [
        { valor: 10, etiqueta: 'Inicial', descriptor: 'La acción aumenta el riesgo o interactúa con enlaces, cuentas o sistemas no autorizados.' },
        { valor: 20, etiqueta: 'En proceso', descriptor: 'Propone una acción parcialmente segura, pero omite canal, detención o verificación.' },
        { valor: 30, etiqueta: 'Esperado', descriptor: 'Define una secuencia con pausa, verificación independiente, reporte o configuración segura.' },
        { valor: 40, etiqueta: 'Avanzado', descriptor: 'Incluye responsables, límites, condición de detención y alternativa si aparece información sensible.' },
      ],
    },
    {
      id: 'producto',
      nombre: 'Producto comunicable',
      peso: 25,
      indicador: `Entrega ${unidad.producto.toLowerCase()} de forma clara, usable y sin exponer datos reales.`,
      niveles: [
        { valor: 10, etiqueta: 'Inicial', descriptor: 'El producto es incompleto o usa datos, enlaces o ejemplos que podrían aumentar el riesgo.' },
        { valor: 20, etiqueta: 'En proceso', descriptor: 'Comunica la idea central, pero falta orden, criterio o adaptación al público destinatario.' },
        { valor: 30, etiqueta: 'Esperado', descriptor: 'Incluye propósito, pasos, evidencia y advertencias de cuidado comprensibles para el grupo.' },
        { valor: 40, etiqueta: 'Avanzado', descriptor: 'Agrega formato accesible, ejemplo ficticio y mejora validable para otro contexto.' },
      ],
    },
    {
      id: 'etica',
      nombre: 'Ética, privacidad y transferencia',
      peso: 20,
      indicador: 'Respeta autorización, minimización de datos y transferencia responsable a nuevas situaciones.',
      niveles: [
        { valor: 10, etiqueta: 'Inicial', descriptor: 'No considera autorización, privacidad o alcance de la actividad.' },
        { valor: 20, etiqueta: 'En proceso', descriptor: 'Menciona cuidado general, pero no lo aplica a una decisión concreta.' },
        { valor: 30, etiqueta: 'Esperado', descriptor: 'Explica al menos 2 medidas de privacidad o autorización aplicadas al caso.' },
        { valor: 40, etiqueta: 'Avanzado', descriptor: 'Transfiere el criterio a otro caso y anticipa un posible daño si se actúa sin autorización.' },
      ],
    },
  ],
});
