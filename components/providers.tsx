'use client'

import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers
