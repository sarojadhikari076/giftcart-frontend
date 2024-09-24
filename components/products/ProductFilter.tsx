'use client'

import { Search } from '@mui/icons-material'
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Option,
  Select,
  Stack,
  Slider,
  Button,
  Divider
} from '@mui/joy'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/hooks/useRedux'
import { closeModal } from '@/redux/appSlice'
import { Category } from '@/types/product'
import { useEffect, useState } from 'react'
import http from '@/services/http'

export default function ProductFilter() {
  const params = useSearchParams()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [categories, setCategories] = useState<Category[]>([])

  const handleSubmit = (formData: FormData) => {
    const query = formData.get('query') as string
    const category = formData.get('category') as string
    const sort = formData.get('sort') as string
    const priceRange = formData.getAll('priceRange') as string[]

    const path = `/products?query=${query}&category=${category}&sort=${sort}:asc&priceRange=${priceRange.join(
      '-'
    )}`

    dispatch(closeModal())
    router.push(path)
  }

  const resetForm = () => {
    dispatch(closeModal())
    router.push('/products')
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await http<Category[]>('/categories')
        setCategories(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Stack gap={2} component="form" action={handleSubmit}>
      <FormControl>
        <FormLabel>Search products</FormLabel>
        <Input
          placeholder="e.g. Apple"
          name="query"
          defaultValue={params.get('query') || ''}
          endDecorator={
            <IconButton color="primary">
              <Search />
            </IconButton>
          }
        />
      </FormControl>
      <Box display="flex" gap={1}>
        <Select
          placeholder="Filter by"
          name="category"
          defaultValue={params.get('category') || ''}
          size="sm"
          sx={{ flex: 1 }}
        >
          <Option value="">All categories</Option>
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Sort by"
          name="sort"
          defaultValue={params.get('sort') || 'name'}
          size="sm"
          sx={{ flex: 1 }}
        >
          <Option value="name">Name</Option>
          <Option value="price">Price</Option>
          <Option value="averageRating">Rating</Option>
        </Select>
      </Box>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Slider
          min={0}
          max={10000}
          step={1000}
          marks
          name="priceRange"
          defaultValue={
            params.get('priceRange')
              ? (params.get('priceRange') as string).split('-').map(Number)
              : [0, 10000]
          }
        />
      </FormControl>
      <Box flex={1} />
      <Divider />
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Button variant="plain" sx={{ flex: 1 }} onClick={resetForm}>
          Clear
        </Button>
        <Button sx={{ flex: 2 }} type="submit">
          Apply filters
        </Button>
      </Box>
    </Stack>
  )
}
