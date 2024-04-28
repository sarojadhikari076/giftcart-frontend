import { Box } from '@mui/joy'
import Image from 'next/image'
import React from 'react'

function BgOverlay({ bg }: { bg: string }) {
  return (
    <>
      <Box
        position="absolute"
        zIndex={1}
        sx={{ background: 'rgba(0 0 0 / 0.8)', inset: 0 }}
      />
      <Image src={bg} fill style={{ objectFit: 'cover' }} alt="Hero section" />
    </>
  )
}

export default BgOverlay
