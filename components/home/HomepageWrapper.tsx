'use client'
import BestSellingProducts from '@/components/home/BestSellingProducts'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import FeaturesSection from '@/components/common/FeaturesSection'
import HeroSection from '@/components/home/HeroSection'
import MainProduct from '@/components/home/MainProduct'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import { Stack } from '@mui/joy'
import { Product } from '@/types/product'

type HomepageWrapperProps = Readonly<{
  products: Product[]
  featuredProducts: Product[]
  bestProducts: Product[]
}>

function HomepageWrapper({ products, featuredProducts, bestProducts }: HomepageWrapperProps) {
  return (
    <Stack gap={{ xs: 4, md: 10 }} pb={{ xs: 4, md: 10 }}>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection products={products} />
      <CategoriesSection />
      <FeaturedProducts products={featuredProducts} />
      <MainProduct />
      <BestSellingProducts products={bestProducts} />
      <TestimonialSection />
    </Stack>
  )
}

export default HomepageWrapper
