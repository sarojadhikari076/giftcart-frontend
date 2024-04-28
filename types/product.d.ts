type Category = 'fruits' | 'vegetables'

export type Product = {
  _id: string
  name: string
  slug: string
  shortDescription: string
  longDescription: string
  category: Category
  subCategory: string
  price: number
  unit: string
  thumbnail: string
  availableQuantity: number
  averageRating: number
  reviewCount: number
}

export type ProductList = Product[]
