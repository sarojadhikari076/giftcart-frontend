import { KeyboardArrowRight } from '@mui/icons-material'
import { Button } from '@mui/joy'
import Link from 'next/link'

export default function GotoCheckoutButton() {
  return (
    <Button
      sx={{ alignSelf: 'end' }}
      size="lg"
      endDecorator={<KeyboardArrowRight />}
      component={Link}
      href="/user/carts/checkout"
    >
      Go to checkout
    </Button>
  )
}
