import AboutHeroSection from '@/components/about-us/AboutHeroSection'
import OurJourney from '@/components/about-us/OurJourney'
import OurTeamSection from '@/components/about-us/OurTeamSection'
import FeaturesSection from '@/components/common/FeaturesSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import { Stack } from '@mui/joy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Fresh Harvest is an online fruits and vegetables store that delivers fresh produce to your doorstep.',
  keywords: 'about, us, fresh, harvest, fruits, vegetables, store',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

function AboutUsPage() {
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

export default AboutUsPage
