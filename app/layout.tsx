import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REA docente de Ciberseguridad EBI',
  description: 'Guía docente de ciberseguridad, protección de datos y hacking ético para 7.º, 8.º y 9.º EBI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
