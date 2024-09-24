'use client'

import http from '@/services/http'
import { Product } from '@/types/product'
import { getErrorText } from '@/utils/error'
import { Box, Button, Container, Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductCard from '../common/ProductCard'
import { useAppSelector } from '@/hooks/useRedux'
import { isBirthdayWithinNextWeek } from '@/utils/date'

function BirthdayCard() {
  const [code, setCode] = useState('')
  const [fetchingCode, setFetchingCode] = useState(false)
  const [birthdayProducts, setBirthdayProducts] = useState<Product[]>([])
  const { isLoggedIn, user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    async function fetchBirthdayProducts() {
      try {
        const response = await http<Product[]>('/products/birthday')
        setBirthdayProducts(response)
      } catch (error) {
        console.error(error)
        toast.error(getErrorText(error))
      }
    }

    if (isLoggedIn && user) {
      const isBirthday = isBirthdayWithinNextWeek(user.dateOfBirth)
      if (isBirthday) {
        fetchBirthdayProducts()
      }
    }
  }, [isLoggedIn, user])

  const handleCopyCode = async () => {
    if (code) {
      navigator.clipboard.writeText(code)
      toast.success('Code copied to clipboard')
    } else {
      try {
        const response = await http<{ code: string }>('/coupons/birthday')
        setCode(response.code)
      } catch (error) {
        console.error(error)
        toast.error(getErrorText(error))
      } finally {
        setFetchingCode(false)
      }
    }
  }

  const ageOfUser = user ? new Date().getFullYear() - new Date(user.dateOfBirth).getFullYear() : 0

  if (birthdayProducts.length === 0) return null

  return (
    <Container>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        overflow="hidden"
        borderRadius={8}
        mb={4}
      >
        <Stack
          justifyContent="center"
          alignItems="start"
          flex={1}
          p={2}
          className="linear-gradient"
        >
          <Typography level="h2" mb={1}>
            Happy {ageOfUser}th Birthday, {user && user.name} 🎉!
          </Typography>
          <Typography maxWidth="70ch" mb={3}>
            As your birthday is near, we have a special gift for you. Get special 10% discounts on
            our recommended products. Hurry up! Offer valid for 7 days.
          </Typography>
          <Button
            size="lg"
            className="linear-gradient"
            endDecorator="🎁"
            onClick={handleCopyCode}
            loading={fetchingCode}
          >
            {code ? 'Click to copy code' : 'Get coupon code'}
          </Button>
        </Stack>
        <Box position="relative" flex={1} height={500}>
          <Image
            src="/images/happy-birthday.jpg"
            fill
            alt="Birthday cake"
            style={{
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
      <Typography level="title-lg" mb={2}>
        Recommended products for you
      </Typography>
      <Box display="flex" gap={2} className="no-scrollbar">
        {birthdayProducts.map((product) => (
          <Box key={product.id} sx={{ flex: '0 0 18rem' }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default BirthdayCard
