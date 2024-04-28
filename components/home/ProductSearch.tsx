'use client'
import { Search } from '@mui/icons-material'
import { Box, IconButton, Input } from '@mui/joy'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

function ProductSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim().length === 0) return
    router.push(`/products?query=${query}`)
  }

  return (
    <Box component="form" onSubmit={handleSearch}>
      <Input
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="lg"
        fullWidth
        sx={{ borderRadius: 90 }}
        endDecorator={
          <IconButton
            color="primary"
            variant="solid"
            type="submit"
            disabled={query.trim().length === 0}
          >
            <Search />
          </IconButton>
        }
      />
    </Box>
  )
}

export default ProductSearch
