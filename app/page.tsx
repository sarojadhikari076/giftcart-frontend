import { Metadata } from 'next'
import HomepageWrapper from '@/components/home/HomepageWrapper'
import { Product } from '@/types/product'
import http from '@/services/http'

export const metadata: Metadata = {
  title: 'Home | GiftCart',
  description: 'GiftCart is a one-stop shop for all your grocery needs',
  keywords: 'grocery, shopping, best deals, affordable, quality, wide variety, online shopping',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default async function Home() {
  const newArrivals = await http<Product[]>('/products/new-arrivals', {
    method: 'GET'
  })
  const featuredProducts = await http<Product[]>('/products/featured', {
    method: 'GET'
  })

  const bestProducts = await http<Product[]>('/products/best-selling', {
    method: 'GET'
  })

  return (
    <HomepageWrapper
      products={newArrivals}
      featuredProducts={featuredProducts}
      bestProducts={bestProducts}
    />
  )
}
