import { Header } from '@/components/Header'
import{Home} from '@/components/Home'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kitchen',
  description: 'Kitchen project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Home/>
        <main>{children}</main>
      </body>
    </html>
  )
}
