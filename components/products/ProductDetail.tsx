import AddToCartForm from '@/components/products/AddToCartForm'
import ProductRating from '@/components/common/ProductRating'
import { Product } from '@/types/product'
import { Box, Chip, Stack, Typography } from '@mui/joy'
import Image from 'next/image'

function ProductDetail({ product }: { product: Product }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
      gridTemplateRows={{ xs: '16rem auto', md: '30rem' }}
      alignItems="start"
      gap={2}
    >
      <Box position="relative" width={1} height={1}>
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          style={{ borderRadius: 5, objectFit: 'cover' }}
        />
      </Box>
      <Stack gap={1} flex={1}>
        <Typography level="h2">{product.name}</Typography>
        <Box display="flex" gap={1} textTransform="capitalize">
          <Chip variant="outlined">{product.category}</Chip>
          <Chip variant="outlined" color="primary">
            {product.subCategory}
          </Chip>
        </Box>
        <Typography
          level="h4"
          color="primary"
          endDecorator={
            <Typography level="body-xs" color="neutral">
              /{product.unit}
            </Typography>
          }
        >
          £{product.price}
        </Typography>
        <ProductRating rating={product.averageRating} />
        <Typography level="body-sm">{product.shortDescription}</Typography>
        <Typography level="body-sm">{product.longDescription}</Typography>
        <AddToCartForm
          availableQuantity={product.availableQuantity}
          name={product.name}
          unit={product.unit}
          productId={product._id}
        />
      </Stack>
    </Box>
  )
}

export default ProductDetail
