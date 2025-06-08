import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SD.Portfolio',
  description: 'Created with Sameh Darweesh',
  generator: 'sameh Darwesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
