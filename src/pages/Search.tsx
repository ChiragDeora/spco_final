
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard, { Product } from "@/components/products/ProductCard";
import { searchProducts } from "@/lib/data";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts or search query changes
    window.scrollTo(0, 0);
    setLoading(true);
    
    if (searchQuery) {
      // Simulate a search delay
      const timer = setTimeout(() => {
        const searchResults = searchProducts(searchQuery);
        setResults(searchResults);
        setLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={[{ label: "Search Results" }]} className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-2">
              Search Results {searchQuery && `for "${searchQuery}"`}
            </h1>
            <p className="text-neutral-600">
              {loading 
                ? "Searching for products..."
                : results.length > 0 
                  ? `Found ${results.length} result${results.length !== 1 ? 's' : ''}`
                  : "No results found. Try another search term or browse our product categories."
              }
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-pulse space-y-6 w-full max-w-3xl">
                <div className="h-10 bg-neutral-200 rounded-md w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-neutral-200 rounded-md h-64"></div>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <h2 className="text-xl font-display font-semibold text-spco-700 mb-6">
                Product Matches
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-4">
                <SearchIcon className="h-8 w-8 text-neutral-400" />
              </div>
              <h2 className="text-xl font-display font-semibold text-spco-700 mb-2">
                No results found
              </h2>
              <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
                We couldn't find any products matching your search. Please try different keywords or browse our product categories.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/products" className="btn-primary">
                  Browse All Products
                </a>
                <a href="/contact" className="btn-outline">
                  Contact Us for Help
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
