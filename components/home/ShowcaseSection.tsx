import { Box, Container, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'

export default function ShowcaseSection({ products }: { products: Product[] }) {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
        flexWrap="wrap"
        gap={2}
      >
        <Typography level="title-lg">Showcase Section</Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap={2}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  )
}
