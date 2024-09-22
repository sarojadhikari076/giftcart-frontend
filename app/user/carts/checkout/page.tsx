'use client'
import PaymentForm from '@/components/carts/PaymentForm'
import http from '@/services/http'
import { getErrorText } from '@/utils/error'
import {
  Box,
  Container,
  Divider,
  Sheet,
  Typography,
  CircularProgress,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@mui/joy'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

type Summary = {
  subtotal: number
  shippingFee: number
  total: number
  discount: number
  clientSecret: string
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState(true)
  const [loadingCoupon, setLoadingCoupon] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [summary, setSummary] = useState<Summary>({
    subtotal: 0,
    shippingFee: 0,
    discount: 0,
    total: 0,
    clientSecret: ''
  })

  const options: StripeElementsOptions = {
    mode: 'payment',
    amount: Math.round(summary.total * 100),
    capture_method: 'manual',
    currency: 'gbp',
    appearance: {
      theme: 'stripe',
      variables: { colorPrimaryText: '#f44336' }
    }
  }

  const handleApplyCoupon = async () => {
    setLoadingCoupon(true)

    try {
      const response = await http<number>('/coupons/check-validities', {
        method: 'POST',
        data: { coupon }
      })

      const discount = summary.subtotal * (response / 100)
      setSummary((prev) => ({ ...prev, discount }))
      toast.success(`Coupon applied successfully! You saved £${discount} 🎉`)
    } catch (error) {
      setSummary((prev) => ({ ...prev, discount: 0 }))
      toast.error(getErrorText(error))
    } finally {
      setLoadingCoupon(false)
    }
  }

  useEffect(() => {
    async function fetchSummary() {
      try {
        const response = await http<Summary>('/carts/summary')
        setSummary(response)
      } catch (error) {
        toast.error(getErrorText(error))
      } finally {
        setLoading(false)
      }
    }

    fetchSummary()
  }, [])

  if (loading) return <LoadingCheckout />

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'md',
          p: 2,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography level="h3" color="primary">
          Checkout information
        </Typography>
        <Divider />
        <FormControl>
          <FormLabel>Coupon code</FormLabel>
          <Input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter your coupon code"
            endDecorator={
              <Button
                size="sm"
                loading={loadingCoupon}
                disabled={coupon.trim() === ''}
                onClick={handleApplyCoupon}
              >
                Apply
              </Button>
            }
          />
        </FormControl>
        <Box display="grid" gap={1} gridTemplateColumns="1fr 1fr" justifyContent="space-between">
          <Typography>Subtotal:</Typography>
          <Typography textAlign="right">£{summary.subtotal}</Typography>
          <Typography>Shipping:</Typography>
          <Typography textAlign="right">£{summary.shippingFee}</Typography>
          <Typography>Discount:</Typography>
          <Typography textAlign="right">-£{summary.discount}</Typography>
          <Typography level="title-lg">Total:</Typography>
          <Typography level="title-lg" textAlign="right">
            £{summary.total - summary.discount}
          </Typography>
        </Box>
        <Divider />
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm coupon={coupon} clientSecret={summary.clientSecret} />
        </Elements>
      </Sheet>
    </Container>
  )
}

function LoadingCheckout() {
  return (
    <Stack alignItems="center" justifyContent="center" gap={2} minHeight="40vh">
      <CircularProgress />
      <Typography level="title-lg" textAlign="center">
        Loading checkout summary...
      </Typography>
    </Stack>
  )
}
