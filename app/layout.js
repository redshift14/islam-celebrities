import { StateContext } from '@/context/stateContext'
import Navbar from '@/components/Navbar'
import { Amiri } from 'next/font/google'
import '../styles/globals.css'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'تراجم - شخصيات مسلمة',
  description: 'موقع لاستعراض نبذات عن شخصيات اسلامية مستخرجة من كتاب سير اعلام النبلاء',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl'>
      <body className={amiri.className}>
        <StateContext>
          <Navbar />      
          <main>
            {children}
          </main>
        </StateContext>
      </body>
    </html>
  )
}
