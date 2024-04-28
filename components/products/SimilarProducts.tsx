import { Box, Typography } from '@mui/joy'
import ProductCard from '../common/ProductCard'
import { Product } from '@/types/product'

type SimilarProductsProps = {
  products: Product[]
}

function SimilarProducts({ products }: SimilarProductsProps) {
  return (
    <Box>
      <Typography level="title-lg" mb={1}>
        Similar products
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(22rem, 1fr))"
        gap={2}
      >
        <Box display="flex" gap={2} className="no-scrollbar">
          {products.map((product) => (
            <Box key={product._id} sx={{ flex: '0 0 18rem' }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SimilarProducts
