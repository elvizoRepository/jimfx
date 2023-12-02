import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className='bg_color '>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>)
}