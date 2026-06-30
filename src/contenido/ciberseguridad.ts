export type Grado = '7mo' | '8vo' | '9no';

export type Actividad = {
  momento: string;
  titulo: string;
  proposito: string;
  consigna: string;
  evidencia: string;
};

export type Ejercicio =
  | { id: string; tipo: 'unica'; enunciado: string; opciones: string[]; correcta: number; feedback: string }
  | { id: string; tipo: 'multiple'; enunciado: string; opciones: string[]; correctas: number[]; feedback: string }
  | { id: string; tipo: 'completar'; enunciado: string; plantilla: string; respuestas: string[]; feedback: string };

export type Unidad = {
  id: string;
  titulo: string;
  proposito: string;
  referenciaPrograma: string;
  contenidosPrograma: string[];
  conceptos: string[];
  previos: string;
  dificultad: string;
  duracion: string;
  situacion: string;
  producto: string;
  evidencia: string;
  criterio: string;
  continuidad: string;
  decisionCorrecta: string;
  distractores: string[];
  accionesCorrectas: string[];
  accionesIncorrectas: string[];
  conceptoClave: string;
  respuestasClave: string[];
};

export type Nivel = {
  etiqueta: string;
  enfoque: string;
  pregunta: string;
  programa: string;
  tiempo: string;
  unidades: Unidad[];
};

const referencia = (grado: string) => `Eje Alfabetización y Ciudadanía digital. Programa de Ciencias de la Computación, ${grado} EBI.`;

export const niveles: Record<Grado, Nivel> = {
  '7mo': {
    etiqueta: '7.º EBI',
    enfoque: 'Reconocer qué información necesita protección y adoptar hábitos seguros en situaciones cotidianas.',
    pregunta: '¿Qué información compartimos y cómo podemos cuidarla?',
    programa: 'Identidad y huella digital, datos personales y sensibles, información pública y privada, permisos, navegación segura, credibilidad y protección de derechos.',
    tiempo: 'El eje completo sugiere 4 semanas; esta selección debe integrarse con ciudadanía digital.',
    unidades: [
      {
        id: 'identidad-huella', titulo: 'Identidad y huella digital',
        proposito: 'Reconocer cómo publicaciones, interacciones y datos construyen una identidad digital persistente.',
        referenciaPrograma: referencia('7.º'),
        contenidosPrograma: ['Identidad digital y huella digital.', 'Datos e información que las construyen.', 'Cuidados en el manejo de la imagen.'],
        conceptos: ['Identidad digital', 'Huella digital', 'Contexto', 'Permanencia'],
        previos: 'Experiencias con perfiles, juegos, plataformas educativas o mensajería.',
        dificultad: 'Pensar que borrar una publicación garantiza que desaparezca de todos los espacios.',
        duracion: '2 clases',
        situacion: 'Un perfil ficticio publica una foto grupal, ubicación y horario sin consultar a las demás personas.',
        producto: 'Mapa de huella digital y acuerdo de publicación responsable.',
        evidencia: 'Clasificación justificada de datos y propuesta de cuidado antes, durante y después de publicar.',
        criterio: 'Distingue consecuencias y propone una decisión que protege a todas las personas involucradas.',
        continuidad: 'Prepara el análisis de datos personales, permisos y exposición.',
        decisionCorrecta: 'Pedir consentimiento y retirar ubicación y horario antes de publicar.',
        distractores: ['Publicar porque la cuenta tiene pocos seguidores.', 'Agregar más etiquetas para que el perfil sea visible.'],
        accionesCorrectas: ['Preguntar quién puede ver la publicación.', 'Revisar si aparecen datos de otras personas.'],
        accionesIncorrectas: ['Suponer que una cuenta privada elimina todo riesgo.', 'Compartir primero y consultar después.'],
        conceptoClave: 'huella digital', respuestasClave: ['huella digital', 'la huella digital'],
      },
      {
        id: 'datos-permisos', titulo: 'Datos personales, sensibles y permisos',
        proposito: 'Clasificar datos según su sensibilidad y decidir qué permisos son necesarios para una aplicación.',
        referenciaPrograma: referencia('7.º'),
        contenidosPrograma: ['Protección de datos personales y sensibles.', 'Información pública y privada.', 'Permisos, geolocalización y asistentes de voz.'],
        conceptos: ['Dato personal', 'Dato sensible', 'Permiso', 'Minimización'],
        previos: 'Diferencia inicial entre información pública y privada.',
        dificultad: 'Aceptar permisos porque la aplicación los solicita, sin relacionarlos con su función.',
        duracion: '2 clases',
        situacion: 'Una linterna ficticia solicita contactos, micrófono, ubicación precisa y cámara.',
        producto: 'Matriz permiso-función-riesgo-decisión.',
        evidencia: 'Decisiones justificadas sobre cada permiso y propuesta de configuración mínima.',
        criterio: 'Autoriza únicamente los datos necesarios y explica el riesgo de los permisos excesivos.',
        continuidad: 'Conecta con gestión de credenciales y privacidad en 8.º.',
        decisionCorrecta: 'Rechazar permisos no relacionados y buscar una alternativa confiable.',
        distractores: ['Aceptar todo para que funcione más rápido.', 'Usar datos reales para probar qué hace cada permiso.'],
        accionesCorrectas: ['Relacionar cada permiso con una función concreta.', 'Revisar si puede revocarse después.'],
        accionesIncorrectas: ['Aceptar por la cantidad de descargas.', 'Compartir datos sensibles para completar el perfil.'],
        conceptoClave: 'minimización de datos', respuestasClave: ['minimización de datos', 'minimizacion de datos'],
      },
      {
        id: 'navegacion-fuentes', titulo: 'Navegación segura y fuentes confiables',
        proposito: 'Aplicar señales básicas para revisar conexiones, direcciones y contenidos antes de confiar.',
        referenciaPrograma: referencia('7.º'),
        contenidosPrograma: ['HTTPS y validación de sitios y contenidos.', 'Credibilidad, exactitud y objetividad.', 'Riesgos en línea.'],
        conceptos: ['HTTPS', 'URL', 'Autoría', 'Evidencia'],
        previos: 'Uso cotidiano de navegadores y buscadores.',
        dificultad: 'Confundir una apariencia profesional con una fuente confiable.',
        duracion: '2 clases',
        situacion: 'Dos páginas ficticias ofrecen el mismo sorteo; una imita el nombre de una institución y pide iniciar sesión.',
        producto: 'Lista de comprobación para revisar sitios y contenidos.',
        evidencia: 'Comparación de URLs, autoría, propósito y evidencias con una decisión fundamentada.',
        criterio: 'Usa varias señales y evita decidir por una sola característica visual.',
        continuidad: 'Prepara la detección de phishing en 8.º.',
        decisionCorrecta: 'No iniciar sesión y verificar la promoción desde el sitio oficial escrito manualmente.',
        distractores: ['Confiar porque incluye un logotipo conocido.', 'Reenviar el enlace para preguntar si funciona.'],
        accionesCorrectas: ['Revisar dominio y conexión.', 'Buscar autoría, fecha y evidencia independiente.'],
        accionesIncorrectas: ['Confiar por aparecer primero en resultados.', 'Descargar el archivo para comprobarlo.'],
        conceptoClave: 'URL', respuestasClave: ['URL', 'dirección web', 'direccion web'],
      },
      {
        id: 'reporte-responsable', titulo: 'Primeros pasos en hacking ético',
        proposito: 'Comprender autorización, alcance y reporte responsable como límites de una revisión de seguridad.',
        referenciaPrograma: referencia('7.º'),
        contenidosPrograma: ['Navegación segura y responsable.', 'Protección de datos y derechos.', 'Riesgos en línea.'],
        conceptos: ['Autorización', 'Alcance', 'Evidencia', 'Reporte responsable'],
        previos: 'Reconocimiento de datos, permisos y señales de riesgo.',
        dificultad: 'Creer que una buena intención autoriza a probar cuentas o sistemas ajenos.',
        duracion: '2 clases',
        situacion: 'Un estudiante detecta en una maqueta escolar que un botón permite ver información ficticia que debería estar oculta.',
        producto: 'Reporte responsable sin explotar ni difundir la debilidad.',
        evidencia: 'Registro de observación, impacto posible y recomendación, sin acceder a más información.',
        criterio: 'Se detiene, preserva la privacidad y comunica por el canal acordado.',
        continuidad: 'Introduce el laboratorio defensivo y las reglas de compromiso de 8.º.',
        decisionCorrecta: 'Detener la prueba y reportar la observación por el canal autorizado.',
        distractores: ['Buscar más datos para demostrar que el problema es grave.', 'Publicar capturas para que otras personas confirmen.'],
        accionesCorrectas: ['Registrar solo la evidencia mínima.', 'Confirmar el alcance antes de realizar otra acción.'],
        accionesIncorrectas: ['Probar contraseñas de compañeros.', 'Compartir públicamente la debilidad.'],
        conceptoClave: 'autorización', respuestasClave: ['autorización', 'autorizacion'],
      },
    ],
  },
  '8vo': {
    etiqueta: '8.º EBI',
    enfoque: 'Detectar amenazas frecuentes y seleccionar medidas de protección y respuesta.',
    pregunta: '¿Qué señales permiten detectar un ataque y actuar sin aumentar el daño?',
    programa: 'Gestión de credenciales, mecanismos de autenticación, phishing, ransomware, credibilidad de fuentes y sesgos.',
    tiempo: 'El programa sugiere 3 semanas para el eje.',
    unidades: [
      {
        id: 'credenciales-autenticacion', titulo: 'Credenciales y autenticación',
        proposito: 'Evaluar fortalezas y debilidades de contraseñas, frases de acceso y segundo factor.',
        referenciaPrograma: referencia('8.º'),
        contenidosPrograma: ['Gestión de credenciales.', 'Mecanismos de autenticación.', 'Fortalezas y debilidades.'],
        conceptos: ['Frase de acceso', 'MFA', 'Gestor', 'Recuperación'],
        previos: 'Datos personales, permisos y configuración de privacidad.',
        dificultad: 'Reutilizar una contraseña fuerte o compartir códigos de verificación.',
        duracion: '2 clases', situacion: 'Tres cuentas ficticias usan estrategias distintas de contraseña y recuperación.',
        producto: 'Política personal de autenticación sin registrar credenciales reales.',
        evidencia: 'Comparación de estrategias y plan de mejora con segundo factor y recuperación segura.',
        criterio: 'Propone credenciales únicas y mecanismos complementarios sin exponer secretos.',
        continuidad: 'Aporta defensas frente a phishing y toma de cuentas.',
        decisionCorrecta: 'Usar una frase única, gestor y segundo factor con códigos de recuperación protegidos.',
        distractores: ['Usar la misma contraseña compleja en todos los servicios.', 'Enviar el código de segundo factor a quien dice ser soporte.'],
        accionesCorrectas: ['Usar credenciales ficticias en clase.', 'Revisar opciones de recuperación de cuenta.'],
        accionesIncorrectas: ['Comparar contraseñas reales del grupo.', 'Guardar claves en un documento público.'],
        conceptoClave: 'autenticación multifactor', respuestasClave: ['autenticación multifactor', 'autenticacion multifactor', 'MFA'],
      },
      {
        id: 'phishing', titulo: '¿Confiarías en este mensaje?',
        proposito: 'Analizar mensajes sospechosos y decidir cómo verificar, reportar y responder sin interactuar con enlaces peligrosos.',
        referenciaPrograma: referencia('8.º'),
        contenidosPrograma: ['Identificación de phishing.', 'Gestión de credenciales y autenticación.', 'Señales de fuentes no confiables y URLs dudosas.'],
        conceptos: ['Phishing', 'Ingeniería social', 'Urgencia', 'Verificación independiente'],
        previos: 'Lectura de URLs, autoría y protección de datos.',
        dificultad: 'Buscar una señal definitiva en lugar de combinar remitente, contexto, pedido y canal.',
        duracion: '3 clases',
        situacion: 'Un correo ficticio anuncia que la cuenta educativa será suspendida y solicita iniciar sesión antes de diez minutos.',
        producto: 'Protocolo de decisión y reporte para mensajes sospechosos.',
        evidencia: 'Análisis de señales, decisión segura, canal de verificación y propuesta de reporte.',
        criterio: 'No interactúa con el mensaje y verifica por un canal independiente.',
        continuidad: 'Se transfiere al análisis de malware, incidentes y proyectos seguros.',
        decisionCorrecta: 'No usar el enlace; abrir el servicio por la dirección conocida y reportar el mensaje.',
        distractores: ['Responder para preguntar si el mensaje es real.', 'Abrir el enlace sin ingresar datos para mirar.'],
        accionesCorrectas: ['Revisar remitente y dominio.', 'Verificar el aviso desde un canal independiente.'],
        accionesIncorrectas: ['Reenviar el mensaje al grupo.', 'Ingresar datos ficticios en el formulario sospechoso.'],
        conceptoClave: 'phishing', respuestasClave: ['phishing', 'suplantación', 'suplantacion'],
      },
      {
        id: 'malware-ransomware', titulo: 'Malware, ransomware y recuperación',
        proposito: 'Relacionar prevención, contención, respaldo y comunicación ante un incidente simulado.',
        referenciaPrograma: referencia('8.º'),
        contenidosPrograma: ['Tipos de ataques y delitos informáticos.', 'Identificación de ransomware.', 'Hábitos seguros para proteger datos.'],
        conceptos: ['Malware', 'Ransomware', 'Respaldo', 'Contención'],
        previos: 'Mensajes sospechosos, descargas y autenticación.',
        dificultad: 'Continuar usando o conectando un equipo comprometido para investigar por cuenta propia.',
        duracion: '2 clases', situacion: 'Una computadora ficticia muestra archivos inaccesibles después de abrir un adjunto inesperado.',
        producto: 'Tarjeta de respuesta inicial a incidentes.',
        evidencia: 'Secuencia justificada de contención, aviso, preservación y recuperación.',
        criterio: 'Prioriza reducir el daño, pedir ayuda y recuperar desde respaldos verificados.',
        continuidad: 'Prepara documentación y respuesta en laboratorios autorizados.',
        decisionCorrecta: 'Aislar el equipo de la red y avisar al responsable sin borrar evidencias.',
        distractores: ['Pagar inmediatamente desde otra cuenta.', 'Conectar una memoria con todos los respaldos para probar.'],
        accionesCorrectas: ['Mantener respaldos desconectados o versionados.', 'Registrar qué ocurrió antes del aviso.'],
        accionesIncorrectas: ['Instalar herramientas desconocidas.', 'Ocultar el incidente para evitar problemas.'],
        conceptoClave: 'respaldo', respuestasClave: ['respaldo', 'copia de seguridad', 'backup'],
      },
      {
        id: 'laboratorio-defensivo', titulo: 'Laboratorio defensivo autorizado',
        proposito: 'Aplicar reglas de compromiso para revisar una maqueta local y comunicar mejoras sin explotación.',
        referenciaPrograma: referencia('8.º'),
        contenidosPrograma: ['Hábitos seguros y medidas de protección.', 'Ciberseguridad y tipos de ataques.', 'Credibilidad y sesgos en decisiones digitales.'],
        conceptos: ['Reglas de compromiso', 'Activo', 'Amenaza', 'Mitigación'],
        previos: 'Autorización, reporte responsable y respuesta inicial.',
        dificultad: 'Salir del entorno simulado o realizar acciones no incluidas en el alcance.',
        duracion: '3 clases', situacion: 'Un sitio ficticio sin conexión presenta perfiles, mensajes y configuraciones deliberadamente inseguras.',
        producto: 'Informe defensivo con hallazgo, riesgo, evidencia mínima y mitigación.',
        evidencia: 'Lista de comprobación aplicada dentro del alcance y reporte sin datos personales.',
        criterio: 'Respeta autorización, alcance, privacidad y detención ante resultados inesperados.',
        continuidad: 'Prepara modelado de amenazas y auditoría ética en 9.º.',
        decisionCorrecta: 'Trabajar solo sobre la maqueta y detenerse ante cualquier recurso externo.',
        distractores: ['Probar la misma técnica en el portal real.', 'Descargar todos los perfiles ficticios por si sirven.'],
        accionesCorrectas: ['Leer el alcance antes de comenzar.', 'Proponer una mitigación verificable.'],
        accionesIncorrectas: ['Escanear la red del centro.', 'Intentar evadir controles de acceso.'],
        conceptoClave: 'alcance', respuestasClave: ['alcance', 'el alcance'],
      },
    ],
  },
  '9no': {
    etiqueta: '9.º EBI',
    enfoque: 'Integrar seguridad y privacidad desde el diseño de proyectos, cuentas, dispositivos y sistemas IoT.',
    pregunta: '¿Cómo diseñamos una solución digital que reduzca riesgos antes de publicarla?',
    programa: 'Ciudadanía responsable, identidad y privacidad, seguridad básica de cuentas y dispositivos, ética en desarrollos y proyectos; articulación con redes inalámbricas, nube e IoT.',
    tiempo: 'Se trabaja transversalmente e integrado con los demás ejes.',
    unidades: [
      {
        id: 'amenazas-proyectos', titulo: 'Modelado de amenazas para proyectos',
        proposito: 'Identificar activos, actores, amenazas, impacto y medidas antes de implementar una solución.',
        referenciaPrograma: referencia('9.º'),
        contenidosPrograma: ['Seguridad básica en cuentas y dispositivos.', 'Aspectos éticos de desarrollos digitales.', 'Planificación y gestión de proyectos.'],
        conceptos: ['Activo', 'Amenaza', 'Riesgo', 'Mitigación'],
        previos: 'Amenazas frecuentes, autenticación y reporte responsable.',
        dificultad: 'Comenzar por herramientas o ataques sin definir qué se protege y para quién.',
        duracion: '2 clases', situacion: 'Un equipo diseña una aplicación ficticia para registrar asistencia y debe decidir qué datos necesita proteger.',
        producto: 'Modelo simple de amenazas y requisitos de seguridad.',
        evidencia: 'Activos, escenarios de riesgo, impacto, probabilidad y mitigaciones priorizadas.',
        criterio: 'Relaciona cada medida con un riesgo y reduce la recolección innecesaria.',
        continuidad: 'Orienta seguridad web, IoT y auditoría final.',
        decisionCorrecta: 'Definir datos mínimos, accesos y riesgos antes de construir el prototipo.',
        distractores: ['Agregar todas las funciones y revisar seguridad al final.', 'Guardar más datos por si se necesitan después.'],
        accionesCorrectas: ['Identificar quién necesita acceso.', 'Priorizar riesgos por impacto y probabilidad.'],
        accionesIncorrectas: ['Publicar datos de prueba reales.', 'Suponer que una red interna siempre es segura.'],
        conceptoClave: 'modelo de amenazas', respuestasClave: ['modelo de amenazas', 'modelado de amenazas'],
      },
      {
        id: 'seguridad-web', titulo: 'Seguridad y privacidad en una aplicación web',
        proposito: 'Aplicar validación, mínimo privilegio y manejo responsable de datos en un prototipo local.',
        referenciaPrograma: referencia('9.º'),
        contenidosPrograma: ['Seguridad informática básica.', 'Ética en la producción de contenidos y desarrollos.', 'Gestión de identidad y privacidad.'],
        conceptos: ['Validación', 'Mínimo privilegio', 'Sesión', 'Privacidad por diseño'],
        previos: 'Programación web básica, datos y modelado de amenazas.',
        dificultad: 'Confiar en toda entrada o mostrar información técnica sensible ante un error.',
        duracion: '3 clases', situacion: 'Un formulario local ficticio acepta cualquier entrada y muestra datos que no son necesarios para la tarea.',
        producto: 'Lista de requisitos y versión mejorada del prototipo local.',
        evidencia: 'Casos de prueba defensivos, validaciones y decisiones de minimización documentadas.',
        criterio: 'Valida entradas, limita datos y permisos, y comunica errores sin exponer información sensible.',
        continuidad: 'Se integra en la auditoría ética final.',
        decisionCorrecta: 'Validar en el sistema, limitar permisos y mostrar mensajes de error seguros.',
        distractores: ['Ocultar el formulario con CSS y conservar todo igual.', 'Probar el formulario de un sitio público sin autorización.'],
        accionesCorrectas: ['Usar datos ficticios y casos límite.', 'Separar mensajes para usuarios de registros técnicos.'],
        accionesIncorrectas: ['Guardar contraseñas en texto visible.', 'Copiar datos reales para probar validaciones.'],
        conceptoClave: 'mínimo privilegio', respuestasClave: ['mínimo privilegio', 'minimo privilegio'],
      },
      {
        id: 'redes-iot', titulo: 'Riesgos en redes, nube e IoT',
        proposito: 'Analizar superficies de riesgo en un sistema IoT y proponer configuraciones defensivas.',
        referenciaPrograma: referencia('9.º'),
        contenidosPrograma: ['Seguridad de cuentas y dispositivos.', 'Redes inalámbricas e IoT como articulación curricular.', 'Procesamiento local y en la nube.'],
        conceptos: ['IoT', 'Actualización', 'Configuración', 'Procesamiento local/nube'],
        previos: 'Dispositivos de red, cliente-servidor y autenticación.',
        dificultad: 'Pensar que un sensor pequeño no necesita actualizaciones o control de acceso.',
        duracion: '2 clases', situacion: 'Una maqueta de alarma envía eventos ficticios a la nube y conserva la contraseña inicial del dispositivo.',
        producto: 'Diagrama de datos y plan de configuración segura.',
        evidencia: 'Flujo de datos con riesgos, controles, responsable y procedimiento de actualización.',
        criterio: 'Protege credenciales, limita exposición y justifica qué se procesa localmente o en la nube.',
        continuidad: 'Aporta un caso para la auditoría ética final.',
        decisionCorrecta: 'Cambiar credenciales iniciales, actualizar y limitar conexiones y datos enviados.',
        distractores: ['Publicar el dispositivo para acceder desde cualquier red.', 'Desactivar actualizaciones para evitar cambios.'],
        accionesCorrectas: ['Documentar dependencias y actualizaciones.', 'Separar el dispositivo de recursos innecesarios.'],
        accionesIncorrectas: ['Compartir la clave en el código público.', 'Usar datos personales reales en la maqueta.'],
        conceptoClave: 'Internet de las cosas', respuestasClave: ['Internet de las cosas', 'IoT'],
      },
      {
        id: 'auditoria-etica', titulo: 'Auditoría ética y divulgación responsable',
        proposito: 'Planificar y ejecutar una revisión defensiva de un sistema ficticio con autorización, alcance y reporte.',
        referenciaPrograma: referencia('9.º'),
        contenidosPrograma: ['Mirada crítica y ética en desarrollos.', 'Seguridad básica en cuentas y dispositivos.', 'Organización, registro y presentación de proyectos.'],
        conceptos: ['Autorización', 'Alcance', 'Severidad', 'Divulgación responsable'],
        previos: 'Modelado de amenazas, validación, redes y respuesta a incidentes.',
        dificultad: 'Confundir demostrar impacto con ampliar una prueba fuera de lo autorizado.',
        duracion: '4 clases', situacion: 'Un cliente ficticio entrega una maqueta local, reglas de compromiso y una lista de funciones para revisar.',
        producto: 'Informe de auditoría defensiva y presentación de mitigaciones.',
        evidencia: 'Plan autorizado, bitácora, hallazgos reproducibles sin datos reales, prioridad y verificación de mejoras.',
        criterio: 'Respeta reglas, minimiza impacto y comunica de forma clara, privada y accionable.',
        continuidad: 'Proyecto integrador del módulo y puente hacia formación técnica especializada.',
        decisionCorrecta: 'Acordar por escrito objetivo, alcance, técnicas permitidas, detención y canal de reporte.',
        distractores: ['Comenzar por las técnicas disponibles y definir el alcance después.', 'Publicar hallazgos antes de que exista una corrección.'],
        accionesCorrectas: ['Usar únicamente sistemas ficticios o propios autorizados.', 'Guardar evidencia mínima y proteger el informe.'],
        accionesIncorrectas: ['Escanear servicios de terceros.', 'Intentar obtener credenciales o persistencia.'],
        conceptoClave: 'divulgación responsable', respuestasClave: ['divulgación responsable', 'reporte responsable'],
      },
    ],
  },
};

export const principiosLaboratorio = [
  'Autorización explícita antes de cualquier prueba.',
  'Alcance limitado a maquetas locales, cuentas ficticias y recursos propios preparados para aprender.',
  'Datos inventados: nunca se solicitan credenciales, imágenes o información personal real.',
  'Detención inmediata ante resultados inesperados, datos reales o recursos externos.',
  'Evidencia mínima, almacenamiento protegido y reporte privado por el canal acordado.',
  'Finalidad defensiva: comprender riesgos, corregir y verificar mejoras.',
];

export const crearActividades = (unidad: Unidad): Actividad[] => [
  {
    momento: 'Activación y diagnóstico',
    titulo: 'Primera decisión',
    proposito: 'Hacer visibles ideas iniciales y criterios espontáneos de seguridad.',
    consigna: `${unidad.situacion} Decide individualmente qué harías primero y registra qué señal o criterio sostiene tu decisión. No ejecutes acciones sobre cuentas, enlaces o sistemas reales.`,
    evidencia: 'Decisión inicial y justificación breve.',
  },
  {
    momento: 'Exploración guiada',
    titulo: 'Separar señales de suposiciones',
    proposito: `Construir los conceptos de ${unidad.conceptos.slice(0, 3).join(', ')} mediante comparación de casos.`,
    consigna: 'Compara tres variantes ficticias del caso. Marca evidencias observables, datos faltantes, posibles impactos y una forma independiente de verificar.',
    evidencia: 'Tabla comparativa con evidencia, inferencia, riesgo y verificación.',
  },
  {
    momento: 'Producción y resolución',
    titulo: unidad.producto,
    proposito: unidad.proposito,
    consigna: `Diseña ${unidad.producto.toLowerCase()} para la situación. Incluye decisiones, responsables, datos que deben protegerse, procedimiento de detención y forma de comprobar la mejora.`,
    evidencia: unidad.evidencia,
  },
  {
    momento: 'Transferencia y reflexión',
    titulo: 'Revisar sin aumentar el riesgo',
    proposito: 'Transferir la estrategia y ofrecer retroalimentación basada en criterios.',
    consigna: `Intercambia el producto sin datos personales. Revisa con este criterio: ${unidad.criterio} Propón una mejora y adapta la estrategia a otro entorno cotidiano o proyecto ficticio.`,
    evidencia: 'Coevaluación, versión mejorada y explicación de qué decisión se transfirió.',
  },
];

export const crearEjercicios = (unidad: Unidad): Ejercicio[] => [
  {
    id: `${unidad.id}-decision`, tipo: 'unica',
    enunciado: `Ante la situación “${unidad.situacion}”, ¿cuál es la primera decisión más segura?`,
    opciones: [unidad.decisionCorrecta, ...unidad.distractores], correcta: 0,
    feedback: `La decisión recomendada reduce exposición y permite actuar con evidencia: ${unidad.decisionCorrecta}`,
  },
  {
    id: `${unidad.id}-acciones`, tipo: 'multiple',
    enunciado: 'Selecciona todas las acciones que corresponden a una práctica segura y autorizada.',
    opciones: [...unidad.accionesCorrectas, ...unidad.accionesIncorrectas], correctas: unidad.accionesCorrectas.map((_, indice) => indice),
    feedback: 'Las prácticas correctas protegen datos, respetan el alcance y permiten verificar sin aumentar el riesgo.',
  },
  {
    id: `${unidad.id}-concepto`, tipo: 'completar',
    enunciado: 'Completa el concepto central de esta unidad.',
    plantilla: `La estrategia o concepto que estamos aplicando se denomina [HUECO].`, respuestas: unidad.respuestasClave,
    feedback: `${unidad.conceptoClave} permite nombrar y comunicar una parte clave de la decisión defensiva.`,
  },
  {
    id: `${unidad.id}-etica`, tipo: 'unica',
    enunciado: 'En hacking ético, ¿qué condición debe existir antes de realizar una prueba?',
    opciones: ['Autorización explícita y alcance acordado', 'Curiosidad y una herramienta disponible', 'Una cuenta que parezca inactiva'], correcta: 0,
    feedback: 'Sin autorización y alcance no es una práctica ética, aunque la intención sea aprender o ayudar.',
  },
];

export const grados: Grado[] = ['7mo', '8vo', '9no'];
