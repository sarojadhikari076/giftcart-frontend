'use client'

import http from '@/services/http'
import { getErrorText } from '@/utils/error'
import { Button } from '@mui/joy'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

type PaymentFormProps = {
  clientSecret: string
  coupon: string
}

export default function PaymentForm({ clientSecret, coupon }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    if (stripe === null || elements === null) return
    setIsLoading(true)

    try {
      const result = await elements.submit()
      if (result.error) {
        return toast.error(result.error.message)
      } else {
        await stripe.confirmPayment({ clientSecret, redirect: 'if_required' })
        await http('/orders', { method: 'POST', data: { coupon: coupon || undefined } })
        router.replace('/user/carts/checkout/success')
      }
    } catch (error) {
      console.error(error)
      toast.error(getErrorText(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PaymentElementForm />
      <Button
        size="lg"
        onClick={handlePayment}
        disabled={isLoading || stripe === null || elements === null}
        loading={isLoading}
      >
        Place order
      </Button>
    </>
  )
}

function PaymentElementForm() {
  return <PaymentElement />
}
