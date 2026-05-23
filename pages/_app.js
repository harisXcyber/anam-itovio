import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from '../contexts/ThemeContext'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
