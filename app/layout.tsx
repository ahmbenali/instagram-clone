import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Header, Providers } from '~/components'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instagram-Clone App',
  description:
    'A clone of Instagram built with Next.js 14, Firebase, Tailwind css and NextAuth',
}

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Providers>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={inter.className}>
          <Header />
          <main className="">{children}</main>
        </body>
      </html>
    </Providers>
  )
}

export default RootLayout
