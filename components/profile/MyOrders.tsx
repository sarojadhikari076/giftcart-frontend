'use client'
import { Product } from '@/types/product'
import { Order, StatusMap } from '@/types/order'
import { Box, Typography, Avatar, Card, Chip, Stack, Divider, CircularProgress } from '@mui/joy'
import { Fragment, useEffect, useState } from 'react'
import http from '@/services/http'
import { toast } from 'react-toastify'
import { getErrorText } from '@/utils/error'

const statusMap: StatusMap = {
  Delivered: 'success',
  Pending: 'warning'
}

export default function MyOrders() {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])
  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true)
        const response = await http<{ orders: Order[] }>('/orders')
        setOrders(response.orders)
      } catch (error) {
        toast.error(getErrorText(error))
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (loading) return <LoadingOrders />

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(18rem, 1fr))" gap={2}>
      <Typography gridColumn="1 / -1" level="h4" color="primary">
        My Orders
      </Typography>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </Box>
  )
}

function OrderCard({ order }: { order: Order }) {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography level="title-md">Order #{order.id}</Typography>
        <Typography level="body-sm" color="primary">
          {new Date(order.createdAt).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Typography>
      </Box>
      <Divider />
      <Stack gap={1} flex={1}>
        {order.products.map((item, idx) => (
          <Fragment key={item.product._id}>
            {idx > 0 && <Divider />}
            <ProductCard product={item.product} quantity={item.quantity} />
          </Fragment>
        ))}
      </Stack>
      <Divider />
      <Box display="flex" alignItems="end" justifyContent="space-between">
        <Box>
          <Typography level="body-sm">{order.products.length}x items</Typography>
          <Typography level="title-lg" color="primary">
            £{order.totalAmount}
          </Typography>
        </Box>
        <Chip variant="solid" color={statusMap[order.status]}>
          {order.status}
        </Chip>
      </Box>
    </Card>
  )
}

function ProductCard({ product, quantity }: { product: Product; quantity: number }) {
  return (
    <Box display="flex" gap={1} alignItems="start">
      <Avatar
        src={product.thumbnail}
        alt={product.name}
        sx={{ width: 40, height: 40 }}
        variant="outlined"
      />
      <Box>
        <Box display="flex" alignItems="baseline" justifyContent="space-between" gap={1} mb={1}>
          <Typography level="title-sm">{product.name}</Typography>
          <Typography level="body-sm">
            {quantity}
            &nbsp;
            {product.unit}
          </Typography>
          <Typography level="title-sm" ml="auto">
            £{(product.price * quantity).toFixed(2)}
          </Typography>
        </Box>
        <Typography level="body-xs">{product.shortDescription}</Typography>
      </Box>
    </Box>
  )
}

function LoadingOrders() {
  return (
    <Stack alignItems="center" justifyContent="center" gap={2} minHeight="40vh">
      <CircularProgress />
      <Typography level="title-lg" textAlign="center">
        Loading your orders...
      </Typography>
    </Stack>
  )
}
