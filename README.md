# Módulo Ciberseguridad EBI

Guía docente y Recurso Educativo Abierto para trabajar ciberseguridad, protección de datos y hacking ético defensivo en 7.º, 8.º y 9.º EBI.

## Alcance

- 7.º: identidad, huella digital, datos, permisos, navegación segura y reporte responsable.
- 8.º: credenciales, autenticación, phishing, ransomware y laboratorio defensivo.
- 9.º: modelado de amenazas, seguridad web, riesgos en IoT y auditoría ética.

Todas las prácticas utilizan casos ficticios, maquetas locales y autorización explícita. El recurso no propone pruebas sobre cuentas, redes o sistemas de terceros.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Vista estudiantil embebible:

```text
/?grado=8vo&interfaz=alumno&unidad=phishing
```

## Verificación

```bash
npm run lint
npm run build
```

El proyecto usa exportación estática y admite `NEXT_PUBLIC_REA_BASE_PATH` y `NEXT_PUBLIC_REA_PUBLIC_URL` para GitHub Pages.
