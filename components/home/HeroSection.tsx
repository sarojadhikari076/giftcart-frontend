import { Box, Container, Typography } from '@mui/joy'
import BgOverlay from '../common/BgOverlay'
import ProductSearch from './ProductSearch'

function HeroSection() {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      py={2}
    >
      <Container sx={{ zIndex: 2, position: 'relative', textAlign: 'center' }} maxWidth="sm">
        <Typography level="body-lg" textColor="neutral.500">
          Fresh & Organic Foods
        </Typography>
        <Typography level="h1" textColor="primary.500">
          Fresh Harvest
        </Typography>
        <Typography level="h4" textColor="common.white" fontWeight={300} mb={3}>
          Organic Fruit and Vegetable Store
        </Typography>
        <ProductSearch />
      </Container>
      <BgOverlay bg="/images/hero-bg.jpeg" />
    </Box>
  )
}

export default HeroSection
