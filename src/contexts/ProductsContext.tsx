import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from 'react'
import type { Product } from '@/components/products/ProductCard'
import { fetchSanityProducts, fetchSanityProductById } from '@/lib/sanityData'
import { isSanityConfigured } from '@/lib/sanity'
import {
  products as mockProducts,
  getProductsByCategory as mockGetProductsByCategory,
  getProductById as mockGetProductById,
  getRelatedProducts as mockGetRelatedProducts,
  searchProducts as mockSearchProducts,
} from '@/lib/data'

interface ProductsContextValue {
  products: Product[]
  loading: boolean
  useSanity: boolean
  getProductsByCategory: (category: string) => Product[]
  getProductById: (id: string) => Product | undefined
  fetchProductById: (id: string) => Promise<Product | undefined>
  getRelatedProducts: (productId: string, limit?: number) => Product[]
  searchProducts: (query: string) => Product[]
}

const ProductsContext = createContext<ProductsContextValue | null>(null)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [loading, setLoading] = useState(isSanityConfigured)
  const [useSanity, setUseSanity] = useState(false)

  useEffect(() => {
    if (!isSanityConfigured) {
      setLoading(false)
      return
    }

    fetchSanityProducts()
      .then((sanityProducts) => {
        if (sanityProducts.length > 0) {
          setProducts(sanityProducts)
          setUseSanity(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const getProductsByCategory = useCallback(
    (category: string): Product[] => {
      if (useSanity) {
        const categoryNorm = category.toLowerCase().replace(/-/g, ' ')
        const mappedCategories: Record<string, string[]> = {
          'linear motion bearings': ['Linear Motion Bearings'],
          bearings: ['Ball Bearings', 'Roller Bearings'],
          'speciality lubricants': ['Lubricants'],
          'automotive parts': ['Auto Parts'],
          'self lubricating bushes': ['Bushes'],
        }
        const productCategories = mappedCategories[categoryNorm]
        if (productCategories) {
          return products.filter((p) =>
            productCategories.some((mc) => p.category.toLowerCase() === mc.toLowerCase())
          )
        }
        return products.filter(
          (p) =>
            p.category.toLowerCase() === categoryNorm ||
            (p.subcategory?.toLowerCase() === categoryNorm)
        )
      }
      return mockGetProductsByCategory(category)
    },
    [products, useSanity]
  )

  const getProductById = useCallback(
    (id: string): Product | undefined => {
      if (useSanity) {
        return products.find((p) => p.id === id)
      }
      return mockGetProductById(id)
    },
    [products, useSanity]
  )

  const fetchProductById = useCallback(
    async (id: string): Promise<Product | undefined> => {
      const cached = getProductById(id)
      if (cached) return cached
      if (useSanity) {
        return (await fetchSanityProductById(id)) ?? undefined
      }
      return mockGetProductById(id)
    },
    [getProductById, useSanity]
  )

  const getRelatedProducts = useCallback(
    (productId: string, limit = 3): Product[] => {
      if (useSanity) {
        const current = products.find((p) => p.id === productId)
        if (!current) return []
        const sameCategory = products.filter(
          (p) =>
            p.id !== productId &&
            (p.category === current.category || p.subcategory === current.subcategory)
        )
        if (sameCategory.length >= limit) {
          return sameCategory.slice(0, limit)
        }
        const others = products.filter(
          (p) =>
            p.id !== productId &&
            p.category !== current.category &&
            p.subcategory !== current.subcategory
        )
        return [...sameCategory, ...others.slice(0, limit - sameCategory.length)]
      }
      return mockGetRelatedProducts(productId, limit)
    },
    [products, useSanity]
  )

  const searchProducts = useCallback(
    (query: string): Product[] => {
      if (useSanity) {
        if (!query) return []
        const term = query.toLowerCase()
        return products.filter(
          (p) =>
            p.name.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term) ||
            (p.subcategory?.toLowerCase().includes(term) ?? false) ||
            p.description.toLowerCase().includes(term)
        )
      }
      return mockSearchProducts(query)
    },
    [products, useSanity]
  )

  const value = useMemo(
    () => ({
      products,
      loading,
      useSanity,
      getProductsByCategory,
      getProductById,
      fetchProductById,
      getRelatedProducts,
      searchProducts,
    }),
    [
      products,
      loading,
      useSanity,
      getProductsByCategory,
      getProductById,
      fetchProductById,
      getRelatedProducts,
      searchProducts,
    ]
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}
