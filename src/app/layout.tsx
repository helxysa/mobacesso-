import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "MobAcesso | Mobilidade Urbana Acessível",
  description: "Aplicativo para mobilidade urbana acessível",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} antialiased bg-gradient-to-r from-blue-600 to-blue-800` }
      >
        {children}
      </body>
    </html>
  );
}
