
// Import customer logos
import bhelLogo from '@/assets/bhel.avif';
import tataLogo from '@/assets/tata.png';
import ltLogo from '@/assets/L&T logo.png';
import mahindraLogo from '@/assets/mahindra.jpg';
import ioclLogo from '@/assets/iocl_logo.png';
import indianRailwaysLogo from '@/assets/indian_railways_logo.webp';
import jswLogo from '@/assets/JSW_logo.png';

const Partners = () => {
  const customers = [
    {
      name: "JSW",
      src: jswLogo,
      size: "h-20 w-auto"
    },
    {
      name: "Indian Railways",
      src: indianRailwaysLogo,
      size: "h-70 w-auto"
    },
    {
      name: "BHEL",
      src: bhelLogo,
      size: "h-20 w-auto"
    },
    {
      name: "TATA",
      src: tataLogo,
      size: "h-20 w-auto"
    },
    {
      name: "IOCL",
      src: ioclLogo,
      size: "h-80 w-auto"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our esteemed customers</h2>
          <p className="section-subtitle mx-auto">
            We are proud to serve leading companies across various industries with our high-quality hardware components.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm hover:shadow-md transition-custom flex items-center justify-center h-32"
            >
              <img 
                src={customer.src} 
                alt={customer.name} 
                className={`${customer.size} object-contain opacity-80 hover:opacity-100 transition-custom animate-fade-up`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
