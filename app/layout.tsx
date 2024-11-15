import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/provider/CartProvider'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'],weight: ['400','700']})

export const metadata: Metadata = {
  title: 'duy hoang app',
  description: 'create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} 
      text-slate-700`}>
        <Toaster toastOptions={{
          style:{
            background:'rbg(50,50,70)',
            color:'red',
          }
        }}/>
        <CartProvider >
          <div className='flex flex-col min-h-screen'>
          <Navbar/>
          <main className='flex-grow'>{children}</main> 
          <Footer/>
          </div>
        </CartProvider>
        </body>
    </html>
  )
}
