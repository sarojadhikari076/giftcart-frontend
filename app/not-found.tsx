import { Button, Container, Typography } from '@mui/joy'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

function NotFoundPage() {
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
      </Box>
      <Typography level="h3" textAlign="center" color="neutral">
        Opps! Page not found
      </Typography>
      <Typography level="body-xs" textAlign="center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button href="/" component={Link}>
        Go back to home
      </Button>
    </Container>
  )
}

export default NotFoundPage
