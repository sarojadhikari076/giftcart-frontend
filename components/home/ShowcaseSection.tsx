import { Box, Container, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'
import http from '@/services/http'

export default async function ShowcaseSection() {
  const { products } = await http<{ products: Product[] }>('/products', {
    method: 'GET'
  })

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
        <Typography level="title-lg">Fresh fruits & vegetables</Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap={2}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </Container>
  )
}
