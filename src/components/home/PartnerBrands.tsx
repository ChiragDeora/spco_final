import ntn from '@/assets/ntn.png';
import miba from '@/assets/Miba.png';
import rheinmetall from '@/assets/Rheinmetall.png';
import cogelsa from '@/assets/cogelsa.png';
import rbcBearings from '@/assets/rbc_bearings.png';
import samick from '@/assets/Samick_brand_logo.png';

const PartnerBrands = () => {
  const brands = [
    { name: "Miba", logo: miba },
    { name: "Rheinmetall", logo: rheinmetall, boost: "scale-[1.6]" },
    { name: "NTN", logo: ntn },
    { name: "Cogelsa", logo: cogelsa, boost: "scale-[1.4]" },
    { name: "RBC Bearings", logo: rbcBearings },
    { name: "Samick", logo: samick, boost: "scale-[1.5]" },
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
        
        <div className="relative max-w-7xl mx-auto">
          {/* Static grid display of all brands */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group h-32 flex items-center justify-center overflow-visible px-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className={`max-h-20 max-w-full w-auto object-contain ${brand.boost ?? ""}`}
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
