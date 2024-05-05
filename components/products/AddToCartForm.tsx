'use client'
import http from '@/services/http'
import { getErrorText } from '@/utils/error'
import { Add, Remove, ShoppingBasket } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/joy'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

type AddToCartFormProps = {
  productId: string | number
  name: string
  availableQuantity: number
  unit: string
}

type AddToCartButtonProps = {
  productId: string | number
  name: string
  quantity: number
  unit: string
}

function AddToCartForm({ availableQuantity, productId, name, unit }: AddToCartFormProps) {
  const [quantity, updateQty] = useState(1)

  return (
    <Box display="flex" gap={2} alignItems="center">
      <IconButton
        variant="outlined"
        size="sm"
        disabled={quantity <= 1}
        onClick={() => updateQty(quantity - 1)}
      >
        <Remove />
      </IconButton>
      <Typography
        level="h4"
        alignItems="baseline"
        textAlign="center"
        endDecorator={<Typography level="body-xs">{unit}</Typography>}
      >
        {quantity}
      </Typography>
      <IconButton
        variant="outlined"
        size="sm"
        color="primary"
        disabled={quantity >= availableQuantity}
        onClick={() => updateQty(quantity + 1)}
      >
        <Add />
      </IconButton>
      <AddToCartButton name={name} quantity={quantity} unit={unit} productId={productId} />
    </Box>
  )
}

export function AddToCartButton({ productId, quantity, unit, name }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const isAuthenticated = () => Boolean(localStorage.getItem('fresh_harvest_token'))

  async function handleClick() {
    if (isAuthenticated() === false) {
      toast.error('Please login to add products to cart')
      router.push('/auth/login')
      return
    }

    try {
      setIsLoading(true)
      await http('/carts', {
        method: 'POST',
        data: {
          productId,
          quantity
        }
      })

      toast.success(`Added ${quantity} ${unit} ${name} to cart`)
    } catch (error) {
      toast.error(getErrorText(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      startDecorator={<ShoppingBasket />}
      variant="outlined"
      onClick={handleClick}
      loading={isLoading}
      disabled={isLoading}
    >
      Add to cart
    </Button>
  )
}

export default AddToCartForm
