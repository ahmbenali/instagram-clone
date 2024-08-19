import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '~/components/header'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instagram-Clone App',
  description:
    'A clone of Instagram built with Next.js 14, Firebase, Tailwind css and NextAuth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Header />
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
