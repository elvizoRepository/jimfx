import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'JIM FX CAPITAL',
  description: 'Our mission is to deliver superior investment returns while maintaining the highest standards of integrity and transparency',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Jim Fx Capital</title>
      </head>
      <body className='bg_color '>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>)
}