// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "personal website development",
  description: "we are development personal",
};

const AppThemeProvider = dynamic(() => import("./Components/context/theme"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("__theme__")?.value || "system";
  
  return (
    <html
      className={theme}
      style={theme !== "system" ? { colorScheme: theme } : {}}
      lang="en"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-full w-full overflow-hidden`}
      >
        <AppThemeProvider attribute="class" defaultTheme={theme} enableSystem>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
