import { Avatar, Box, Typography } from '@mui/joy'
import ProductRating from '../common/ProductRating'

type UserReview = {
  name: string
  avatar: string
  message: string
  rating: number
  createdAt: string
}

const userReviews: UserReview[] = [
  {
    name: 'Ben Johnson',
    avatar: '/images/avatar-1.jpeg',
    message:
      'This is a great product. I have been using it for a while now and I am very happy with the results. I would recommend it to anyone who is looking for a healthy and delicious.',
    rating: 5,
    createdAt: '01 Mar 2023'
  },
  {
    name: 'Sam Peters',
    avatar: '/images/avatar-2.avif',
    message:
      'I love couli flower. It is a great source of antioxidants, which protect your cells from harmful free radicals and inflammation. You can enjoy it raw, steamed, or roasted.',
    rating: 4,
    createdAt: '21 Jan 2024'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatar-3.jpeg',
    message:
      'While buying fruits and vegetables, I always prefer this store. They provide the best quality products at the best price.',
    rating: 5,
    createdAt: '12 Feb 2024'
  }
]

function UserReviews() {
  return (
    <Box>
      <Typography level="title-lg" mb={1}>
        User Reviews
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(22rem, 1fr))"
        gap={2}
      >
        {userReviews.map((review) => (
          <UserReviewCard key={review.name} review={review} />
        ))}
      </Box>
    </Box>
  )
}

export default UserReviews

function UserReviewCard({ review }: { review: UserReview }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      p={2}
      border="1px solid"
      borderColor="neutral.200"
      borderRadius="md"
    >
      <Box display="flex" alignItems="start" gap={1}>
        <Avatar src={review.avatar} size="lg" alt={review.name} />
        <Box>
          <Typography level="title-md">{review.name}</Typography>
          <ProductRating rating={review.rating} />
          <Typography level="body-xs" color="neutral">
            {review.createdAt}
          </Typography>
        </Box>
      </Box>
      <Typography level="body-sm">{review.message}</Typography>
    </Box>
  )
}
