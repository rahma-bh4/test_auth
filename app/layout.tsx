import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "RideShare | Find Your Perfect Carpool Match",
  description: "Connect with drivers and passengers going your way. Save money and reduce your carbon footprint with our carpooling platform.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: This is a client component due to useState and useEffect
  // These hooks should be moved to a client component if needed
  // For now, this is just a mockup of what the nav integration would look like
  
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
              {/* New Navigation */}
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                      <div className="w-8 h-8 mr-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L4 6V12C4 15.31 7.58 19.5 12 21C16.42 19.5 20 15.31 20 12V6L12 2Z" 
                                fill="#6366F1" stroke="#6366F1" strokeWidth="1.5" />
                          <path d="M8.5 11.5L11 14L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <Link href="/" className="font-bold text-xl">RideShare</Link>
                    </div>
                  </div>

                  <div className="hidden md:flex md:space-x-8">
                    <Link href="/features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300 hover:text-foreground/70">
                      Features
                    </Link>
                    <Link href="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300 hover:text-foreground/70">
                      About
                    </Link>
                    <Link href="/how-it-works" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300 hover:text-foreground/70">
                      How It Works
                    </Link>
                   
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Theme toggle from your existing layout */}
                    <ThemeSwitcher />
                    
                    {/* Authentication section */}
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </div>
              </nav>

              <div >
                {children}
              </div>

             
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}