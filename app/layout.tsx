
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MILO: Personal Fitness Tracker',
  description: 'Train Smart, Train Free',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className="bg-black">
   
      <Header />
      {children}
      <Footer />

    
      </body>
    </html>
  )
}
