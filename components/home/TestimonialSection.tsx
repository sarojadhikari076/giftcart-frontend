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
    name: 'Junior Smith',
    avatar: '/images/avatar-1.jpeg',
    location: 'Okland, USA',
    rating: 5,
    message:
      'This is a great place to buy fresh and organic fruits and vegetables. I am very happy with the quality of the products.'
  },
  {
    name: 'Vladi Amin',
    avatar: '/images/avatar-2.avif',
    location: 'London, UK',
    rating: 4,
    message:
      'My experience with this store is very good. I am very happy with the quality of the products and the service.'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatar-3.jpeg',
    location: 'Sydney, Australia',
    rating: 5,
    message:
      'While buying fruits and vegetables, I always prefer this store. They provide the best quality products at the best price.'
  }
]

function TestimonialSection() {
  return (
    <Container>
      <Typography level="h2" textAlign="center" color="primary">
        Testimonials
      </Typography>
      <Typography
        level="body-lg"
        mb={4}
        textColor="neutral.500"
        textAlign="center"
      >
        What our customers say about us
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(22rem, 1fr))"
        gap={2}
      >
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
