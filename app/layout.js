import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs';

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "Karuna Electronics - Componentes y Audio Profesional",
  description: "Tienda especializada en componentes electrónicos, instrumentos Fluke, diseño de PCB y electrónica de audio profesional en México",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#ea580c', // Orange-600 to match your theme
          colorTextOnPrimaryBackground: '#ffffff',
        },
        elements: {
          formButtonPrimary: 'bg-orange-600 hover:bg-orange-700',
          card: 'border border-gray-300',
        }
      }}
      localization={{
        signIn: {
          title: "Iniciar Sesión",
          subtitle: "Bienvenido a Karuna Electronics",
        },
        signUp: {
          title: "Crear Cuenta",
          subtitle: "Únete a Karuna Electronics",
        }
      }}
    >
      <html lang="es">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}