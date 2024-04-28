import { CreditCard, LocalShipping, Money, Phone } from '@mui/icons-material'
import { Typography, Container, Box } from '@mui/joy'

const features = [
  {
    title: 'Free Delivery',
    description: 'Free shipping on all order over £99',
    icon: <LocalShipping sx={{ fontSize: 50, color: 'white' }} />
  },
  {
    title: 'Secure Payment',
    description: 'Trusted payment gateway',
    icon: <CreditCard sx={{ fontSize: 50, color: 'white' }} />
  },
  {
    title: '30 Days Money Back',
    description: 'Return items within 30 days',
    icon: <Money sx={{ fontSize: 50, color: 'white' }} />
  },
  {
    title: 'Support 24/7',
    description: 'Contact us 24 hours a day',
    icon: <Phone sx={{ fontSize: 50, color: 'white' }} />
  }
]

function FeaturesSection() {
  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
        gap={2}
      >
        {features.map((feature) => (
          <Box
            key={feature.title}
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={4}
            borderRadius="md"
            bgcolor="neutral.100"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={100}
              height={100}
              bgcolor="primary.500"
              borderRadius={90}
              mb={1}
            >
              {feature.icon}
            </Box>
            <Typography level="h4">{feature.title}</Typography>
            <Typography level="body-sm">{feature.description}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default FeaturesSection
