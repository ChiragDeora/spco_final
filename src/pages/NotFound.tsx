
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AlertTriangle, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-50 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent-500" />
            </div>
            <h1 className="text-5xl font-display font-bold text-spco-800 mb-4">404</h1>
            <h2 className="text-2xl font-display font-semibold text-spco-700 mb-4">Page Not Found</h2>
            <p className="text-neutral-600 mb-8">
              The page you are looking for doesn't exist or has been moved. Please check the URL or try one of the links below.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-primary">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              {/* <Link to="/products" className="btn-outline">
                Browse Products
              </Link> */}
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
            
            {/* <div className="mt-10 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-medium text-spco-700 mb-4">
                Looking for something specific?
              </h3>
              <div className="flex items-center max-w-md mx-auto">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full bg-white border border-neutral-300 rounded-l-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-spco-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                </div>
                <Link
                  to="/search"
                  className="bg-spco-600 hover:bg-spco-700 text-white py-2 px-4 rounded-r-md transition-custom"
                >
                  Search
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
