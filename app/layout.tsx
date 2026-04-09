import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veterinaria Paraná | Centro Veterinario en Villa Adelina",
  description:
    "Centro veterinario de referencia en Villa Adelina, Buenos Aires. Cirugías, oncología, diagnóstico por imágenes, internación y más. Más de 2400 reseñas positivas.",
  keywords: [
    "veterinaria villa adelina",
    "veterinario villa adelina",
    "veterinaria parana",
    "cirugia veterinaria",
    "oncologia veterinaria",
    "diagnostico por imagenes mascotas",
    "internacion veterinaria",
  ],
  openGraph: {
    title: "Veterinaria Paraná | Centro Veterinario en Villa Adelina",
    description:
      "Cuidamos la salud de tu mascota con excelencia médica y compromiso humano.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
