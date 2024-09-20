type Category = {
  id: number
  name: string
  description: string
  tags: string[]
}

export type Product = {
  id: number
  name: string
  slug: string
  tags: string[]
  shortDescription: string
  longDescription: string
  category: Pick<Category, 'id' | 'name'>
  price: number
  unit: string
  thumbnail: string
  availableQuantity: number
  averageRating: number
  reviewCount: number
}

export type ProductList = Product[]
