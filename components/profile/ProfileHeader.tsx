'use client'
import { Box, ButtonGroup, Typography } from '@mui/joy'
import LogoutButton from './LogoutButton'
import { useAppSelector } from '@/hooks/useRedux'
import DeleteAccountButton from './DeleteAccountButton'

function ProfileHeader() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      alignItems="center"
      gap={2}
      mb={2}
    >
      <Typography level="h4">Welcome back, {user && user.name}</Typography>
      <ButtonGroup spacing={1} variant="solid">
        <LogoutButton />
        <DeleteAccountButton />
      </ButtonGroup>
    </Box>
  )
}

export default ProfileHeader
