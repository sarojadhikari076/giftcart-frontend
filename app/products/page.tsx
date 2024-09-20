import ProductCard from '@/components/common/ProductCard'
import ProductFilterButton from '@/components/common/ProductFilterButton'
import ProductFilterDrawer from '@/components/drawers/ProductFilterDrawer'
import ProductFilter from '@/components/products/ProductFilter'
import http from '@/services/http'
import { Product } from '@/types/product'
import { Box, Container, Sheet, Stack, Typography } from '@mui/joy'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Search our products to find your favorite items',
  keywords: 'products, search, find, buy',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

type ProductsPageProps = {
  searchParams: {
    query: string
    price: string[]
    category: string
    sort: string
    subCategories: string[]
  }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const products = await http<Product[]>('/products', {
    params: searchParams
  })

  return (
    <>
      <Container sx={{ py: 2 }}>
        <ProductFilterButton />
        <Box display="flex" alignItems="start" gap={2}>
          <Sheet
            sx={{
              width: 250,
              boxShadow: 'sm',
              bgcolor: 'common.white',
              borderRadius: 'md',
              p: 2,
              display: { xs: 'none', md: 'block' }
            }}
          >
            <ProductFilter />
          </Sheet>
          <Box
            flex={1}
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(16rem, 1fr))"
            gap={2}
          >
            {products.length === 0 ? <EmptyState /> : null}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </Container>
      <ProductFilterDrawer />
    </>
  )
}

function EmptyState() {
  return (
    <Stack
      textAlign="center"
      minHeight="40vh"
      alignItems="center"
      justifyContent="center"
      gap={1}
      gridColumn="1 / -1"
    >
      <Image width={200} height={200} src="/images/apple.png" alt="Empty State" />
      <Box mt={2}>
        <Typography level="h2" textColor="neutral.500">
          No products found
        </Typography>
        <Typography level="body-sm" textColor="neutral.500">
          Try changing your search criteria
        </Typography>
      </Box>
    </Stack>
  )
}
