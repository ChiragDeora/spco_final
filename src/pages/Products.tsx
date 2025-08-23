
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";
import { products, getProductsByCategory } from "@/lib/data";

const Products = () => {
  const { category } = useParams();
  const location = useLocation();
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Scroll to top when component mounts or parameters change
    window.scrollTo(0, 0);
    
    // Filter products based on category from URL parameter
    if (category) {
      const categoryProducts = getProductsByCategory(category);
      setFilteredProducts(categoryProducts);
    } else {
      setFilteredProducts(products);
    }
    
    // Reset active filters when category changes
    setActiveFilters({});
  }, [category, location.pathname]);

  // Apply filters to products
  useEffect(() => {
    let result = category ? getProductsByCategory(category) : products;
    
    // Apply active filters
    if (Object.keys(activeFilters).length > 0) {
      Object.entries(activeFilters).forEach(([groupId, selectedOptions]) => {
        if (selectedOptions.length === 0) return;
        
        switch (groupId) {
          case "category":
            if (selectedOptions.length > 0) {
              result = result.filter(product => 
                selectedOptions.includes(product.category)
              );
            }
            break;
          case "subcategory":
            if (selectedOptions.length > 0) {
              result = result.filter(product => 
                product.subcategory && selectedOptions.includes(product.subcategory)
              );
            }
            break;
          // Add more filter types as needed
        }
      });
    }
    
    setFilteredProducts(result);
  }, [activeFilters, category]);

  // Generate filter options from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  const subcategories = Array.from(new Set(products.map(p => p.subcategory).filter(Boolean) as string[]));
  
  const filterGroups = [
    {
      id: "category",
      name: "Product Category",
      options: categories.map(category => ({
        id: category,
        label: category,
        count: products.filter(p => p.category === category).length
      }))
    },
    {
      id: "subcategory",
      name: "Product Type",
      options: subcategories.map(subcategory => ({
        id: subcategory,
        label: subcategory,
        count: products.filter(p => p.subcategory === subcategory).length
      }))
    }
  ];

  // Generate title and breadcrumbs based on current category
  const pageTitle = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")}`
    : "All Products";
  
  const breadcrumbItems = category
    ? [{ label: "Products", href: "/products" }, { label: pageTitle }]
    : [{ label: "Products" }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-2">{pageTitle}</h1>
            <p className="text-neutral-600 max-w-3xl">
              {category 
                ? `Explore our range of high-quality ${pageTitle.toLowerCase()} for various industrial applications.`
                : "Browse our comprehensive range of premium hardware products for all your industrial needs."
              }
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <ProductFilters 
                filterGroups={filterGroups}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
              />
            </div>
            
            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
