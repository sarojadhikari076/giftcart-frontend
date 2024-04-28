'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { Modal, closeModal } from '@/redux/appSlice'
import { Box, DialogTitle, Divider, Drawer, ModalClose } from '@mui/joy'
import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

type DrawerWrapperProps = Readonly<{
  children: React.ReactNode
  title: string
  modal: Modal
}>

function DrawerWrapper({ children, title, modal }: DrawerWrapperProps) {
  const pathname = usePathname()
  const modals = useAppSelector((state) => state.utils.modals)
  const dispatch = useAppDispatch()
  const open = modals.includes(modal)

  const handleClose = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])

  useEffect(() => {
    handleClose()
  }, [handleClose, pathname])

  return (
    <Drawer open={open} onClose={handleClose} anchor="left">
      <ModalClose sx={{ top: 15 }} />
      <DialogTitle
        sx={{ mb: 1, py: 1, textTransform: 'uppercase', fontWeight: 700 }}
        level="title-sm"
        color="primary"
      >
        {title}
      </DialogTitle>
      <Divider />
      <Box p={2}>{children}</Box>
    </Drawer>
  )
}

export default DrawerWrapper
