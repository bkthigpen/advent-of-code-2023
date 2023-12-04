import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Snowflakes from '@/components/Snowflakes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advent of Code 2023',
  description: 'Advent of Code 2023 built in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-blue-950 overflow-hidden h-full">
      <body className={`${inter.className}`}>
        <Snowflakes />
        <div className="container mx-auto text-white text-center pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
