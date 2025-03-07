import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Efawtara",
  description:
    "Avec eFawtara, gérez votre business en toute simplicité ! Automatisez vos factures et gérez efficacement votre inventaire.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/logo192.png" },
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://efawtara.com/",
    title: "Efawtara",
    description:
      "Avec eFawtara, gérez votre business en toute simplicité ! Automatisez vos factures et gérez efficacement votre inventaire.",
    siteName: "Efawtara",
    images: [
      {
        url: "https://efawtara.com/cover-efawtara.png",
        width: 1200,
        height: 630,
        alt: "Efawtara Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efawtara",
    description:
      "Avec eFawtara, gérez votre business en toute simplicité ! Automatisez vos factures et gérez efficacement votre inventaire.",
    images: ["https://efawtara.com/cover-efawtara.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="auto">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
