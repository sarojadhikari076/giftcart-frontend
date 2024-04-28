import { Box, Container, Typography } from '@mui/joy'
import { HorizontalCard } from '../common/ProductCard'
import http from '@/services/http'
import { Product } from '@/types/product'

export default async function BestSellingProducts() {
  const { products } = await http<{ products: Product[] }>('/products/best-selling', {
    method: 'GET'
  })

  return (
    <Container>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Typography level="h2" textAlign="center">
          Our Best Selling Vegetables & Fruits
        </Typography>
        <Typography level="body-lg" textColor="neutral.500" textAlign="center">
          Explore our best selling vegetables and fruits. We provide the best quality vegetables and
          fruits at the best price.
        </Typography>
      </Container>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(22rem, 1fr))" gap={2}>
        {products.map((product) => (
          <HorizontalCard key={product._id} product={product} />
        ))}
      </Box>
    </Container>
  )
}
