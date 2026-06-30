const hash = (texto: string) => {
  let valor = 2166136261;
  for (let indice = 0; indice < texto.length; indice += 1) {
    valor ^= texto.charCodeAt(indice);
    valor = Math.imul(valor, 16777619);
  }
  return valor >>> 0;
};

export const mezclar = (id: string, opciones: string[]) => {
  const resultado = opciones.map((texto, indiceOriginal) => ({ texto, indiceOriginal }));
  let semilla = hash(id);
  for (let indice = resultado.length - 1; indice > 0; indice -= 1) {
    semilla = (Math.imul(semilla, 1664525) + 1013904223) >>> 0;
    const destino = semilla % (indice + 1);
    [resultado[indice], resultado[destino]] = [resultado[destino], resultado[indice]];
  }
  return resultado;
};

export const normalizar = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
