import { Inter } from 'next/font/google'
import Sidebar from '@/components/Utilities/Sidebar'
import './globals.css'
import Navbar from '@/components/Utilities/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodAnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-slate-800 via-slate-950 to-blue-950`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
