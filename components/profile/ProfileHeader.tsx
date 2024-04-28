'use client'
import { Box, Typography } from '@mui/joy'
import LogoutButton from './LogoutButton'
import { useAppSelector } from '@/hooks/useRedux'

function ProfileHeader() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography level="h4">Welcome back, {user && user.name}</Typography>
      <LogoutButton />
    </Box>
  )
}

export default ProfileHeader
