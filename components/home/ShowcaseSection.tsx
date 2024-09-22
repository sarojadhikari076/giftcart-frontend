import { Box, Container, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'

export default function ShowcaseSection({ products }: { products: Product[] }) {
  return (
    <Container>
      <Typography level="title-lg" mb={2}>
        Newly arrival products
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap={2}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  )
}
