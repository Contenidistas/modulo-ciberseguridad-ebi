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

export type SaberUnidad = {
  ideaCentral: string;
  explicacion: string;
  ejemplos: { titulo: string; situacion: string; lectura: string; decision: string }[];
  secuenciaVisual: [string, string, string];
  ampliaciones?: { titulo: string; explicacion: string; ejemplo: string; cuidado: string }[];
};

export const saberesPorUnidad: Record<string, SaberUnidad> = {
  'identidad-huella': {
    ideaCentral: 'La identidad digital se construye con lo que publicamos y también con lo que otras personas y plataformas registran sobre nuestras acciones.',
    explicacion: 'Una huella puede ser activa, cuando compartimos una publicación, o pasiva, cuando un servicio registra datos de uso. Antes de publicar conviene considerar audiencia, contexto, permanencia, capturas, etiquetas, metadatos y posible reutilización.',
    ejemplos: [
      { titulo: 'Una foto del grupo', situacion: 'Una estudiante quiere publicar una foto de una actividad escolar.', lectura: 'La imagen incluye a otras personas y revela lugar y horario.', decision: 'Solicitar consentimiento, limitar la audiencia y evitar datos de ubicación.' },
      { titulo: 'Un comentario antiguo', situacion: 'Un mensaje escrito como broma reaparece fuera de su contexto.', lectura: 'La permanencia y la captura de pantalla dificultan controlar su circulación.', decision: 'Revisar el contenido antes de publicar y reparar el daño si ya circuló.' },
      { titulo: 'Imagen encontrada en otro sitio', situacion: 'Una foto de perfil aparece reutilizada en una cuenta que nadie reconoce.', lectura: 'La imagen puede haber sido copiada, editada o tomada de una publicación abierta.', decision: 'No acusar sin evidencia; buscar el origen, ajustar privacidad y reportar la suplantación si corresponde.' },
    ],
    secuenciaVisual: ['Identificar audiencia y datos', 'Anticipar permanencia e impacto', 'Publicar, ajustar o no compartir'],
    ampliaciones: [
      { titulo: 'Metadatos', explicacion: 'Una foto o un archivo puede incluir información que no vemos a simple vista: fecha, dispositivo, ubicación, autor o historial de cambios.', ejemplo: 'Antes de compartir una foto, se puede revisar si conserva ubicación o datos del dispositivo.', cuidado: 'Quitar metadatos innecesarios y evitar publicar ubicación en tiempo real.' },
      { titulo: 'Datos de navegación', explicacion: 'El navegador puede guardar historial, búsquedas, descargas, formularios y sesiones para facilitar el uso cotidiano.', ejemplo: 'En una computadora compartida, una sesión abierta permite que otra persona acceda a la cuenta.', cuidado: 'Cerrar sesión, revisar qué se guarda y borrar datos del dispositivo compartido cuando corresponda.' },
    ],
  },
  'datos-permisos': {
    ideaCentral: 'No todos los datos tienen el mismo nivel de sensibilidad y una aplicación debería solicitar únicamente los permisos necesarios para cumplir su función.',
    explicacion: 'La minimización de datos reduce exposición: se recoge la menor cantidad posible, durante el tiempo imprescindible y con una finalidad clara. Un permiso debe poder explicarse por la función que habilita.',
    ejemplos: [
      { titulo: 'Linterna y contactos', situacion: 'Una aplicación de linterna solicita acceso a contactos y micrófono.', lectura: 'Los permisos no guardan relación con encender la luz.', decision: 'Denegar los permisos y buscar una alternativa confiable.' },
      { titulo: 'Mapa y ubicación', situacion: 'Una aplicación de mapas solicita ubicación mientras se usa.', lectura: 'El permiso está relacionado con la navegación, pero no necesita ser permanente.', decision: 'Autorizar solo durante el uso y revisar luego la configuración.' },
      { titulo: 'Encuesta de clase', situacion: 'Un formulario para opinar sobre una actividad pide nombre completo, teléfono y ubicación.', lectura: 'La finalidad podría cumplirse con respuestas anónimas o con menos datos.', decision: 'Pedir solo lo necesario, explicar para qué se usa y definir quién accede a las respuestas.' },
    ],
    secuenciaVisual: ['Reconocer el dato solicitado', 'Relacionar permiso y finalidad', 'Autorizar lo mínimo necesario'],
    ampliaciones: [
      { titulo: 'Cookies', explicacion: 'Son pequeños datos que un sitio guarda en el navegador. Algunas permiten mantener una sesión o recordar preferencias; otras se usan para medir actividad o seguir intereses entre sitios.', ejemplo: 'Una cookie puede recordar el idioma elegido, mientras otra puede registrar páginas visitadas para personalizar anuncios.', cuidado: 'Revisar las opciones, rechazar lo no necesario cuando sea posible y eliminar cookies en equipos compartidos.' },
      { titulo: 'Rastreo y consentimiento', explicacion: 'Aceptar un aviso no significa que todas las opciones sean indispensables. Conviene distinguir cookies necesarias, estadísticas y publicitarias.', ejemplo: 'Un sitio ofrece “Aceptar todo” y también una opción para configurar finalidades por separado.', cuidado: 'Elegir según la finalidad y no aceptar por apuro sin revisar las alternativas.' },
    ],
  },
  'navegacion-fuentes': {
    ideaCentral: 'Una conexión segura protege el tránsito de datos, pero no demuestra por sí sola que el contenido de un sitio sea verdadero o confiable.',
    explicacion: 'Para evaluar una fuente se combinan señales técnicas y editoriales: dominio, HTTPS, autoría, fecha, propósito, evidencia y contraste con otras fuentes. Ninguna señal aislada alcanza para decidir.',
    ejemplos: [
      { titulo: 'Sitio con candado', situacion: 'Una página con HTTPS promete un premio y solicita datos personales.', lectura: 'El candado cifra la conexión, pero la promesa y el pedido siguen siendo sospechosos.', decision: 'No entregar datos y verificar la organización por un canal independiente.' },
      { titulo: 'Noticia sin autor', situacion: 'Una publicación impactante no indica autor, fecha ni fuentes.', lectura: 'Faltan elementos para evaluar responsabilidad y vigencia.', decision: 'Buscar la información en fuentes identificables y comparar evidencias.' },
      { titulo: 'Imagen fuera de contexto', situacion: 'Una publicación viral muestra una foto antigua como si fuera de un hecho actual.', lectura: 'La imagen puede ser real, pero estar usada en otro momento o lugar.', decision: 'Buscar la imagen en reversa, revisar fecha y contrastar con fuentes institucionales o periodísticas confiables.' },
    ],
    secuenciaVisual: ['Revisar URL, autoría y fecha', 'Buscar evidencia y propósito', 'Contrastar antes de confiar'],
    ampliaciones: [
      { titulo: 'Partes de una URL', explicacion: 'En https://tramites.gub.uy/servicio, “https” es el esquema, “tramites” es un subdominio, “gub.uy” es el dominio y “/servicio” es la ruta.', ejemplo: 'En gub.uy.seguridad-ejemplo.com, el dominio real es seguridad-ejemplo.com; “gub.uy” fue colocado delante para confundir.', cuidado: 'Leer el dominio de derecha a izquierda antes de la primera barra y desconfiar de letras cambiadas o nombres agregados.' },
      { titulo: 'Wi‑Fi pública', explicacion: 'Una red abierta o compartida puede ser útil, pero no sabemos quién la administra ni qué otros equipos están conectados.', ejemplo: 'Una red llamada “WiFi Terminal Gratis” podría no pertenecer realmente a la terminal.', cuidado: 'Confirmar el nombre de la red, evitar trámites sensibles, mantener HTTPS y preferir datos móviles para operaciones importantes.' },
      { titulo: 'Modo incógnito', explicacion: 'El modo incógnito reduce lo que queda guardado en ese dispositivo, como historial o cookies de esa sesión, pero no vuelve anónima la navegación.', ejemplo: 'Puede servir en una computadora compartida para no dejar una sesión abierta en el navegador.', cuidado: 'Cerrar sesión igual; el sitio, la red o el proveedor pueden seguir viendo actividad según el caso.' },
    ],
  },
  'reporte-responsable': {
    ideaCentral: 'Una revisión de seguridad solo es ética cuando existe autorización explícita, alcance acordado y un canal responsable para comunicar hallazgos.',
    explicacion: 'La curiosidad o la intención de ayudar no habilitan una prueba. Deben definirse sistema, tiempo, acciones permitidas, datos excluidos y condición de detención antes de comenzar.',
    ejemplos: [
      { titulo: 'Maqueta de clase', situacion: 'El docente entrega una aplicación local y autoriza revisar su formulario.', lectura: 'Existe un recurso preparado y un alcance concreto.', decision: 'Trabajar únicamente dentro de las reglas y registrar evidencia mínima.' },
      { titulo: 'Sitio institucional', situacion: 'Un estudiante descubre una posible falla navegando un sitio real.', lectura: 'No existe autorización para profundizar la prueba.', decision: 'Detenerse y comunicar la observación por el canal acordado.' },
      { titulo: 'Captura con datos visibles', situacion: 'Una evidencia muestra nombres o mensajes que no hacen falta para explicar el hallazgo.', lectura: 'El reporte puede enseñar el problema sin exponer a otras personas.', decision: 'Tapar o reemplazar datos y conservar solo la evidencia mínima.' },
    ],
    secuenciaVisual: ['Confirmar autorización', 'Respetar alcance y detención', 'Reportar de forma privada'],
  },
  'credenciales-autenticacion': {
    ideaCentral: 'La autenticación mejora cuando combina credenciales únicas, un segundo factor y mecanismos de recuperación protegidos.',
    explicacion: 'Una frase de acceso larga y única suele ser más resistente y recordable que una contraseña breve y compleja. El gestor evita reutilización y el segundo factor reduce el impacto de una clave expuesta.',
    ejemplos: [
      { titulo: 'Una clave para todo', situacion: 'La misma contraseña se usa en correo, juegos y plataforma educativa.', lectura: 'Una filtración permitiría intentar acceso en los demás servicios.', decision: 'Crear credenciales únicas y almacenarlas en un gestor confiable.' },
      { titulo: 'Código inesperado', situacion: 'Llega un código de segundo factor que no fue solicitado.', lectura: 'Alguien podría conocer la contraseña e intentar ingresar.', decision: 'No compartir el código, cambiar la clave y revisar sesiones.' },
      { titulo: 'Recuperación descuidada', situacion: 'La cuenta tiene una pregunta de recuperación cuya respuesta aparece en redes sociales.', lectura: 'Una recuperación débil puede romper una contraseña fuerte.', decision: 'Usar métodos de recuperación privados, actualizar correo alternativo y guardar códigos de respaldo.' },
    ],
    secuenciaVisual: ['Crear credencial única', 'Agregar segundo factor', 'Proteger recuperación y sesiones'],
    ampliaciones: [
      { titulo: 'Gestor de contraseñas', explicacion: 'Ayuda a guardar credenciales únicas y largas sin tener que memorizarlas todas.', ejemplo: 'Una frase de acceso protege el gestor y cada servicio usa una clave diferente.', cuidado: 'Proteger el gestor con MFA y no compartir su clave principal.' },
      { titulo: 'Revisión de filtraciones', explicacion: 'Algunos servicios permiten comprobar si una contraseña ficticia o de práctica aparece en listas conocidas.', ejemplo: 'Comparar una clave común de ejemplo con una frase inventada para discutir diferencias.', cuidado: 'No ingresar correos ni contraseñas reales del grupo en una actividad de aula.' },
    ],
  },
  phishing: {
    ideaCentral: 'El phishing intenta provocar una acción apresurada mediante autoridad, urgencia, miedo o recompensa; se detecta combinando señales y verificación independiente.',
    explicacion: 'No alcanza con buscar errores de escritura. Conviene analizar quién envía, qué solicita, qué emoción activa, adónde conduce y cómo puede comprobarse el mensaje sin usar sus enlaces o datos de contacto.',
    ejemplos: [
      { titulo: 'Paquete pendiente', situacion: 'Un SMS solicita un pago pequeño para liberar una entrega.', lectura: 'Usa una situación cotidiana, urgencia y un enlace ajeno al canal oficial.', decision: 'No abrir el enlace e ingresar manualmente al sitio del correo.' },
      { titulo: 'Cuenta bloqueada', situacion: 'Un correo pide validar usuario, clave y código para evitar un bloqueo.', lectura: 'Solicita secretos y amenaza con una consecuencia inmediata.', decision: 'No responder y verificar desde la aplicación o sitio oficial.' },
      { titulo: 'Sorteo demasiado conveniente', situacion: 'Una publicación dice que una institución regala teléfonos y pide reenviar el enlace.', lectura: 'Mezcla recompensa, presión social y captura de datos.', decision: 'No reenviar, revisar canales oficiales y reportar la publicación si suplanta identidad.' },
    ],
    secuenciaVisual: ['Pausar y observar el pedido', 'Separar señales de suposiciones', 'Verificar por otro canal y reportar'],
  },
  'malware-ransomware': {
    ideaCentral: 'La respuesta ante malware prioriza contener, preservar evidencia, comunicar y recuperar; improvisar puede aumentar el impacto.',
    explicacion: 'El ransomware es un tipo de malware que bloquea o cifra información para exigir un pago. Actualizaciones, mínimos privilegios y respaldos probados reducen el riesgo y facilitan la recuperación.',
    ejemplos: [
      { titulo: 'Archivo inesperado', situacion: 'Un adjunto desconocido solicita habilitar contenido para abrirse.', lectura: 'La acción puede ejecutar código y comprometer el equipo.', decision: 'No habilitarlo, cerrar y reportar por el canal previsto.' },
      { titulo: 'Pantalla de rescate', situacion: 'Una maqueta simula archivos inaccesibles y un pedido de pago.', lectura: 'Continuar usando el equipo podría extender el incidente.', decision: 'Aislar según el protocolo, avisar y recuperar desde respaldo probado.' },
      { titulo: 'Aplicación prometedora', situacion: 'Un sitio ofrece descargar una herramienta gratuita que no aparece en fuentes conocidas.', lectura: 'La promesa puede ocultar instalación de software dañino o no confiable.', decision: 'No instalar; buscar fuente oficial, reputación y necesidad real.' },
    ],
    secuenciaVisual: ['Detectar y detener interacción', 'Contener y comunicar', 'Recuperar y verificar mejoras'],
  },
  'laboratorio-defensivo': {
    ideaCentral: 'Un laboratorio defensivo permite aprender con seguridad porque separa la práctica de los sistemas y datos reales.',
    explicacion: 'Las reglas de compromiso establecen objetivos, recursos autorizados, límites, evidencias permitidas y condiciones de detención. El valor está en comprender y corregir, no en demostrar acceso.',
    ejemplos: [
      { titulo: 'Formulario local', situacion: 'Se revisa una maqueta que acepta entradas ficticias.', lectura: 'El entorno, los datos y las acciones permitidas fueron definidos.', decision: 'Registrar solo lo necesario y proponer una mitigación verificable.' },
      { titulo: 'Resultado inesperado', situacion: 'La práctica muestra datos que parecen reales.', lectura: 'Se alcanzó una condición fuera del alcance previsto.', decision: 'Detener inmediatamente, no copiar y avisar al responsable.' },
      { titulo: 'Lista de chequeo de privacidad', situacion: 'El equipo revisa perfiles ficticios con permisos demasiado amplios.', lectura: 'El laboratorio permite evaluar configuración sin tocar cuentas reales.', decision: 'Aplicar una lista de chequeo y justificar cada cambio propuesto.' },
    ],
    secuenciaVisual: ['Leer reglas de compromiso', 'Probar dentro del límite', 'Detener, documentar y mejorar'],
  },
  'amenazas-proyectos': {
    ideaCentral: 'Modelar amenazas antes de construir ayuda a decidir qué proteger, de quién, con qué impacto y mediante qué medidas.',
    explicacion: 'El riesgo surge de relacionar activos, amenazas, vulnerabilidades, probabilidad e impacto. El modelo no busca adivinar todo, sino priorizar decisiones razonables y revisables.',
    ejemplos: [
      { titulo: 'Agenda escolar', situacion: 'Un proyecto guarda nombres, horarios y recordatorios.', lectura: 'Los datos y la disponibilidad son activos; el acceso indebido es una amenaza.', decision: 'Reducir datos, controlar acceso y planificar recuperación.' },
      { titulo: 'Sensor de aula', situacion: 'Un dispositivo publica mediciones en internet.', lectura: 'Configuración, credenciales y actualizaciones amplían la superficie de riesgo.', decision: 'Limitar exposición y definir mantenimiento antes del despliegue.' },
      { titulo: 'Plataforma de tareas', situacion: 'Un prototipo muestra calificaciones, comentarios y entregas en un único panel.', lectura: 'No todas las personas necesitan ver todos los datos.', decision: 'Separar roles, reducir datos visibles y definir qué ocurre ante una filtración.' },
    ],
    secuenciaVisual: ['Identificar activos y actores', 'Estimar amenaza e impacto', 'Priorizar mitigaciones'],
  },
  'seguridad-web': {
    ideaCentral: 'La seguridad y la privacidad deben incorporarse desde el diseño mediante validación, mínimo privilegio y tratamiento responsable de datos.',
    explicacion: 'Validar significa comprobar entradas en el lugar adecuado; mínimo privilegio significa conceder solo el acceso necesario. La privacidad por diseño evita recoger datos por costumbre.',
    ejemplos: [
      { titulo: 'Formulario de registro', situacion: 'Una aplicación solicita fecha de nacimiento completa sin necesitarla.', lectura: 'El dato aumenta exposición sin aportar a la función.', decision: 'Eliminar el campo o solicitar únicamente el rango imprescindible.' },
      { titulo: 'Rol de visitante', situacion: 'Una cuenta básica puede acceder a funciones administrativas.', lectura: 'Los permisos exceden la tarea asignada.', decision: 'Separar roles y comprobar autorización en cada operación.' },
      { titulo: 'Error demasiado detallado', situacion: 'Al fallar el ingreso, la página muestra rutas internas y datos técnicos.', lectura: 'El mensaje puede ayudar a quien intenta abusar del sistema.', decision: 'Mostrar un mensaje claro para la persona usuaria y guardar el detalle técnico en registros protegidos.' },
    ],
    secuenciaVisual: ['Minimizar y validar entradas', 'Separar roles y sesiones', 'Comprobar privacidad y errores'],
  },
  'redes-iot': {
    ideaCentral: 'Un dispositivo conectado amplía la superficie de riesgo porque combina equipo, red, servicio remoto, datos y mantenimiento.',
    explicacion: 'La seguridad de IoT depende de cambiar configuraciones iniciales, actualizar, segmentar redes y decidir qué datos deben procesarse localmente o en la nube.',
    ejemplos: [
      { titulo: 'Cámara con clave inicial', situacion: 'Una cámara conserva la contraseña incluida por el fabricante.', lectura: 'Una credencial conocida facilita accesos no autorizados.', decision: 'Cambiarla, actualizar y restringir el acceso desde internet.' },
      { titulo: 'Sensor en la nube', situacion: 'Un dispositivo envía más datos de los necesarios a un servicio externo.', lectura: 'Aumentan dependencia, exposición y preguntas de privacidad.', decision: 'Minimizar datos y valorar procesamiento local.' },
      { titulo: 'Red de invitados', situacion: 'Un dispositivo de prueba comparte red con equipos personales y administrativos.', lectura: 'Un problema en el dispositivo podría afectar otros recursos.', decision: 'Separar redes, limitar accesos y documentar mantenimiento.' },
    ],
    secuenciaVisual: ['Inventariar dispositivo y datos', 'Revisar red, nube y actualización', 'Reducir exposición y monitorear'],
  },
  'auditoria-etica': {
    ideaCentral: 'Una auditoría ética es un proceso autorizado y trazable que identifica riesgos, prioriza correcciones y verifica mejoras.',
    explicacion: 'El informe debe separar evidencia, impacto y recomendación; evitar datos innecesarios; comunicar en privado y acordar plazos de corrección y divulgación.',
    ejemplos: [
      { titulo: 'Hallazgo de bajo impacto', situacion: 'Una maqueta muestra información pública desactualizada.', lectura: 'Existe una debilidad, pero su impacto es limitado.', decision: 'Documentar con precisión y priorizar de forma proporcional.' },
      { titulo: 'Dato fuera de alcance', situacion: 'Durante la revisión aparece información no prevista.', lectura: 'Continuar aumentaría exposición y violaría las reglas acordadas.', decision: 'Detener, proteger la evidencia mínima y notificar al responsable.' },
      { titulo: 'Informe para dirección', situacion: 'El equipo encuentra varios riesgos en una maqueta y debe comunicarlos sin alarmar ni exponer detalles innecesarios.', lectura: 'La comunicación también forma parte de la seguridad.', decision: 'Separar evidencia, impacto, prioridad y recomendación en lenguaje claro.' },
    ],
    secuenciaVisual: ['Autorizar y planificar', 'Recoger evidencia mínima', 'Reportar, corregir y verificar'],
  },
};

export type HerramientaSegura = {
  nombre: string;
  url: string;
  funcion: string;
  situacionDidactica: string;
  reglaDeUso: string;
};

const pwnedPasswords: HerramientaSegura = {
  nombre: 'Have I Been Pwned · Pwned Passwords',
  url: 'https://haveibeenpwned.com/Passwords',
  funcion: 'Comprueba si una contraseña aparece en corpus conocidos de filtraciones mediante un mecanismo de k-anonimato.',
  situacionDidactica: 'Comparar dos contraseñas deliberadamente ficticias y discutir por qué “no encontrada” no significa automáticamente “segura”.',
  reglaDeUso: 'Nunca escribir una contraseña real, actual, anterior ni parecida a una credencial personal.',
};

const googleSafeBrowsing: HerramientaSegura = {
  nombre: 'Google Safe Browsing',
  url: 'https://transparencyreport.google.com/safe-browsing/search',
  funcion: 'Consulta si un dominio o sitio público fue identificado por sistemas de Google como peligroso.',
  situacionDidactica: 'Contrastar una URL pública seleccionada por el docente con el análisis manual de dominio, autoría, propósito y evidencia.',
  reglaDeUso: 'No consultar enlaces privados, acortados con identificadores personales ni direcciones que incluyan tokens o datos en sus parámetros.',
};

const virusTotal: HerramientaSegura = {
  nombre: 'VirusTotal · análisis de URL',
  url: 'https://www.virustotal.com/gui/home/url',
  funcion: 'Agrega resultados de múltiples motores para aportar señales sobre una URL o un dominio.',
  situacionDidactica: 'Comparar el resultado de una URL pública preparada por el docente con las señales detectadas por el grupo y analizar posibles falsos positivos.',
  reglaDeUso: 'No subir archivos ni enviar información privada. Las URLs, resultados y contenidos remitidos pueden compartirse con la comunidad y socios del servicio.',
};

const mdnObservatory: HerramientaSegura = {
  nombre: 'MDN HTTP Observatory',
  url: 'https://developer.mozilla.org/en-US/observatory',
  funcion: 'Revisa encabezados HTTP y otras configuraciones defensivas de una aplicación web.',
  situacionDidactica: 'Escanear un sitio propio o expresamente autorizado, interpretar dos recomendaciones y priorizar una mejora verificable.',
  reglaDeUso: 'Usar únicamente dominios propios, maquetas publicadas para la actividad o sitios cuya revisión haya sido autorizada.',
};

const tineye: HerramientaSegura = {
  nombre: 'TinEye · búsqueda inversa de imágenes',
  url: 'https://tineye.com/',
  funcion: 'Busca coincidencias públicas de una imagen para ayudar a detectar reutilización o contexto anterior.',
  situacionDidactica: 'Usar una imagen pública preparada por el docente y comparar fechas, sitios donde aparece y posibles cambios de contexto.',
  reglaDeUso: 'No subir fotos personales del grupo, imágenes de menores ni material privado. Trabajar con imágenes públicas seleccionadas previamente.',
};

const googlePrivacyCheckup: HerramientaSegura = {
  nombre: 'Google · Revisión de privacidad',
  url: 'https://myaccount.google.com/privacycheckup',
  funcion: 'Guía la revisión de actividad, historial, anuncios, ubicación y datos visibles en una cuenta.',
  situacionDidactica: 'Realizar una demostración docente o trabajar con capturas ficticias para decidir qué opciones conviene revisar.',
  reglaDeUso: 'No proyectar cuentas personales de estudiantes ni pedir que compartan capturas reales de su configuración.',
};

const interland: HerramientaSegura = {
  nombre: 'Interland · práctica lúdica',
  url: 'https://beinternetawesome.withgoogle.com/es_es/interland/',
  funcion: 'Propone desafíos interactivos sobre seguridad, amabilidad, privacidad y detección de engaños.',
  situacionDidactica: 'Usarlo como cierre opcional para identificar qué decisiones del juego coinciden con los criterios trabajados en la unidad.',
  reglaDeUso: 'Usarlo como apoyo pedagógico, no como única evidencia de aprendizaje; recuperar luego decisiones y vocabulario en una consigna propia.',
};

export const herramientasPorUnidad: Record<string, HerramientaSegura[]> = {
  'identidad-huella': [tineye, googlePrivacyCheckup, interland],
  'datos-permisos': [googlePrivacyCheckup, interland],
  'navegacion-fuentes': [googleSafeBrowsing, virusTotal, tineye],
  'credenciales-autenticacion': [pwnedPasswords, interland],
  phishing: [googleSafeBrowsing, virusTotal, tineye],
  'malware-ransomware': [virusTotal],
  'seguridad-web': [mdnObservatory],
  'auditoria-etica': [mdnObservatory],
};

export type RecursoAgesic = {
  titulo: string;
  url: string;
  aporte: string;
};

const seguroTeConectas: RecursoAgesic = {
  titulo: 'Seguro te Conectás',
  url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/seguro-te-conectas',
  aporte: 'Recomendaciones, juegos, videos y materiales para trabajar seguridad digital con adolescentes.',
};

const materialesEducativosAgesic: RecursoAgesic = {
  titulo: 'Materiales didácticos para educadores',
  url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/supervisar-gobernar/supervisar-gobernar/seguro-te-conectas-materiales',
  aporte: 'Afiches, folletos, presentaciones y audiovisuales de sensibilización para planificar actividades.',
};

const ciudadaniaDigitalAgesic: RecursoAgesic = {
  titulo: 'Ciudadanía Digital',
  url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/ciudadania-digital',
  aporte: 'Recursos para analizar el entorno digital y participar de forma crítica, responsable y creativa.',
};

const datosPersonalesAgesic: RecursoAgesic = {
  titulo: 'Datos personales y su protección',
  url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/node/3561',
  aporte: 'Información de referencia sobre datos personales, derechos y responsabilidad en su tratamiento.',
};

const consejosConexionAgesic: RecursoAgesic = {
  titulo: 'Conectate de forma segura todos los días',
  url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/conectate-forma-segura-todos-dias',
  aporte: 'Consejos concretos sobre enlaces, Wi‑Fi, sesiones, actualizaciones, contraseñas y respaldos.',
};

export const recursosAgesicPorUnidad: Record<string, RecursoAgesic[]> = {
  'identidad-huella': [ciudadaniaDigitalAgesic, datosPersonalesAgesic],
  'datos-permisos': [datosPersonalesAgesic, seguroTeConectas],
  'navegacion-fuentes': [consejosConexionAgesic, materialesEducativosAgesic],
  'credenciales-autenticacion': [seguroTeConectas, consejosConexionAgesic],
  phishing: [seguroTeConectas, materialesEducativosAgesic],
  'malware-ransomware': [consejosConexionAgesic],
};

export type Nivel = {
  etiqueta: string;
  enfoque: string;
  pregunta: string;
  programa: string;
  tiempo: string;
  unidades: Unidad[];
};

export type CasoReal = {
  id: string;
  titulo: string;
  institucion: string;
  fecha: string;
  fuente: string;
  resumen: string;
  estrategia: string;
  senales: string[];
  decisionSegura: string;
  preguntasDocentes: string[];
  practica: string;
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

export const casosRealesPhishing: CasoReal[] = [
  {
    id: 'bps-2026',
    titulo: 'Beneficio, bloqueo o actualización urgente',
    institucion: 'Banco de Previsión Social',
    fecha: '26 de enero de 2026',
    fuente: 'https://www.bps.gub.uy/23839/alerta-por-intentos-de-fraude-phishing.html',
    resumen: 'BPS informó sobre correos falsos que suplantaban a la institución y solicitaban datos personales, usuarios, claves, tarjetas o códigos de verificación mediante enlaces y adjuntos.',
    estrategia: 'Combinar autoridad institucional, urgencia y una posible pérdida de acceso o beneficio.',
    senales: ['Solicitud de información confidencial.', 'Enlace o archivo inesperado.', 'Urgencia vinculada a bloqueos, beneficios o actualización de datos.'],
    decisionSegura: 'No responder ni usar el enlace; consultar el trámite desde el sitio o los canales oficiales del BPS.',
    preguntasDocentes: ['¿Qué emoción busca activar el mensaje?', '¿Qué dato nunca debería entregarse por este canal?', '¿Cómo verificarías sin interactuar con el correo?'],
    practica: 'Construir un árbol de decisión para un aviso urgente sobre una cuenta o beneficio.',
  },
  {
    id: 'correo-2025',
    titulo: 'Paquete pendiente y pago pequeño',
    institucion: 'Correo Uruguayo',
    fecha: '2 de junio de 2025',
    fuente: 'https://www.gub.uy/ministerio-industria-energia-mineria/comunicacion/noticias/correo-uruguayo-alerta-sobre-fraudes-digitales-suplantan-su-identidad',
    resumen: 'Correo Uruguayo alertó sobre SMS, correos y publicaciones que simulaban entregas pendientes, actualización de dirección, paquetes perdidos o sorteos para obtener datos personales y medios de pago.',
    estrategia: 'Usar una situación cotidiana y un pago aparentemente pequeño para reducir la cautela.',
    senales: ['Entrega no esperada.', 'Pedido de pago o actualización mediante enlace.', 'Dominio diferente del canal oficial.'],
    decisionSegura: 'No pagar ni completar datos; ingresar manualmente al dominio oficial o consultar por teléfono.',
    preguntasDocentes: ['¿Por qué un monto pequeño puede resultar convincente?', '¿Qué cambia si realmente esperabas un paquete?', '¿Qué parte del dominio conviene revisar?'],
    practica: 'Comparar tres avisos ficticios de entrega y justificar cuáles requieren verificación independiente.',
  },
  {
    id: 'fiscalia-2023',
    titulo: 'Investigación, autoridad y miedo',
    institucion: 'Fiscalía General de la Nación',
    fecha: '7 de marzo de 2023',
    fuente: 'https://www.gub.uy/fiscalia-general-nacion/comunicacion/comunicados/fiscalia-alerta-ante-maniobra-maliciosa-mediante-correo-electronico',
    resumen: 'Fiscalía alertó por correos que invocaban una supuesta investigación y utilizaban nombres institucionales incorrectos para inducir la apertura de archivos o enlaces.',
    estrategia: 'Apelar a la autoridad y al temor de consecuencias para apresurar una reacción.',
    senales: ['Nombre institucional impreciso.', 'Asunto intimidante o inesperado.', 'Adjunto o enlace asociado a una supuesta investigación.'],
    decisionSegura: 'No abrir adjuntos ni enlaces y confirmar la comunicación mediante el dominio y contacto oficial de Fiscalía.',
    preguntasDocentes: ['¿Por qué la autoridad puede desplazar la revisión crítica?', '¿Qué detalle institucional permite dudar?', '¿Cómo preservarías el mensaje para reportarlo sin difundirlo?'],
    practica: 'Separar en una tabla señales observables, emociones provocadas e inferencias todavía no verificadas.',
  },
  {
    id: 'dgi-2025',
    titulo: 'Saldo a favor con firmas y sellos',
    institucion: 'Dirección General Impositiva',
    fecha: '27 de marzo de 2025',
    fuente: 'https://www.gub.uy/direccion-general-impositiva/comunicacion/noticias/alerta-contribuyentes-2',
    resumen: 'DGI recibió reportes de un correo fraudulento que anunciaba un supuesto saldo a favor condicionado a un pago previo e incluía firmas escaneadas y sellos oficiales.',
    estrategia: 'Construir credibilidad visual y ofrecer una ganancia para justificar un pago previo.',
    senales: ['Promesa de devolución o saldo inesperado.', 'Pago previo como condición.', 'Elementos visuales oficiales usados como única prueba de autenticidad.'],
    decisionSegura: 'No responder ni pagar; verificar el saldo desde los servicios oficiales y reportar el correo.',
    preguntasDocentes: ['¿Un sello demuestra que el mensaje es auténtico?', '¿Qué relación existe entre beneficio y urgencia?', '¿Qué evidencia externa permitiría comprobar el trámite?'],
    practica: 'Rediseñar la advertencia pública para explicar por qué la apariencia no sustituye la verificación.',
  },
];

export const principiosLaboratorio = [
  'Autorización explícita antes de cualquier prueba.',
  'Alcance limitado a maquetas locales, cuentas ficticias y recursos propios preparados para aprender.',
  'Datos inventados: nunca se solicitan credenciales, imágenes o información personal real.',
  'Detención inmediata ante resultados inesperados, datos reales o recursos externos.',
  'Evidencia mínima, almacenamiento protegido y reporte privado por el canal acordado.',
  'Finalidad defensiva: comprender riesgos, corregir y verificar mejoras.',
];

export const crearActividades = (unidad: Unidad): Actividad[] => {
  if (unidad.id === 'phishing') {
    return [
      {
        momento: 'Activación y diagnóstico',
        titulo: '¿Qué caso te haría actuar más rápido?',
        proposito: 'Reconocer cómo urgencia, autoridad, miedo y oportunidad influyen en la decisión.',
        consigna: 'Lee las síntesis de los casos BPS, Correo Uruguayo, Fiscalía y DGI. Ordénalos según cuánto te impulsarían a actuar sin verificar y explica qué emoción o expectativa interviene. No abras enlaces ni recrees formularios.',
        evidencia: 'Orden personal de los casos y explicación de dos factores de persuasión.',
      },
      {
        momento: 'Exploración guiada',
        titulo: 'Evidencia, inferencia y canal independiente',
        proposito: 'Comparar señales observables sin depender de una única pista.',
        consigna: 'En equipos, asigna un caso real. Completa cuatro columnas: evidencia observable, interpretación posible, dato que falta y canal oficial para verificar. Compara luego qué señales se repiten entre instituciones.',
        evidencia: 'Matriz comparativa de los cuatro casos con coincidencias y diferencias.',
      },
      {
        momento: 'Producción y resolución',
        titulo: 'Protocolo de decisión y reporte',
        proposito: 'Diseñar una respuesta segura aplicable a mensajes sospechosos.',
        consigna: 'Construye un árbol de decisión que comience antes de hacer clic e incluya pausa, revisión del pedido, verificación independiente, protección de datos, reporte y respuesta si ya hubo interacción. Pruébalo con los cuatro casos.',
        evidencia: 'Árbol de decisión probado y registro de la ruta seguida para cada caso.',
      },
      {
        momento: 'Transferencia y reflexión',
        titulo: 'Crear una advertencia que enseñe a decidir',
        proposito: 'Transferir criterios a una comunicación preventiva accesible.',
        consigna: 'Elige uno de los casos y crea una advertencia pública breve en formato texto, audio, afiche o secuencia de pantallas. Debe explicar señales, decisión segura y canal de verificación sin reproducir enlaces, datos ni instrucciones peligrosas.',
        evidencia: 'Advertencia accesible, coevaluación con criterios y versión mejorada.',
      },
    ];
  }

  return [
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
};

export const crearEjercicios = (unidad: Unidad): Ejercicio[] => {
  if (unidad.id === 'identidad-huella') {
    return [
      {
        id: 'huella-activa-pasiva', tipo: 'multiple',
        enunciado: '¿Qué elementos pueden formar parte de la huella digital de una persona?',
        opciones: ['Una foto publicada por ella', 'Una etiqueta hecha por otra persona', 'Datos de navegación guardados por un servicio', 'Solo lo que aparece en el perfil público', 'Únicamente el nombre de usuario'], correctas: [0, 1, 2],
        feedback: 'La huella digital incluye acciones propias y rastros generados por interacciones, plataformas o dispositivos.',
      },
      {
        id: 'huella-foto-grupal', tipo: 'unica',
        enunciado: 'Antes de publicar una foto grupal de una actividad, ¿qué decisión protege mejor a todas las personas?',
        opciones: ['Pedir consentimiento y quitar ubicación u horarios visibles', 'Publicar rápido porque es una actividad positiva', 'Etiquetar a todos para que puedan verla'], correcta: 0,
        feedback: 'La imagen puede revelar datos de otras personas. El consentimiento y la reducción de datos bajan el riesgo.',
      },
      {
        id: 'huella-metadatos', tipo: 'unica',
        enunciado: 'Una foto conserva ubicación y fecha exacta. ¿Cómo se llama esa información agregada al archivo?',
        opciones: ['Metadatos', 'Subdominio', 'Segundo factor'], correcta: 0,
        feedback: 'Los metadatos describen el archivo y pueden revelar información que no se ve en la imagen.',
      },
      {
        id: 'huella-contexto', tipo: 'multiple',
        enunciado: 'Si una imagen propia aparece en una cuenta desconocida, ¿qué acciones son adecuadas?',
        opciones: ['Guardar evidencia mínima', 'Revisar si la imagen estaba publicada abiertamente', 'Reportar suplantación si corresponde', 'Acusar públicamente sin verificar', 'Compartir datos personales para demostrar identidad'], correctas: [0, 1, 2],
        feedback: 'Conviene actuar con evidencia, cuidar datos y usar canales de reporte sin amplificar el problema.',
      },
      {
        id: 'huella-concepto', tipo: 'completar',
        enunciado: 'Completa el concepto.',
        plantilla: 'Los rastros que dejamos al publicar, interactuar o usar servicios forman la [HUECO].', respuestas: ['huella digital', 'la huella digital'],
        feedback: 'La huella digital se construye con publicaciones, interacciones y registros de uso.',
      },
      {
        id: 'huella-cierre', tipo: 'unica',
        enunciado: '¿Qué frase resume mejor una publicación responsable?',
        opciones: ['Pienso audiencia, consentimiento, datos visibles y permanencia antes de compartir', 'Si mi cuenta es privada, no necesito revisar nada', 'Si borro después, desaparece para todas las personas'], correcta: 0,
        feedback: 'Una publicación responsable anticipa quién puede verla, qué datos contiene y cómo podría circular.',
      },
    ];
  }

  if (unidad.id === 'datos-permisos') {
    return [
      {
        id: 'datos-sensibles', tipo: 'multiple',
        enunciado: '¿Qué datos requieren especial cuidado por su sensibilidad o posible impacto?',
        opciones: ['Ubicación precisa en tiempo real', 'Información de salud', 'Contraseña o código de recuperación', 'Color favorito en una encuesta anónima', 'Nombre de una materia'], correctas: [0, 1, 2],
        feedback: 'La sensibilidad depende del daño posible si el dato se expone o se combina con otros.',
      },
      {
        id: 'datos-linterna', tipo: 'unica',
        enunciado: 'Una aplicación de linterna solicita contactos y micrófono. ¿Qué decisión conviene?',
        opciones: ['Denegar permisos no relacionados con su función', 'Aceptar todo porque la app lo pide', 'Dar permisos y borrar la app después'], correcta: 0,
        feedback: 'Un permiso debe poder explicarse por la función. Si no hay relación, conviene denegarlo.',
      },
      {
        id: 'datos-cookies', tipo: 'unica',
        enunciado: '¿Para qué pueden usarse las cookies?',
        opciones: ['Mantener sesión, recordar preferencias o medir actividad', 'Garantizar que toda página sea verdadera', 'Eliminar automáticamente todos los riesgos'], correcta: 0,
        feedback: 'Las cookies no son buenas o malas por sí solas. Importa su finalidad y si son necesarias.',
      },
      {
        id: 'datos-minimizacion', tipo: 'completar',
        enunciado: 'Completa el principio.',
        plantilla: 'Pedir y guardar solo los datos necesarios se llama [HUECO].', respuestas: ['minimización de datos', 'minimizacion de datos', 'minimización', 'minimizacion'],
        feedback: 'Minimizar datos reduce exposición y ayuda a explicar mejor la finalidad.',
      },
      {
        id: 'datos-formulario', tipo: 'multiple',
        enunciado: 'Un formulario de opinión de clase pide teléfono, ubicación y nombre completo. ¿Qué mejoras son adecuadas?',
        opciones: ['Preguntar qué datos son realmente necesarios', 'Permitir respuesta anónima si alcanza para la finalidad', 'Definir quién verá las respuestas', 'Pedir más datos por si se usan más adelante', 'Publicar la planilla completa para transparencia'], correctas: [0, 1, 2],
        feedback: 'Una buena recolección tiene finalidad clara, acceso limitado y la menor cantidad posible de datos.',
      },
      {
        id: 'datos-privacidad', tipo: 'unica',
        enunciado: '¿Qué uso de una revisión de privacidad es adecuado en clase?',
        opciones: ['Trabajar con capturas ficticias o demostración docente sin exponer cuentas reales', 'Pedir capturas personales del grupo', 'Comparar quién tiene más datos visibles'], correcta: 0,
        feedback: 'La actividad debe enseñar criterios sin revelar configuraciones, cuentas ni datos personales reales.',
      },
    ];
  }

  if (unidad.id === 'navegacion-fuentes') {
    return [
      {
        id: 'navegacion-dominio', tipo: 'unica',
        enunciado: '¿Cuál es el dominio real de https://gub.uy.seguridad-ejemplo.com/ingreso?',
        opciones: ['seguridad-ejemplo.com', 'gub.uy', 'ingreso'], correcta: 0,
        feedback: 'El dominio se lee antes de la primera barra y de derecha a izquierda. “gub.uy” funciona aquí como subdominio para generar confusión.',
      },
      {
        id: 'navegacion-url', tipo: 'unica',
        enunciado: '¿Qué URL coincide mejor con un servicio alojado dentro del dominio gub.uy?',
        opciones: ['https://tramites.gub.uy/servicio', 'https://gub.uy.tramites-seguros.com/servicio', 'http://gub-uy.info/servicio'], correcta: 0,
        feedback: 'En tramites.gub.uy, el dominio efectivo es gub.uy y “tramites” es un subdominio. La URL debe analizarse completa antes de confiar.',
      },
      {
        id: 'navegacion-senales', tipo: 'multiple',
        enunciado: '¿Qué señales conviene combinar para evaluar una página?',
        opciones: ['Dominio y URL completos', 'Autoría, fecha y propósito', 'Evidencia y contraste con otras fuentes', 'Solo el candado del navegador', 'Cantidad de colores y animaciones'], correctas: [0, 1, 2],
        feedback: 'HTTPS protege la conexión, pero la confiabilidad requiere revisar también quién publica, con qué evidencia y para qué.',
      },
      {
        id: 'navegacion-concepto', tipo: 'completar',
        enunciado: 'Completa el nombre de la dirección completa de una página en internet.',
        plantilla: 'La dirección que incluye esquema, dominio, ruta y posibles parámetros se llama [HUECO].', respuestas: ['URL', 'url'],
        feedback: 'La URL completa permite observar a qué dominio conduce realmente un enlace.',
      },
      {
        id: 'navegacion-wifi', tipo: 'multiple',
        enunciado: 'Te conectas a una Wi‑Fi pública. ¿Qué decisiones reducen el riesgo?',
        opciones: ['Confirmar con el lugar cuál es el nombre correcto de la red', 'Evitar trámites sensibles y preferir datos móviles para ellos', 'Mantener actualizados el dispositivo y el navegador', 'Desactivar HTTPS para que cargue más rápido', 'Aceptar cualquier aviso de certificado'], correctas: [0, 1, 2],
        feedback: 'Una red pública no tiene por qué ser maliciosa, pero requiere limitar operaciones sensibles y prestar atención a las advertencias.',
      },
      {
        id: 'navegacion-veredicto', tipo: 'unica',
        enunciado: 'Google Safe Browsing o VirusTotal no detectan problemas en una URL. ¿Qué puedes concluir?',
        opciones: ['Es una señal favorable, pero todavía debo revisar dominio, pedido y contexto', 'La página es completamente segura y puedo entregar cualquier dato', 'La URL pertenece necesariamente a la institución que menciona'], correcta: 0,
        feedback: 'Las herramientas aportan señales basadas en información disponible; no sustituyen el análisis ni garantizan seguridad futura.',
      },
      {
        id: 'navegacion-imagen', tipo: 'multiple',
        enunciado: 'Una imagen viral podría estar fuera de contexto. ¿Qué pasos ayudan a revisarla?',
        opciones: ['Buscarla en reversa', 'Revisar fecha y fuente de publicación', 'Comparar con otras fuentes identificables', 'Creerla si tiene muchas reacciones', 'Reenviarla para preguntar si es real'], correctas: [0, 1, 2],
        feedback: 'Una imagen puede ser real y aun así estar usada en otro lugar, fecha o contexto.',
      },
    ];
  }

  if (unidad.id === 'credenciales-autenticacion') {
    return [
      {
        id: 'credenciales-frase', tipo: 'unica',
        enunciado: '¿Qué estrategia suele ser más adecuada para una cuenta importante?',
        opciones: ['Usar una frase larga, única y guardada de forma segura', 'Usar la misma clave compleja en todas las cuentas', 'Cambiar una letra del nombre de la mascota'], correcta: 0,
        feedback: 'La longitud, unicidad y buen resguardo importan más que trucos previsibles.',
      },
      {
        id: 'credenciales-mfa', tipo: 'multiple',
        enunciado: '¿Qué acciones fortalecen la autenticación?',
        opciones: ['Activar MFA', 'Guardar códigos de recuperación en un lugar protegido', 'Revisar sesiones abiertas', 'Compartir el código con soporte por chat', 'Usar la misma contraseña en juegos y correo'], correctas: [0, 1, 2],
        feedback: 'El segundo factor ayuda, pero también hay que proteger recuperación y sesiones.',
      },
      {
        id: 'credenciales-codigo', tipo: 'unica',
        enunciado: 'Llega un código de verificación que no solicitaste. ¿Qué indica y qué conviene hacer?',
        opciones: ['Puede haber un intento de ingreso; no compartirlo y revisar la cuenta', 'Es publicidad normal; reenviarlo al grupo', 'Sirve para comprobar si el soporte es real'], correcta: 0,
        feedback: 'Un código inesperado puede indicar que alguien intenta entrar. Nunca se comparte.',
      },
      {
        id: 'credenciales-concepto', tipo: 'completar',
        enunciado: 'Completa el concepto.',
        plantilla: 'Usar contraseña y una segunda comprobación se llama [HUECO].', respuestas: ['autenticación multifactor', 'autenticacion multifactor', 'MFA'],
        feedback: 'MFA agrega una barrera si la contraseña queda expuesta.',
      },
      {
        id: 'credenciales-hibp', tipo: 'unica',
        enunciado: 'En una actividad con Pwned Passwords, ¿qué regla debe respetarse?',
        opciones: ['Usar solo contraseñas ficticias preparadas para clase', 'Probar la contraseña real para saber si está filtrada', 'Pedir correos personales para comparar'], correcta: 0,
        feedback: 'La herramienta puede enseñar criterios, pero no se deben ingresar secretos reales en clase.',
      },
      {
        id: 'credenciales-recuperacion', tipo: 'multiple',
        enunciado: '¿Qué elementos de recuperación conviene cuidar?',
        opciones: ['Correo alternativo', 'Códigos de respaldo', 'Pregunta de recuperación', 'Respuesta publicada en redes', 'Captura de los códigos en una carpeta pública'], correctas: [0, 1, 2],
        feedback: 'La recuperación también forma parte de la seguridad de la cuenta.',
      },
    ];
  }

  if (unidad.id === 'phishing') {
    return [
      {
        id: 'phishing-senales', tipo: 'multiple',
        enunciado: '¿Qué señales pueden aparecer en un intento de phishing?',
        opciones: ['Urgencia o amenaza', 'Pedido de clave, tarjeta o código', 'Enlace que no coincide con el canal oficial', 'Saludo amable', 'Diseño con colores institucionales'], correctas: [0, 1, 2],
        feedback: 'El diseño puede imitar una institución. Lo más importante es revisar pedido, canal, dominio y contexto.',
      },
      {
        id: 'phishing-paquete', tipo: 'unica',
        enunciado: 'Recibes un SMS sobre un paquete pendiente con pago pequeño. ¿Qué haces primero?',
        opciones: ['No usar el enlace y verificar desde el sitio o teléfono oficial', 'Pagar porque el monto es bajo', 'Responder al SMS para pedir más datos'], correcta: 0,
        feedback: 'La verificación se hace por un canal independiente, no desde el enlace o contacto del mensaje.',
      },
      {
        id: 'phishing-codigo', tipo: 'unica',
        enunciado: 'Un mensaje de “soporte” pide tu código de segundo factor. ¿Cuál es la decisión segura?',
        opciones: ['No compartir el código y reportar el pedido', 'Enviarlo si el mensaje tiene logo', 'Compartirlo solo una vez'], correcta: 0,
        feedback: 'El código de segundo factor es un secreto temporal. Ningún soporte debería pedirlo.',
      },
      {
        id: 'phishing-evidencia', tipo: 'multiple',
        enunciado: 'Antes de decidir, ¿qué conviene separar en la tabla de análisis?',
        opciones: ['Evidencia observable', 'Inferencia posible', 'Dato faltante', 'Canal independiente', 'Datos personales reales del estudiante'], correctas: [0, 1, 2, 3],
        feedback: 'La tabla ordena lo que se ve, lo que se interpreta y cómo se verifica sin aumentar el riesgo.',
      },
      {
        id: 'phishing-concepto', tipo: 'completar',
        enunciado: 'Completa el concepto.',
        plantilla: 'Un mensaje falso que suplanta identidad para obtener datos o provocar una acción se llama [HUECO].', respuestas: ['phishing', 'suplantación', 'suplantacion'],
        feedback: 'El phishing usa manipulación y apariencia confiable para empujar una acción.',
      },
      {
        id: 'phishing-reporte', tipo: 'unica',
        enunciado: '¿Qué advertencia pública sería más segura para crear en clase?',
        opciones: ['Una explicación con señales y canal oficial, sin enlaces activos ni formularios', 'Una copia exacta del mensaje con enlace para practicar', 'Un formulario falso para que otros prueben si detectan el engaño'], correcta: 0,
        feedback: 'Se puede enseñar el criterio sin reproducir enlaces, formularios ni datos que aumenten el riesgo.',
      },
    ];
  }

  return [
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
    id: `${unidad.id}-evidencia`, tipo: 'unica',
    enunciado: '¿Cuál opción registra evidencia antes de formular una interpretación?',
    opciones: [`Describir exactamente qué se observa y relacionarlo con ${unidad.conceptos[0]}`, 'Afirmar que algo es seguro porque parece conocido', 'Atribuir una intención sin buscar información adicional'], correcta: 0,
    feedback: 'La evidencia describe algo observable. La interpretación puede construirse después y debe indicar qué datos todavía faltan.',
  },
  {
    id: `${unidad.id}-transferencia`, tipo: 'multiple',
    enunciado: 'Ante un caso nuevo, ¿qué acciones permiten transferir lo aprendido de forma segura?',
    opciones: ['Pausar antes de actuar y reconocer qué datos faltan', `Aplicar el criterio: ${unidad.criterio}`, 'Comprobar la decisión mediante un canal o entorno autorizado', 'Actuar rápidamente para obtener más información', 'Recopilar datos personales reales para que el ejemplo sea convincente'], correctas: [0, 1, 2],
    feedback: 'Transferir no es repetir una respuesta: implica aplicar el criterio, verificar y mantener la protección de personas, datos y sistemas.',
  },
  {
    id: `${unidad.id}-etica`, tipo: 'unica',
    enunciado: 'En hacking ético, ¿qué condición debe existir antes de realizar una prueba?',
    opciones: ['Autorización explícita y alcance acordado', 'Curiosidad y una herramienta disponible', 'Una cuenta que parezca inactiva'], correcta: 0,
    feedback: 'Sin autorización y alcance no es una práctica ética, aunque la intención sea aprender o ayudar.',
  },
  ];
};

export const grados: Grado[] = ['7mo', '8vo', '9no'];
