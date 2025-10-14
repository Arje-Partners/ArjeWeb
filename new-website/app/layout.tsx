import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arjé Partners | Treasury Management & Integration Solutions",
  description: "Soluciones de tesorería con capacidad de integración universal. Conectamos con cualquier sistema: ERPs estándar, sistemas custom y aplicaciones legacy.",
  keywords: "treasury management, integración ERP, sistemas custom, tesorería, Arjé Partners",
  icons: {
    icon: [
      { url: '/images/logo-arje-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/logo-arje-128x128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo-arje-128x128.png', sizes: '128x128', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
