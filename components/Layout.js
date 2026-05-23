import Navbar from './Navbar'
import Footer from './Footer'
import Chatbot from './Chatbot'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-main">{children}</main>
      <Footer />
      <Chatbot />
    </>
  )
}
