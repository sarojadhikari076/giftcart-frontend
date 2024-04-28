import CartsTable from '@/components/carts/CartTable'
import { Container, Typography } from '@mui/joy'

export default async function CartPage() {
  return (
    <Container sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h2" color="primary">
        Your Cart
      </Typography>
      <CartsTable />
    </Container>
  )
}
