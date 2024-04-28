import ProductDetail from '@/components/products/ProductDetail'
import ReviewForm from '@/components/products/ReviewForm'
import SimilarProducts from '@/components/products/SimilarProducts'
import UserReviews from '@/components/products/UserReviews'
import http from '@/services/http'
import { Product } from '@/types/product'
import { Container } from '@mui/joy'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProductPageProps = {
  params: {
    productSlug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product } = await http<{ product: Product }>(`/products/${params.productSlug}`, {
    method: 'GET'
  })

  return {
    title: `${product.name}`,
    description: product.shortDescription,
    keywords: product.subCategory,
    creator: 'Saroj Adhikari',
    publisher: 'Saroj Adhikari'
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { product, similarProducts } = await http<{
    product: Product
    similarProducts: Product[]
  }>(`/products/${params.productSlug}`, {
    method: 'GET'
  })

  if (product === undefined) return notFound()

  return (
    <Container sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <ProductDetail product={product} />
      <UserReviews />
      <ReviewForm />
      <SimilarProducts products={similarProducts} />
    </Container>
  )
}
