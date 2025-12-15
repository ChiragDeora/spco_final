import ntn from '@/assets/ntn.png';
import miba from '@/assets/Miba.png';
import rheinmetall from '@/assets/Rheinmetall.png';
import cogelsa from '@/assets/cogelsa.png';
import rbcBearings from '@/assets/rbc_bearings.png';

const PartnerBrands = () => {
  const brands = [
    { 
      name: "Miba", 
      logo: miba,
      size: "h-20 w-auto" // Custom size for Miba
    },
    { 
      name: "Rheinmetall", 
      logo: rheinmetall,
      size: "h-28 w-auto" // Custom size for Rheinmetall
    },
    { 
      name: "NTN", 
      logo: ntn,
      size: "h-24 w-auto" // Increased from h-16
    },
    { 
      name: "Cogelsa", 
      logo: cogelsa,
      size: "h-26 w-auto" // Larger size for Cogelsa
    },
    { 
      name: "RBC Bearings", 
      logo: rbcBearings,
      size: "h-28 w-auto" // Custom size for RBC Bearings
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
          {/* Static grid display of all brands */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-16">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="group h-48 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-32 w-auto max-w-full object-contain opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
