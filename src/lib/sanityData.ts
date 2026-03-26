import { sanityClient, isSanityConfigured } from './sanity'
import type { Product } from '@/components/products/ProductCard'

// GROQ query to fetch all products with image URL
const PRODUCTS_QUERY = `*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  category,
  subcategory,
  "image": image.asset->url,
  specifications,
  description
}`

const PRODUCT_BY_ID_QUERY = `*[_type == "product" && (_id == $id || slug.current == $id)][0] {
  _id,
  name,
  "slug": slug.current,
  category,
  subcategory,
  "image": image.asset->url,
  specifications,
  description
}`

// Transform Sanity product to app Product format
function transformSanityProduct(doc: {
  _id: string
  name: string
  slug?: string
  category: string
  subcategory?: string
  image?: string
  specifications?: Array<{ key: string; value: string }>
  description: string
}): Product {
  const specs: Record<string, string | number> = {}
  if (doc.specifications?.length) {
    doc.specifications.forEach((s) => {
      specs[s.key] = s.value
    })
  }

  return {
    id: doc.slug || doc._id,
    name: doc.name,
    category: doc.category,
    subcategory: doc.subcategory,
    image: doc.image || '',
    specifications: specs,
    description: doc.description || '',
  }
}

interface SanityProductDoc {
  _id: string
  name: string
  slug?: string
  category: string
  subcategory?: string
  image?: string
  specifications?: Array<{ key: string; value: string }>
  description: string
}

export async function fetchSanityProducts(): Promise<Product[]> {
  if (!isSanityConfigured) {
    console.log('[Sanity] Not configured - using mock data')
    return []
  }

  try {
    const docs = await sanityClient.fetch<SanityProductDoc[]>(PRODUCTS_QUERY)
    const products = (docs || []).map(transformSanityProduct)
    console.log('[Sanity] Fetched', products.length, 'products')
    return products
  } catch (error) {
    console.error('Failed to fetch products from Sanity:', error)
    return []
  }
}

export async function fetchSanityProductById(id: string): Promise<Product | null> {
  if (!isSanityConfigured) return null

  try {
    const doc = await sanityClient.fetch<SanityProductDoc | null>(PRODUCT_BY_ID_QUERY, { id })
    if (!doc) return null
    return transformSanityProduct(doc)
  } catch (error) {
    console.error('Failed to fetch product from Sanity:', error)
    return null
  }
}
