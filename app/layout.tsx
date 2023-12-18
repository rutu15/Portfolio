import { Header, Footer } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {TransitionEffect} from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black flex flex-col w-full h-full min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
