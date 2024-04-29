import { Metadata } from 'next'
import HomepageWrapper from '@/components/home/HomepageWrapper'

export const metadata: Metadata = {
  title: 'Home | FreshHarvest',
  description: 'FreshHarvest is a one-stop shop for all your grocery needs',
  keywords: 'grocery, shopping, fresh, harvest',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default function Home() {
  return <HomepageWrapper />
}
