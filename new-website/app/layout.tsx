import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjé Partners | Tus datos, donde tienen que estar",
  description: "Integración de sistemas y datos para empresas medianas y grandes: conectamos aplicaciones, transformamos, cargamos y entregamos la información donde se necesita. Más de 15 años haciéndolo, hoy con Rosetta IA.",
  keywords: "treasury management, Rosetta IA, integración ERP, sistemas custom, tesorería, conciliación bancaria, Arjé Partners",
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
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${epilogue.variable}`}>
      <head>
        <meta name="color-scheme" content="light dark" />
        {/* Decide el tema antes del primer pintado: sin esto, quien tiene el modo oscuro guardado ve un fogonazo en claro */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-surface text-arje-gray-900 dark:text-gray-100 transition-colors duration-200`}>
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
