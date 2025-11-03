
// Import customer logos
import bhelLogo from '@/assets/bhel.avif';
import tataLogo from '@/assets/tata.png';
import ioclLogo from '@/assets/iocl_logo.png';
import indianRailwaysLogo from '@/assets/indian_railways_logo.webp';
import jswLogo from '@/assets/JSW_logo.png';
import adityaBirlaLogo from '@/assets/additya_birla logo.jpg';
import adaniLogo from '@/assets/adani_logo.png';
import ultratechLogo from '@/assets/ultratech_logo.jpeg';
import hindalcoLogo from '@/assets/Hindalco_logo.png';
import bhushanLogo from '@/assets/bhushan_logo.jpg';
import nhpcLogo from '@/assets/nhpc_logo.jpg';
import bemlLogo from '@/assets/Beml_logo.png';
import belLogo from '@/assets/bel_logo.jpg';

const Partners = () => {
  const customers = [
    {
      name: "JSW",
      src: jswLogo,
      size: "h-28 w-auto"
    },
    {
      name: "Indian Railways",
      src: indianRailwaysLogo,
      size: "h-32 w-auto"
    },
    {
      name: "BHEL",
      src: bhelLogo,
      size: "h-24 w-auto"
    },
    {
      name: "TATA",
      src: tataLogo,
      size: "h-26 w-auto"
    },
    {
      name: "IOCL",
      src: ioclLogo,
      size: "h-30 w-auto"
    },
    {
      name: "Aditya Birla Group",
      src: adityaBirlaLogo,
      size: "h-28 w-auto"
    },
    {
      name: "Adani",
      src: adaniLogo,
      size: "h-24 w-auto"
    },
    {
      name: "UltraTech Building Products",
      src: ultratechLogo,
      size: "h-28 w-auto"
    },
    {
      name: "Hindalco",
      src: hindalcoLogo,
      size: "h-26 w-auto"
    },
    {
      name: "Bhushan Power & Steel",
      src: bhushanLogo,
      size: "h-28 w-auto"
    },
    {
      name: "NHPC",
      src: nhpcLogo,
      size: "h-26 w-auto"
    },
    {
      name: "BEML",
      src: bemlLogo,
      size: "h-28 w-auto"
    },
    {
      name: "Bharat Electronics",
      src: belLogo,
      size: "h-26 w-auto"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our esteemed customers</h2>
          <p className="section-subtitle mx-auto">
            We are proud to serve leading companies across various industries with our high-quality hardware components.
          </p>
        </div>
        
        {/* Advanced slider carousel */}
        <div className="slider group">
          <div className="slide-track">
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div key={`first-${index}`} className="slide">
                <div className="h-32 w-64 flex items-center justify-center">
                  <img 
                    src={customer.src} 
                    alt={customer.name} 
                    className="max-h-full max-w-full object-contain opacity-100"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <div key={`second-${index}`} className="slide">
                <div className="h-32 w-64 flex items-center justify-center">
                  <img 
                    src={customer.src} 
                    alt={customer.name} 
                    className="max-h-full max-w-full object-contain opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
