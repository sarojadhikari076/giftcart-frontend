import { Box, Container, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <Container>
      <Typography level="title-lg" mb={2}>
        Our featured products
      </Typography>
      <Box display="flex" gap={2} className="no-scrollbar">
        {products.map((product) => (
          <Box key={product.id} sx={{ flex: '0 0 18rem' }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  )
}
