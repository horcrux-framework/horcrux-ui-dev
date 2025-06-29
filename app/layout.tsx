import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

import {
    NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shadcn Storybook Registry",
    template: `%s | Shadcn Storybook Registry`,
  },
  description: "A collection of stories for the components of shadcn/ui",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-primary flex flex-row-reverse px-4 py-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/storybook">Storybook</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        {children}
        <footer className="flex flex-row items-center justify-between px-4 py-2"></footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
