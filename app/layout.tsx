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
    default: 'GiftCart | Buy anything, anytime from anywhere',
    template: '%s | GiftCart'
  },
  description: 'GiftCart is a one-stop shop for all your grocery needs',
  keywords: 'grocery, shopping, best deals, affordable, shipping, wide variety, online shopping',
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
