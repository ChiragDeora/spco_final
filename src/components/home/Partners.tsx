
// Import partner logos
import ntnLogo from '@/assets/ntn.png';
import mibaLogo from '@/assets/Miba.png';
import rbcBearingsLogo from '@/assets/rbc_bearings.png';
import zenLogo from '@/assets/zen.png';
import cogelsaLogo from '@/assets/cogelsa.png';
import rheinmetallLogo from '@/assets/Rheinmetall.png';

const Partners = () => {
  const partners = [
    {
      name: "NTN",
      src: ntnLogo,
      size: "h-40 w-auto"
    },
    {
      name: "Miba",
      src: mibaLogo,
      size: "h-20 w-auto"
    },
    {
      name: "RBC Bearings",
      src: rbcBearingsLogo,
      size: "h-20 w-auto"
    },
    {
      name: "Zen",
      src: zenLogo,
      size: "h-20 w-auto"
    },
    {
      name: "Cogelsa",
      src: cogelsaLogo,
      size: "h-20 w-auto"
    },
    {
      name: "Rheinmetall",
      src: rheinmetallLogo,
      size: "h-auto w-auto"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Partner Brands</h2>
          <p className="section-subtitle mx-auto">
            We partner with the world's leading manufacturers to bring you the highest quality hardware components.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm hover:shadow-md transition-custom flex items-center justify-center h-32"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className={`${partner.size} object-contain opacity-80 hover:opacity-100 transition-custom`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
