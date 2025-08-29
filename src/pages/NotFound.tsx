
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-spco-600 mb-4">404</h1>
              <h2 className="text-3xl font-display font-semibold text-spco-800 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="btn-primary inline-flex items-center justify-center"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
              <Link to="/products" className="btn-outline">
                Browse Products
              </Link>
            </div>

            <div className="mt-12">
              <Link 
                to="/contact" 
                className="text-spco-600 hover:text-spco-700 font-medium inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
