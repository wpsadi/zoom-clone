import { StreamVideoProvider } from '@/providers/StreamClientProvider';
import React from 'react'

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (

    <main>
      <StreamVideoProvider>

        {children}
      </StreamVideoProvider>


    </main>
  )
}

export default Layout;