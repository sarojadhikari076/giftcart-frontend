import { Product } from './product'

export type OrderStatus = 'Delivered' | 'Pending'

export type StatusMap = {
  [key in OrderStatus]: 'success' | 'warning'
}

export type Order = {
  id: number
  totalAmount: number
  orderStatus: OrderStatus
  createdAt: string
  products: { product: Product; quantity: number }[]
}
