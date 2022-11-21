import React from 'react'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
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
