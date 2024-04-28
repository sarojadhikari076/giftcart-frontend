'use client'

import { useAppDispatch } from '@/hooks/useRedux'
import { openModal } from '@/redux/appSlice'
import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/joy'

function NavToggleButton() {
  const dispatch = useAppDispatch()
  function handleOpenFilter() {
    dispatch(openModal('navbar'))
  }

  return (
    <IconButton
      size="lg"
      color="primary"
      variant="outlined"
      sx={{ display: { xs: 'inline-flex', sm: 'none' }, borderRadius: 50 }}
      onClick={handleOpenFilter}
    >
      <Menu />
    </IconButton>
  )
}

export default NavToggleButton
