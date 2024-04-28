import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { Box, Stack } from '@mui/joy'
import ThemeProvider from '../theme/ThemeProvider'
import { ReduxProvider } from '@/redux/provider'
import NavDrawer from '@/components/drawers/NavDrawer'
import { ToastContainer, Bounce } from 'react-toastify'
import { Metadata } from 'next'
import { headFont } from '@/theme/fonts'
import Auth from '@/components/auth/Auth'

export const metadata: Metadata = {
  title: {
    default: 'FreshHarvest | Buy Fresh Fruits and Vegetables Online',
    template: '%s | FreshHarvest'
  },
  description: 'FreshHarvest is a platform to buy fresh fruits and vegetables online',
  keywords: 'fresh, fruits, vegetables, online, buy',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <Stack minHeight="100vh" bgcolor="neutral.50">
              <Navbar />
              {children}
              <Box flexGrow={1} />
              <Footer />
            </Stack>
            <NavDrawer />
          <Auth />
          </ThemeProvider>
        </ReduxProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          stacked={false}
          limit={3}
          hideProgressBar
          closeOnClick
          draggable
          pauseOnHover
          transition={Bounce}
          toastStyle={{ fontFamily: headFont.style.fontFamily }}
        />
      </body>
    </html>
  )
}
