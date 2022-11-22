import React from 'react'
// import { Montserrat_Alternates } from '@next/font/google'
import '../styles/dist.css'

// This is broken in current versions!!!
// const montserratAlternates = Montserrat_Alternates({
//   weight: ['200', '400', '600'],
//   style: ['normal', 'italic'],
//   variable: '--font-ma',
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'Roboto',
//     'Segoe UI',
//     'Helvetica Neue',
//     'sans-serif',
//   ],
//   subsets: ['latin'],
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <nav className="hidden lg:flex">
          <div>Logo</div>
          <div>Home</div>
          <div>Create Deck</div>
          <div>Settings</div>
          <div>User Image</div>
        </nav>
        {children}
      </body>
    </html>
  )
}
