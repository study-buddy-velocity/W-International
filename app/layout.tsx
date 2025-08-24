import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "W International - Future-focused. Globally Ambitious.",
  description:
    "W International is a future-focused enterprise headquartered in Kerala, India. We build brands that enhance everyday life through thoughtful design, sustainable practices, and exceptional quality.",
  generator: "v0.app",
    icons: {
    icon: "/assets/logo-fav.png",       
    shortcut: "/assets/logo-fav.png",   
    apple: "/assets/logo-fav.png",      
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
