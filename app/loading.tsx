import { Container, Typography } from '@mui/joy'
import { CircularProgress } from '@mui/material'

function LoadingComponent() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 5,
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '60vh'
      }}
    >
      <CircularProgress color="primary" />
      <Typography level="h4" textAlign="center">
        Loading your content...
      </Typography>
    </Container>
  )
}

export default LoadingComponent
