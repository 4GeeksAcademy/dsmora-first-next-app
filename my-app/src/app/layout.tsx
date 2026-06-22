import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FavoritesProvider } from "@/context/favorites-context";
import { TopNav } from "@/components/navigation/top-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdventureHub",
  description: "Marketplace premium de experiencias de viaje para exploradores modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="adventure-body min-h-full">
        <FavoritesProvider>
          <div className="flex min-h-screen flex-col">
            <TopNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
