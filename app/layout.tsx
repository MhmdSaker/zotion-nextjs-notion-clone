import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const readex = Readex_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zotion",
  description: "The most effective workspace ever!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readex.className} antialiased`}>
        <ThemeProvider storageKey="zotion-theme-2" attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}</ThemeProvider></body>
    </html>
  );
}
