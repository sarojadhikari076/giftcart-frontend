import { Star } from '@mui/icons-material'
import { Box } from '@mui/joy'

function ProductRating({ rating }: { rating: number }) {
  return (
    <Box display="flex" alignItems="center">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          fontSize="small"
          color={index < rating ? 'primary' : 'disabled'}
        />
      ))}
    </Box>
  )
}

export default ProductRating
