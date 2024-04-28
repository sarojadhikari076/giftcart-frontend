import BestSellingProducts from '@/components/home/BestSellingProducts'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import FeaturesSection from '@/components/common/FeaturesSection'
import HeroSection from '@/components/home/HeroSection'
import MainProduct from '@/components/home/MainProduct'
import ShowcaseSection from '@/components/home/ShowcaseSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import { Stack } from '@mui/joy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | FreshHarvest',
  description: 'FreshHarvest is a one-stop shop for all your grocery needs',
  keywords: 'grocery, shopping, fresh, harvest',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default function Home() {
  return (
    <Stack gap={{ xs: 4, md: 10 }} pb={{ xs: 4, md: 10 }}>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CategoriesSection />
      <FeaturedProducts />
      <MainProduct />
      <BestSellingProducts />
      <TestimonialSection />
    </Stack>
  )
}
