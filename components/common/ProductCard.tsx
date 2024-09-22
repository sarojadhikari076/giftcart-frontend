import { Product } from '@/types/product'
import { Box, Card, CardContent, CardOverflow, Chip, Link, Typography } from '@mui/joy'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import ProductRating from './ProductRating'
import { AddToCartButton } from '../products/AddToCartForm'

function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      variant="outlined"
      size="sm"
      sx={{
        '&:hover img': {
          transform: 'scale(1.3)'
        }
      }}
    >
      <CardOverflow
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: 120
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.2s ease-in-out'
          }}
        />
        <Chip sx={{ mt: 1 }} color={product.averageRating > 3 ? 'success' : 'warning'}>
          {product.averageRating} ★
        </Chip>
      </CardOverflow>
      <CardContent
        sx={{
          p: 0
        }}
      >
        <Link
          overlay
          level="title-lg"
          color="neutral"
          component={NextLink}
          href={`/products/${product.slug}`}
        >
          {product.name}
        </Link>
        <Typography level="body-xs" mb={2} height="5.5ch" overflow="clip">
          {product.shortDescription}
        </Typography>
        <Box flex={1} />
        <Box display="flex" alignItems="end" justifyContent="space-between">
          <Typography
            level="title-md"
            color="primary"
            endDecorator={<Typography level="body-xs">/{product.unit}</Typography>}
          >
            £{product.price}
          </Typography>
          <AddToCartButton
            productId={product.id}
            name={product.name}
            quantity={1}
            unit={product.unit}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCard

export function HorizontalCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        flexDirection: 'row',
        p: 0,
        alignItems: 'center',
        borderRadius: 'md',
        bgcolor: 'neutral.100',
        overflow: 'hidden',
        '&:hover img': {
          transform: 'scale(1.3)'
        }
      }}
    >
      <Box position="relative" overflow="hidden" height={1} width={120}>
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.2s ease-in-out'
          }}
        />
        <Chip sx={{ mt: 1, ml: 1 }} color={product.averageRating > 3 ? 'success' : 'warning'}>
          {product.averageRating} ★
        </Chip>
      </Box>
      <CardContent sx={{ flex: 1, gap: 1, p: 1, pl: 0 }}>
        <Link
          level="title-lg"
          overlay
          color="neutral"
          component={NextLink}
          href={`/products/${product.slug}`}
        >
          {product.name}
        </Link>
        <ProductRating rating={product.averageRating} />
        <Box display="flex" alignItems="end" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Typography
            level="title-lg"
            textColor="primary.500"
            endDecorator={<Typography level="body-xs">/{product.unit}</Typography>}
          >
            £{product.price}
          </Typography>
          <AddToCartButton
            productId={product.id}
            name={product.name}
            unit={product.unit}
            quantity={1}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
