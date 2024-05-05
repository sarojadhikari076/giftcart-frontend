import ContactInfo from '@/components/contact-us/ContactInfo'
import ContactUsForm from '@/components/contact-us/ContactUsForm'
import { Box, Container, Typography } from '@mui/joy'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact us for any queries or assistance',
  keywords: 'contact, help, support',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

function ContactUsPage() {
  return (
    <Container sx={{ py: { xs: 3, lg: 10 } }}>
      <Container maxWidth="sm">
        <Typography level="h2" textAlign="center" color="primary">
          Contact Us
        </Typography>
        <Typography level="body-sm" textAlign="center" mb={4}>
          We are here to help you. If you have any questions or need assistance, please feel free to
          contact us. Our customer service team is available 24/7 to assist you.
        </Typography>
      </Container>
      <Box
        display="grid"
        gap={3}
        alignItems="stretch"
        gridTemplateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
      >
        <Box flex={1}>
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            height={450}
            width="100%"
            mode="place"
            q="11 Devonshire House, Loughborough, LE11 3DW"
          />
        </Box>
        <Box flex={1}>
          <ContactInfo />
          <ContactUsForm />
        </Box>
      </Box>
    </Container>
  )
}

export default ContactUsPage
