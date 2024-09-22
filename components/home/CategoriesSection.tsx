import { Card, CardOverflow, Container, Typography, Box, CardContent } from '@mui/joy'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Fresh Apples',
    description: '35% off',
    image: '/images/category-1.jpeg',
    href: '/products?category=fruits'
  },
  {
    id: 2,
    name: 'Tasty fruits',
    description: 'Free home delivery',
    image: '/images/category-2.jpeg',
    href: '/products?category=fruits'
  },
  {
    id: 3,
    name: 'Exotic vegetables',
    description: 'Discount £10',
    image: '/images/category-3.jpeg',
    href: '/products?category=vegetables'
  }
]

function CategoriesSection() {
  return (
    <Container maxWidth="lg">
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(22rem, 1fr))" gap={2}>
        {categories.map((category) => (
          <Card
            key={category.name}
            variant="outlined"
            size="sm"
            sx={{
              '&:hover img': {
                transform: 'scale(1.3)'
              },
              p: 0
            }}
          >
            <CardOverflow sx={{ position: 'relative', overflow: 'hidden', height: 300 }}>
              <Image
                src={category.image}
                alt={category.name}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.2s ease-in-out'
                }}
              />
            </CardOverflow>
            <CardContent
              sx={{
                textAlign: 'center'
              }}
            >
              <Typography level="h3">{category.name}</Typography>
              <Typography level="body-sm">{category.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

export default CategoriesSection
