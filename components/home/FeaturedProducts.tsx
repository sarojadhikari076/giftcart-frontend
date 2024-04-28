import { Box, Container, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'
import http from '@/services/http'

export default async function FeaturedProducts() {
  const { products } = await http<{ products: Product[] }>('/products/featured', {
    method: 'GET'
  })

  return (
    <Container>
      <Typography level="title-lg" mb={2}>
        Our featured fruits and vegetables
      </Typography>
      <Box display="flex" gap={2} className="no-scrollbar">
        {products.map((product) => (
          <Box key={product._id} sx={{ flex: '0 0 18rem' }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  )
}
