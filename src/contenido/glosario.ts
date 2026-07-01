export type EntradaGlosario = {
  termino: string;
  definicion: string;
  formas: string[];
};

export const glosario: EntradaGlosario[] = [
  { termino: 'Activo', definicion: 'Algo que queremos cuidar, como una cuenta, un archivo, un dispositivo o nuestra identidad.', formas: ['activo', 'activos'] },
  { termino: 'Alcance', definicion: 'Límite acordado de una actividad: qué se puede revisar, durante cuánto tiempo y de qué manera.', formas: ['alcance'] },
  { termino: 'Amenaza', definicion: 'Situación o acción que podría causar un problema o daño.', formas: ['amenaza', 'amenazas'] },
  { termino: 'Auditoría', definicion: 'Revisión ordenada para encontrar mejoras y comprobar si se cumplen ciertos criterios.', formas: ['auditoría', 'auditoria'] },
  { termino: 'Autenticación', definicion: 'Proceso para demostrar que una persona es quien dice ser al entrar a una cuenta.', formas: ['autenticación', 'autenticacion'] },
  { termino: 'Autorización', definicion: 'Permiso claro dado por la persona responsable antes de realizar una acción.', formas: ['autorización', 'autorizacion'] },
  { termino: 'Contención', definicion: 'Acciones para frenar un problema y evitar que se extienda.', formas: ['contención'] },
  { termino: 'Cookie', definicion: 'Pequeño dato que un sitio guarda en el navegador para recordar una sesión, una preferencia o cierta actividad.', formas: ['cookie', 'cookies'] },
  { termino: 'Credencial', definicion: 'Dato usado para entrar a una cuenta, por ejemplo un usuario, una contraseña o una llave de acceso.', formas: ['credencial', 'credenciales'] },
  { termino: 'Dato sensible', definicion: 'Información que requiere especial cuidado porque su exposición puede afectar seriamente a una persona.', formas: ['dato sensible', 'datos sensibles'] },
  { termino: 'Datos de navegación', definicion: 'Información que queda al usar el navegador, como historial, búsquedas, descargas, formularios o sesiones.', formas: ['dato de navegación', 'datos de navegación'] },
  { termino: 'Divulgación responsable', definicion: 'Comunicar una falla en privado a quien puede corregirla, sin exponer personas ni sistemas.', formas: ['divulgación responsable'] },
  { termino: 'Dominio', definicion: 'Nombre principal que identifica un sitio en internet, como anep.edu.uy.', formas: ['dominio', 'dominios'] },
  { termino: 'Encabezados HTTP', definicion: 'Indicaciones que un sitio y un navegador intercambian para decidir cómo manejar una página.', formas: ['encabezado http', 'encabezados http'] },
  { termino: 'Evidencia', definicion: 'Dato que puede observarse o comprobarse y que ayuda a sostener una conclusión.', formas: ['evidencia', 'evidencias'] },
  { termino: 'Ficticio', definicion: 'Inventado especialmente para practicar sin usar datos o cuentas de personas reales.', formas: ['ficticio', 'ficticia', 'ficticios', 'ficticias'] },
  { termino: 'Hash', definicion: 'Resultado de transformar un dato en una huella de caracteres que sirve para compararlo sin mostrar el original.', formas: ['hash'] },
  { termino: 'HTTPS', definicion: 'Conexión cifrada entre el navegador y un sitio. Protege el viaje de los datos, pero no garantiza que el contenido sea confiable.', formas: ['https'] },
  { termino: 'Huella digital', definicion: 'Rastros que dejamos al publicar, interactuar o usar servicios digitales.', formas: ['huella digital'] },
  { termino: 'Inferencia', definicion: 'Interpretación que hacemos a partir de una evidencia; puede ser razonable, pero todavía necesita comprobarse.', formas: ['inferencia', 'inferencias'] },
  { termino: 'Ingeniería social', definicion: 'Forma de manipulación que busca convencer a una persona para que actúe o entregue información.', formas: ['ingeniería social'] },
  { termino: 'IoT', definicion: 'Objetos conectados a internet, como cámaras, sensores, relojes o electrodomésticos.', formas: ['iot'] },
  { termino: 'K-anonimato', definicion: 'Método que permite consultar un dato mezclándolo con muchos resultados posibles para no revelar el dato completo.', formas: ['k-anonimato'] },
  { termino: 'Malware', definicion: 'Programa creado para dañar, espiar, alterar o tomar control de un dispositivo.', formas: ['malware'] },
  { termino: 'Maqueta', definicion: 'Versión preparada para aprender y probar sin trabajar sobre un sistema real.', formas: ['maqueta', 'maquetas'] },
  { termino: 'Metadatos', definicion: 'Información que describe un archivo, por ejemplo fecha, autor, dispositivo o ubicación.', formas: ['metadato', 'metadatos'] },
  { termino: 'MFA', definicion: 'Uso de dos o más formas de comprobar la identidad al entrar a una cuenta.', formas: ['mfa'] },
  { termino: 'Mínimo privilegio', definicion: 'Dar a cada persona o aplicación solamente los permisos que necesita para su tarea.', formas: ['mínimo privilegio', 'minimo privilegio'] },
  { termino: 'Minimización', definicion: 'Pedir, guardar y usar la menor cantidad posible de datos.', formas: ['minimización', 'minimizacion'] },
  { termino: 'Mitigación', definicion: 'Medida que reduce la posibilidad de un problema o disminuye sus consecuencias.', formas: ['mitigación', 'mitigaciones', 'mitigar'] },
  { termino: 'Nube', definicion: 'Servicios y datos que funcionan en computadoras remotas a las que accedemos por internet.', formas: ['nube'] },
  { termino: 'Navegador', definicion: 'Aplicación utilizada para abrir y recorrer sitios web, como Firefox, Chrome, Edge o Safari.', formas: ['navegador', 'navegadores'] },
  { termino: 'Parámetro de URL', definicion: 'Dato agregado al final de una URL para indicar una búsqueda, una opción o un identificador.', formas: ['parámetro', 'parámetros'] },
  { termino: 'Permiso', definicion: 'Acceso que se concede a una aplicación para usar una función o un dato.', formas: ['permiso', 'permisos'] },
  { termino: 'Phishing', definicion: 'Mensaje o sitio falso que intenta hacerse pasar por alguien confiable para obtener datos o provocar una acción.', formas: ['phishing'] },
  { termino: 'Ransomware', definicion: 'Tipo de programa dañino que bloquea o cifra información y exige un pago.', formas: ['ransomware'] },
  { termino: 'Rastreo', definicion: 'Registro de actividad para reconocer hábitos o seguir a una persona entre páginas y servicios.', formas: ['rastreo', 'rastrear'] },
  { termino: 'Respaldo', definicion: 'Copia separada de la información que permite recuperarla si se pierde o se daña.', formas: ['respaldo', 'respaldos'] },
  { termino: 'Riesgo', definicion: 'Posibilidad de que ocurra un problema y el impacto que podría producir.', formas: ['riesgo', 'riesgos', 'riesgoso', 'riesgosa', 'riesgosos', 'riesgosas'] },
  { termino: 'Segundo factor', definicion: 'Comprobación adicional a la contraseña, como una aplicación, una llave o un código temporal.', formas: ['segundo factor'] },
  { termino: 'Subdominio', definicion: 'Parte que aparece antes del dominio principal y organiza una sección, como “tramites” en tramites.gub.uy.', formas: ['subdominio', 'subdominios'] },
  { termino: 'Sesión', definicion: 'Período durante el cual una cuenta permanece reconocida después de iniciar sesión.', formas: ['sesión'] },
  { termino: 'Token', definicion: 'Código temporal o identificador que permite realizar una acción sin volver a escribir la contraseña.', formas: ['token', 'tokens'] },
  { termino: 'URL', definicion: 'Dirección completa de una página o recurso en internet.', formas: ['url', 'urls'] },
  { termino: 'Wi‑Fi pública', definicion: 'Red inalámbrica compartida en un espacio público y cuya administración puede no conocerse.', formas: ['wi‑fi pública', 'wifi pública', 'wi-fi pública', 'red pública', 'redes públicas'] },
  { termino: 'Vulnerabilidad', definicion: 'Debilidad que podría facilitar un acceso, error o daño no previsto.', formas: ['vulnerabilidad', 'vulnerabilidades'] },
];

const escaparRegExp = (texto: string) => texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const formasOrdenadas = glosario.flatMap((entrada) => entrada.formas).sort((a, b) => b.length - a.length);

export const patronGlosario = new RegExp(`\\b(${formasOrdenadas.map(escaparRegExp).join('|')})\\b`, 'giu');

export const buscarEntradaGlosario = (forma: string) => glosario.find((entrada) => entrada.formas.some((item) => item.toLocaleLowerCase('es') === forma.toLocaleLowerCase('es')));

export const obtenerEntradasGlosario = (textos: string[]) => {
  const contenido = textos.join(' ').toLocaleLowerCase('es');
  return glosario.filter((entrada) => entrada.formas.some((forma) => contenido.includes(forma.toLocaleLowerCase('es'))));
};
