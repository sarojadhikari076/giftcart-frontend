'use client'
import { Check } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Container, Typography } from '@mui/joy'
import Link from 'next/link'

function CheckoutSuccessPage() {
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }} variant="soft" color="success">
          <Check sx={{ width: 50, height: 50 }} />
        </Avatar>
        <Typography level="h2" color="primary" textAlign="center">
          🎉 Checkout Success
        </Typography>
        <Typography level="body-sm" textAlign="center">
          Thank you for your purchase. Your order has been successfully placed. We will send you an
          email with the order details.
        </Typography>
        <ButtonGroup spacing={2}>
          <Button href="/user/profile" component={Link} variant="outlined">
            View Orders
          </Button>
          <Button href="/" component={Link} variant="solid" color="primary">
            Continue Shopping
          </Button>
        </ButtonGroup>
      </Container>
    </>
  )
}

export default CheckoutSuccessPage
