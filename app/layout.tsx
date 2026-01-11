import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { QueryProvider } from "@/components/provider/query-provider";
import { UserSyncProvider } from "@/components/provider/user-sync-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAYR AI - AI-powered website generator",
  description:
    "LAYR AI is an AI-powered website generator that transforms ideas into structured UI layouts. Describe what you want, and Layr generates clean, production-ready design sections—fast, consistent, and scalable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
        >
          <QueryProvider>
            <UserSyncProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </UserSyncProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
