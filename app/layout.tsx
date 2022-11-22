import React from 'react'
import '../styles/dist.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
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
