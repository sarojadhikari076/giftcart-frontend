import React from 'react'
import DrawerWrapper from './DrawerWrapper'
import ProductFilter from '../products/ProductFilter'

function ProductFilterDrawer() {
  return (
    <DrawerWrapper title="Search and filter products" modal="filter">
      <ProductFilter />
    </DrawerWrapper>
  )
}

export default ProductFilterDrawer
