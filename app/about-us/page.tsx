import AboutHeroSection from '@/components/about-us/AboutHeroSection'
import OurJourney from '@/components/about-us/OurJourney'
import OurTeamSection from '@/components/about-us/OurTeamSection'
import FeaturesSection from '@/components/common/FeaturesSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import { Stack } from '@mui/joy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'GiftCart is a one-stop shop for all your needs',
  keywords: 'grocery, shopping, best deals, affordable, fresh, wide variety, online shopping',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default function AboutUsPage() {
  return (
    <Stack gap={5} pb={5}>
      <AboutHeroSection />
      <FeaturesSection />
      <OurJourney />
      <OurTeamSection />
      <TestimonialSection />
    </Stack>
  )
}
