import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import type React from "react"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Team Oliveira Brazilian Jiu-jitsu oficial website",
  description:
    "Train with Purpose. Fight with Passion. Join Team Oliveira Brazilian Jiu Jitsu. World-class BJJ instruction for all ages and skill levels.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
