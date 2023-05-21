import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter, Josefin_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const josefin_sans = Josefin_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Pro-Lab',
  description: 'Diagnostic Center',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
