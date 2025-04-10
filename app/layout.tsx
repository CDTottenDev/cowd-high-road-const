import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "High Road Construction",
  description: "Quality construction services for residential, commercial, and industrial projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
