import { Box, Container, Divider, Typography } from '@mui/joy'
import ProductRating from '../common/ProductRating'
import Image from 'next/image'

type Testimonial = {
  name: string
  avatar: string
  location: string
  rating: number
  message: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Emily Davis',
    avatar: '/images/avatar-1.jpeg',
    location: 'Birmingham, UK',
    rating: 5,
    message:
      'GiftCart offers an amazing selection of unique and high-quality products. I was impressed by the variety and customer service. Definitely my go-to for thoughtful gifts.'
  },
  {
    name: 'Lucas Roberts',
    avatar: '/images/avatar-2.avif',
    location: 'Manchester, UK',
    rating: 4,
    message:
      'Great experience with GiftCart! The items were beautifully packaged and arrived on time. The only reason I’m giving 4 stars is that I wish there were more personalisation options.'
  },
  {
    name: 'Sophia Martinez',
    avatar: '/images/avatar-3.jpeg',
    location: 'New York, USA',
    rating: 5,
    message:
      'I’ve been a subscriber to GiftCart for several months now, and every box is a pleasant surprise. The products are carefully curated and of top-notch quality. Highly recommend!'
  }
]

function TestimonialSection() {
  return (
    <Container>
      <Typography level="h2" textAlign="center" color="primary">
        Testimonials
      </Typography>
      <Typography level="body-lg" mb={4} textColor="neutral.500" textAlign="center">
        What our customers say about us
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(22rem, 1fr))" gap={2}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Box>
    </Container>
  )
}

export default TestimonialSection

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Box key={testimonial.name}>
      <Box
        sx={{
          p: 2,
          borderRadius: 'md',
          bgcolor: 'neutral.100'
        }}
      >
        <Box display="flex" gap={1}>
          <Image
            src={testimonial.avatar}
            width={60}
            height={60}
            alt={testimonial.name}
            style={{ borderRadius: 5, objectFit: 'cover' }}
          />
          <Box>
            <Typography level="title-lg">{testimonial.name}</Typography>
            <Typography level="body-xs" textColor="neutral.500">
              {testimonial.location}
            </Typography>
            <ProductRating rating={testimonial.rating} />
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography level="body-sm">{testimonial.message}</Typography>
      </Box>
    </Box>
  )
}
