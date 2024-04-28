'use client'
import { useAppDispatch } from '@/hooks/useRedux'
import { openModal } from '@/redux/appSlice'
import { Tune } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/joy'

function ProductFilterButton() {
  const dispatch = useAppDispatch()

  function handleOpenFilter() {
    dispatch(openModal('filter'))
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={{ xs: 2, md: 4 }}
    >
      <Typography level="title-lg">Search our products</Typography>
      <IconButton
        variant="outlined"
        sx={{ display: { xs: 'inline-flex', md: 'none' } }}
        onClick={handleOpenFilter}
      >
        <Tune />
      </IconButton>
    </Box>
  )
}

export default ProductFilterButton
