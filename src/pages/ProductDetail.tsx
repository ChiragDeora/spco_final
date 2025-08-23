
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetailComponent from "@/components/products/ProductDetail";
import { getProductById, getRelatedProducts } from "@/lib/data";
import { Product } from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts or product ID changes
    window.scrollTo(0, 0);
    setLoading(true);
    
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(id, 3));
      } else {
        // If product not found, redirect to products page
        navigate("/products", { replace: true });
      }
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 w-48 bg-neutral-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Product Not Found</h1>
            <p className="text-neutral-600 mb-6">The product you are looking for does not exist or has been removed.</p>
            <a href="/products" className="btn-primary">Browse All Products</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products/${product.category.toLowerCase().replace(/ /g, '-')}` },
    { label: product.name }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-2">{product.name}</h1>
            <p className="text-neutral-600">{product.description}</p>
          </div>
        </div>

        <ProductDetailComponent product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
