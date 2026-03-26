import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Astra Comms | Strategic Communications Agency',
  description:
    'Designed to Communicate. Built to Impact. Astra Comms is a PR and communications agency delivering strategic communications for forward-thinking organizations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className='flex-grow flex flex-col items-center'>
          <div className='w-full max-w-7xl px-4 md:px-8'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
