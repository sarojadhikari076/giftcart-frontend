import { Box, Container, Sheet, Stack, Typography } from '@mui/joy'
import Image from 'next/image'

type AuthWrapperProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

function AuthWrapper({ title, subtitle, children }: AuthWrapperProps) {
  return (
    <Box position="relative">
      <Container
        maxWidth="sm"
        sx={{
          py: 5,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Sheet
          variant="outlined"
          sx={{ borderRadius: 'md', p: { xs: 2, lg: 4 }, flex: 1 }}
        >
          <Typography level="h3" color="primary" textAlign="center">
            {title}
          </Typography>
          <Typography level="body-sm" mb={2} textAlign="center">
            {subtitle}
          </Typography>

          {children}
        </Sheet>
      </Container>
      <Box
        position="absolute"
        sx={{ inset: 0, zIndex: 1, background: 'rgba(0 0 0 / 0.8)' }}
      />
      <Image
        src="/images/login-bg.jpeg"
        style={{ objectFit: 'cover' }}
        alt="Login"
        fill
      />
    </Box>
  )
}

export default AuthWrapper
