import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack
} from '@mui/joy'

function ReviewForm() {
  return (
    <Box>
      <Stack gap={1} maxWidth="50rem">
        <Typography level="title-lg">
          Leave a review for this product
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter your email" />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Rating</FormLabel>
            <Input placeholder="Enter your rating" />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Review</FormLabel>
          <Textarea minRows={5} maxRows={8} placeholder="Enter your review" />
        </FormControl>
        <Button sx={{ alignSelf: 'start' }}>Submit</Button>
      </Stack>
    </Box>
  )
}

export default ReviewForm
