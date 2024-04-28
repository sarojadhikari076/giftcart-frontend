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
  Checkbox,
  Slider,
  Button,
  Divider
} from '@mui/joy'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import http from '@/services/http'
import { useAppDispatch } from '@/hooks/useRedux'
import { closeModal } from '@/redux/appSlice'

export default function ProductFilter() {
  const params = useSearchParams()
  const router = useRouter()
  const [subCats, setSubCats] = useState<string[]>([])
  const dispatch = useAppDispatch()

  const handleSubmit = (formData: FormData) => {
    const query = formData.get('query') as string
    const category = formData.get('category') as string
    const sort = formData.get('sort') as string
    const subCategories = formData.getAll('subCategories') as string[]
    const priceRange = formData.getAll('priceRange') as string[]

    const path = `/products?query=${query}&category=${category}&sort=${sort}&subCategories=${subCategories.join(
      ','
    )}&priceRange=${priceRange.join(',')}`

    dispatch(closeModal())
    router.push(path)
  }

  useEffect(() => {
    async function fetchSubCategories() {
      const { subCategories } = await http<{ subCategories: string[] }>('/products/sub-categories')
      setSubCats(subCategories)
    }

    fetchSubCategories()
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
          <Option value="fruits">Fruits</Option>
          <Option value="vegetables">Vegetables</Option>
        </Select>
        <Select
          placeholder="Sort by"
          name="sort"
          defaultValue={params.get('sort') || ''}
          size="sm"
          sx={{ flex: 1 }}
        >
          <Option value="name">Name</Option>
          <Option value="price">Price</Option>
          <Option value="rating">Rating</Option>
        </Select>
      </Box>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Slider
          min={0}
          max={10}
          step={1}
          marks
          name="priceRange"
          defaultValue={
            params.get('priceRange')
              ? (params.get('priceRange') as string).split(',').map(Number)
              : [0, 10]
          }
        />
      </FormControl>
      <Stack gap={1}>
        <FormLabel>Sub-categories</FormLabel>
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(12rem, 1px))" gap={2}>
          {subCats.map((sub) => (
            <Checkbox
              slotProps={{ label: { sx: { textTransform: 'capitalize' } } }}
              key={sub}
              name="subCategories"
              defaultChecked={params.getAll('subCategories').includes(sub)}
              value={sub}
              label={sub}
              size="sm"
            />
          ))}
        </Box>
      </Stack>
      <Box flex={1} />
      <Divider />
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Button variant="plain" sx={{ flex: 1 }} type="reset">
          Clear
        </Button>
        <Button sx={{ flex: 2 }} type="submit">
          Apply filters
        </Button>
      </Box>
    </Stack>
  )
}
