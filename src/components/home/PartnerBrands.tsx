import ntn from '@/assets/ntn.png';
import miba from '@/assets/Miba.png';
import zen from '@/assets/zen.png';
import rheinmetall from '@/assets/Rheinmetall.png';
import cogelsa from '@/assets/cogelsa.png';

const PartnerBrands = () => {
  const brands = [
    { 
      name: "NTN", 
      logo: ntn,
      size: "h-24 w-auto" // Increased from h-16
    },
    { 
      name: "Miba", 
      logo: miba,
      size: "h-20 w-auto" // Custom size for Miba
    },
    { 
      name: "Zen", 
      logo: zen,
      size: "h-28 w-28" // Larger size for Zen
    },
    { 
      name: "Rheinmetall", 
      logo: rheinmetall,
      size: "h-28 w-auto" // Custom size for Rheinmetall
    },
    { 
      name: "Cogelsa", 
      logo: cogelsa,
      size: "h-26 w-auto" // Larger size for Cogelsa
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-spco-800 mb-4">
            Our Partner Brands
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We are proud to partner with leading manufacturers to deliver the highest quality products and solutions.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Auto-moving carousel with separate classes */}
          <div className="brands-slider">
            <div className="brands-slide-track">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div key={`first-${index}`} className="brands-slide">
                  <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 h-48 flex items-center justify-center mx-1">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`${brand.size} max-w-full object-contain transition-all duration-300`}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div key={`second-${index}`} className="brands-slide">
                  <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 h-48 flex items-center justify-center mx-1">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`${brand.size} max-w-full object-contain transition-all duration-300`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
