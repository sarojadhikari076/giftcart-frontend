import { Button, Container, Typography } from '@mui/joy'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

function Error() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        py: 2,
        minHeight: '70vh'
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          level="h1"
          textAlign="center"
          color="danger"
          fontSize={120}
          lineHeight={1}
          fontWeight={600}
        >
          4
        </Typography>
        <Image src="/images/apple.png" alt="404" width={120} height={120} />
        <Image src="/images/apple.png" alt="404" width={120} height={120} />
      </Box>
      <Typography level="h3" textAlign="center" color="neutral">
        Opps! Client Side Exception Occurred
      </Typography>
      <Typography level="body-xs" textAlign="center">
        Something went wrong. Please try again later. If the problem persists, contact support.
      </Typography>
      <Button href="/" component={Link}>
        Go back to home
      </Button>
    </Container>
  )
}

export default Error
