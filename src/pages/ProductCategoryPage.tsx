
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
// import ProductGrid from "@/components/products/ProductGrid";
import { useProducts } from "@/contexts/ProductsContext";
import { cn } from "@/lib/utils";
import { Cog, Shield, Award, ExternalLink } from "lucide-react";
import ballbearings from '@/assets/ballbearings.jpg';
// import rollerbearings from '@/assets/rollerbearings.jpg';
import cogelsa_lubricants from '@/assets/cogelsa_lubricants.png';
import autoparts from '@/assets/optimized/Autoparts-optimized.jpg';
import lubricatingBushes from '@/assets/lubricating_bushes.webp';
// import tools from '@/assets/tools.jpg';
import permaglideLogo from '@/assets/permaglide_logo.png';
import journalTilt from '@/assets/journal&tilt.jpeg';
import adapterSleevesLogo from '@/assets/adapter-sleeves_logo.jpg';
import ntnLogo from '@/assets/ntn.png';
import cogelsaLogo from '@/assets/cogelsa.png';
import rheinmetallLogo from '@/assets/Rheinmetall.png';
import mibaLogo from '@/assets/Miba.png';
import orionLogo from '@/assets/orion_logo.png';
import zollernLogo from '@/assets/zollern_logo.webp';
import johnCraneLogo from '@/assets/john_crane_logo.jpg';
// import spcoLogo from '@/assets/spco-logo-dark.png';
import spcoLogo from '@/assets/SPCO_Logo.png';
import zenLogo from '@/assets/zen.png';
import sartoriusLogo from '@/assets/Sartorius_logo.jpg';
import admosLogo from '@/assets/admos_logo.jpg';
import tceLogo from '@/assets/tce_logo.jpg';
import sealImage from '@/assets/Seal.jpg';
import freudenbergLogo from '@/assets/freudenberg_logo.png';
import merkelLogo from '@/assets/merkel-logo.png';
import nokLogo from '@/assets/nok_logo.jpeg';
import simritLogo from '@/assets/simrit_logo.png';
import samickLogo from '@/assets/Samick_brand_logo.png';

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  applications: string[];
}

interface Brand {
  name: string;
  description: string;
  logo?: string;
  size?: string;
  logoContainerClassName?: string;
  logoClassName?: string;
  url?: string;
}

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { loading: contextLoading } = useProducts();
  const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Brands data for each category
  const brandsData: { [key: string]: Brand[] } = {
    "linear-motion-bearings": [
      {
        name: "Samick",
        description:
          "Samick is a South Korean precision engineering company and one of Asia's foremost manufacturers of linear motion systems. Their product range spans linear guideways, ball screws, linear bushings, and actuator modules, all engineered for the exacting demands of CNC machine tools, semiconductor equipment, robotics, and industrial automation.\n\nSamick's linear guides are characterised by high load capacity in all four directions, low running noise, and exceptional positional repeatability. The company's manufacturing facilities operate under strict ISO quality controls, with in-house raceway grinding and assembly ensuring tight tolerances throughout. Whether deployed in high-speed pick-and-place systems or heavy-duty gantry machines, Samick components are trusted for their consistency across millions of cycles.",
        logo: samickLogo,
        url: "https://www.mysamick.com/English/html/default.html",
      }
    ],
  
    "bearings": [
      {
        name: "NTN",
        description:
          "NTN Corporation, founded in 1918 in Japan, is one of the world's three largest bearing manufacturers and a cornerstone supplier across industrial, automotive, and aerospace markets. Their catalogue spans deep groove ball bearings, angular contact bearings, tapered and spherical roller bearings, needle rollers, and highly specialised units for EV drivetrains and aerospace actuation systems.\n\nNTN's engineering strength lies in materials science and surface technology, including proprietary steel compositions, advanced heat treatment processes, and precision-ground raceways that deliver extended fatigue life and quieter operation. Their global manufacturing footprint spans Japan, the Americas, Europe, and Asia, supported by a dense network of authorised distributors and application engineers who provide bearing selection, mounting guidance, and lubrication recommendations.",
        logo: ntnLogo,
        url: "https://www.ntnglobal.com/en/",
      },
      {
        name: "ZEN",
        description:
          "ZEN is a precision bearing brand with strong roots in German engineering standards, supplying a comprehensive range of single and double row deep groove ball bearings, angular contact bearings, self-aligning bearings, and housed units. Manufactured to DIN and ISO specifications, ZEN bearings are built for dimensional interchangeability with major global brands, making them a reliable choice for MRO and OEM applications alike.\n\nThe range covers everything from miniature bearings for instrument applications down to sub-10mm bore sizes, through to medium-series bearings for pumps, compressors, gearboxes, and agricultural machinery. ZEN's quality assurance processes include noise and vibration screening, dimensional inspection, and material traceability, ensuring consistent performance in both continuous-duty and intermittent applications.",
        logo: zenLogo,
        url: "https://www.zen.biz/",
      }
    ],
  
    "speciality-lubricants": [
      {
        name: "Cogelsa",
        description:
          "Cogelsa is a Spanish industrial lubricants specialist with over a century of formulation expertise, operating at the intersection of chemistry and mechanical engineering. The company develops and manufactures a comprehensive portfolio of greases, oils, pastes, and specialty compounds tailored to specific operating environments, from extreme-pressure gear lubrication to food-grade conveyor greases and high-temperature chain oils.\n\nCogelsa's R&D teams work closely with end users and OEMs to solve tribological challenges that generic lubricants cannot address, including applications involving wide temperature swings, aggressive media exposure, heavy contamination, or stringent regulatory requirements. Their product lines include synthetic PAO and ester-based formulations, lithium complex and polyurea-thickened greases, and environmentally acceptable lubricants for sensitive ecosystems. ISO 9001 and ISO 14001 certified, Cogelsa also provides lubrication auditing and consumption optimisation services.",
        logo: cogelsaLogo,
        url: "https://www.cogelsa.com/en/",
      }
    ],
  
    "automotive-parts": [
      {
        name: "Rheinmetall",
        description:
          "Rheinmetall is a German technology group with a dual identity as both a leading defence contractor and a major Tier 1 automotive supplier. Within the automotive division, Rheinmetall manufactures engine components and systems for passenger cars, commercial vehicles, and off-highway equipment, including pistons, piston rings, cylinder liners, valve train components, and air management systems such as intake modules and filter housings.\n\nThe company's engineering focus is on reducing internal combustion engine friction losses, improving thermal efficiency, and meeting tightening emissions standards across global markets. Rheinmetall components are designed to survive demanding duty cycles, with metallurgical development done in-house using proprietary aluminium alloys and surface coating technologies. Their products are supplied to virtually every major OEM and engine builder in Europe, North America, and Asia.",
        logo: rheinmetallLogo,
        url: "https://www.rheinmetall.com/en/products",
      }
    ],
  
    "journal-tilting-pad-bearings": [
      {
        name: "MIBA",
        description:
          "MIBA AG is an Austrian industrial group and global leader in the design and manufacture of precision functional components for engines, powertrains, and rotating machinery. In the bearing segment, MIBA produces engine bearings, industrial plain bearings, and a comprehensive portfolio of tilting pad journal bearings through a family of acquired specialist brands.\n\nTheir manufacturing capabilities encompass bi-metal and tri-metal bearing shells, babbitt-lined tilting pads, and custom hydrodynamic bearing assemblies for gas and steam turbines, large compressors, pumps, and generators. MIBA's engineering teams provide full application analysis including rotordynamic simulation, thermal modelling, and oil film computation to optimise bearing geometry for each installation. With facilities in Austria, the USA, Germany, China, and India, and a global service network, MIBA supports the complete lifecycle of critical rotating equipment.",
        logo: mibaLogo,
        url: "https://www.miba.com/en/product-areas/industrial-bearings",
      },
      {
        name: "Orion",
        description:
          "Orion Corporation was established in the mid-20th century in the United States and built a distinguished reputation over several decades as a designer and manufacturer of hydrodynamic tilting pad journal and thrust bearings for high-speed turbomachinery. Operating from its base in the USA, Orion served power generation, oil and gas, and industrial processing markets with precision-engineered bearing solutions known for their reliability under demanding continuous-duty conditions.\n\nThe company's pivoting shoe bearing designs offered operators advantages in rotor stability and the ability to operate across a wide speed range without instability. Following its acquisition by MIBA, Orion's product lines and engineering expertise were integrated into MIBA's global industrial bearing platform, extending the reach of Orion's proven designs to customers worldwide through MIBA's distribution and service infrastructure.",
        logo: orionLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      },
      {
        name: "Zollern",
        description:
          "Zollern GmbH & Co. KG is one of Germany's oldest and most storied family-owned industrial companies, with a history stretching back over 300 years to its origins in iron and metal processing in the Swabian Alps. In the modern era, Zollern became a recognised manufacturer of hydrodynamic plain bearings and tilting pad bearing systems for power generation turbines, marine propulsion shafts, large industrial gearboxes, and heavy rotating equipment.\n\nTheir bearing designs were noted for their engineering rigour and the ability to accommodate high specific loads while maintaining thin-film lubrication integrity at both steady-state and transient operating conditions. In 2019, Miba entered into a strategic joint venture with Zollern's bearing division, combining MIBA's global manufacturing and distribution capabilities with Zollern's deep German engineering heritage to form one of the strongest hydrodynamic bearing businesses in the world.",
        logo: zollernLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      },
      {
        name: "John Crane",
        description:
          "John Crane is a globally recognised name in the field of rotating equipment components, with its industrial bearings division having earned a strong reputation for technically sophisticated hydrodynamic and tilting pad bearing designs. Operating from manufacturing sites in Germany and the USA, the bearings business served turbine OEMs, compressor manufacturers, and end users in oil and gas, petrochemical, and power generation, where bearing performance is directly linked to plant availability and profitability.\n\nJohn Crane's tilting pad bearing designs were valued for their rotor dynamic stability characteristics, high load capacity, and suitability for retrofit into existing equipment without major shaft modifications. MIBA's acquisition of the John Crane industrial bearings division in 2018 was a transformative step, significantly expanding MIBA's engineering talent pool, OEM relationships, and global aftermarket service capabilities for critical turbomachinery applications.",
        logo: johnCraneLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      },
      {
        name: "Sartorius Bearings",
        description:
          "Sartorius Bearings is a precision engineering specialist with a long-standing focus on plain and tilting pad hydrodynamic bearings for turbines, turbocompressors, and heavy-duty rotating industrial machinery. The company's engineering approach centres on optimising pad geometry, pivot design, and babbitt alloy selection to achieve the ideal combination of load capacity, damping characteristics, and temperature stability for each specific application.\n\nSartorius products are deployed in power plant steam turbines, large gas compressors, and process equipment across energy, chemical, and industrial sectors where unplanned downtime carries significant operational and financial consequences. As part of MIBA's industrial bearing portfolio, Sartorius benefits from expanded manufacturing resources and global logistics while continuing to offer the application-specific engineering customisation that the brand has always been known for.",
        logo: sartoriusLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      },
      {
        name: "Admos Gleitlager",
        description:
          "Admos Gleitlager is a specialist manufacturer of hydrodynamic plain bearings and tilting pad bearing systems engineered for the most demanding heavy-duty applications, including large power plant turbines, centrifugal compressors in petrochemical facilities, and marine propulsion and auxiliary machinery. Admos has built its reputation on the ability to develop customised bearing solutions for non-standard installations, including oversized journal diameters, asymmetric pad configurations, and hybrid designs that incorporate active lubrication features such as directed lubrication nozzles or embedded temperature and vibration sensors.\n\nTheir products are manufactured from high-grade babbitt alloys applied over steel shells or bronze backing plates, with surface geometry verified through CMM inspection and oil film testing on in-house test rigs. Within MIBA's portfolio, Admos represents a capability for the most technically complex and custom-engineered bearing requirements.",
        logo: admosLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      },
      {
        name: "TCE (Turbo Components & Engineering)",
        description:
          "TCE, Turbo Components & Engineering, is a manufacturer with decades of focused expertise in journal and tilting pad bearings for high-speed, high-load rotating equipment, particularly steam and gas turbines, centrifugal compressors, and large blowers. TCE's engineering capability is built around a thorough understanding of rotordynamic behaviour, allowing the company to design bearings that not only carry load reliably but also contribute positively to rotor stability and vibration control across the operating speed range.\n\nTheir manufacturing processes include precision boring and lapping of bearing bores, babbitt casting and bonding, pad pivot fabrication, and assembly with full dimensional verification. TCE serves both new equipment supply and the aftermarket replacement segment, providing bearing sets and individual components to extend the service life of existing turbomachinery. Integration with MIBA's global network has strengthened TCE's access to international markets and technical resources.",
        logo: tceLogo,
        url: "https://www.miba.com/en/innovation/industrial-bearings-history",
      }
    ],
  
    "self-lubricating-bushes": [
      {
        name: "Permaglide",
        description:
          "Permaglide is a registered trademark of KS Gleitlager GmbH, a German precision plain bearing specialist and part of the Rheinmetall automotive group. The name, derived from 'permanently low-wear gliding', precisely captures the product philosophy: maintenance-free or lubrication-interval-extended sliding bearings that deliver consistent performance over long service lives without the complexity of continuous lubrication systems.\n\nThe Permaglide range encompasses wrapped bushes, thrust washers, and strips in multiple material grades, including the flagship PA1 series, PTFE-lined steel-backed, PG series, solid bronze with graphite plugs, and PE series, sintered bronze. Each grade is engineered for a specific combination of load, speed, temperature, and media compatibility, from light-duty instrument pivots operating dry, to heavily loaded oscillating joints in construction machinery running in contaminated environments. Permaglide products are used across automotive, agricultural, aerospace, hydraulic, and general industrial applications.",
        logo: permaglideLogo,
        url: "https://www.permaglide.com/en",
      }
    ],
  
    "adaptor-sleeves": [
      {
        name: "SPCO",
        description:
          "SPCO adaptor sleeves are SPCO's own in-house range of precision-manufactured bearing mounting components, developed to meet the rigorous demands of industrial power transmission and rotating machinery. Adaptor sleeves provide a reliable, standardised method of mounting self-aligning ball and roller bearings onto plain or stepped shafts, enabling fast and accurate bearing installation without the need for precision-ground shaft seats.\n\nThe SPCO sleeve range covers metric and inch shaft sizes in accordance with ISO 2982 standards, spanning light, medium, and heavy series to suit a broad spectrum of shaft diameters and bearing bore sizes. Materials are sourced from certified steel suppliers and manufactured to tight dimensional tolerances, with thread forms and lock nut interfaces verified for correct engagement and secure bearing retention under dynamic loads. SPCO adaptor sleeves are a cost-effective and dependable solution for conveyor systems, fans, pumps, gearboxes, and general industrial drive applications.",
        logo: spcoLogo,
        url: "https://www.spco.in/products/adaptor-sleeves",
      }
    ],
  
    "seals": [
      {
        name: "Freudenberg Sealing Technologies",
        description:
          "Freudenberg Sealing Technologies is a global leader in the development and manufacture of sealing solutions, with a heritage of over 175 years in materials science and precision engineering. Operating as a division of the Freudenberg Group, the company serves both the automotive and general industrial markets with one of the broadest sealing portfolios in the industry, encompassing oil seals, O-rings, hydraulic seals, mechanical face seals, gaskets, and specialised elastomeric mouldings.\n\nFreudenberg's core strength lies in materials innovation: the company develops and compounds its own elastomers, PTFE compounds, and thermoplastic elastomers in-house, enabling seal geometries and material combinations precisely tailored to application-specific media, temperature, pressure, and speed requirements. Their engineering teams collaborate with customers from early design stages through validation testing, offering simulation-led seal development that shortens time-to-market and reduces field failures.",
        logo: freudenbergLogo,
        url: "https://www.fst.com/",
      },
      {
        name: "Merkel",
        description:
          "Merkel is a market-leading brand in industrial sealing technology, with particular strength in heavy industry, hydraulic systems, and high-pressure applications. Operating under the Freudenberg umbrella, Merkel offers an extensive range of hydraulic cylinder seals, piston seals, rod seals, wiper seals, and guide elements manufactured from precision-grade elastomers, PTFE, and polyurethane compounds.\n\nThe Merkel brand is synonymous with sealing solutions that perform reliably in harsh environments, including high pressures, wide temperature ranges, abrasive media, and long duty cycles in steel mills, mobile hydraulic equipment, offshore machinery, and industrial presses. Merkel's engineering team supports customers with seal groove design recommendations, material selection for specific hydraulic fluids, and custom profile design for non-standard cylinder geometries. Their products are validated through rigorous in-house test rig programmes simulating real-world operating conditions.",
        logo: merkelLogo,
        url: "https://products.fst.com/global/en/search?text=Merkel",
      },
      {
        name: "NOK",
        description:
          "NOK Corporation is Japan's largest manufacturer of sealing products and a globally respected name in oil seals, O-rings, mechanical seals, and precision rubber components. Founded in 1939, NOK supplies the global automotive industry as a major OEM-level seal supplier while also serving the industrial, hydraulic, pneumatic, and semiconductor equipment markets.\n\nThe NOK Oil Seal Division operates under ISO 9001 certification and maintains strict statistical process controls throughout rubber compounding, moulding, and finishing operations. NOK's sealing products are engineered for minimal friction, low leakage, and resistance to modern lubricants and synthetic media, including the low-viscosity and ester-based oils increasingly used in fuel-efficient engines. The company invests significantly in lip geometry research and elastomer development, resulting in seals with extended service intervals and reduced shaft wear, a key advantage in equipment where seal replacement requires significant disassembly time.",
        logo: nokLogo,
        url: "https://www.nokgrp.com/en/",
      },
      {
        name: "Simrit",
        description:
          "Simrit is the sealing and vibration control technology brand of Freudenberg Sealing Technologies, operating as a specialist division targeting industrial OEM and MRO markets with a focus on technical depth and application-specific problem solving. The Simrit portfolio covers radial shaft seals, hydraulic and pneumatic seals, O-rings, profiled seals, and anti-vibration mounts, all backed by Freudenberg's proprietary elastomer compounding and tooling capabilities.\n\nWhat sets Simrit apart is its consultative approach: the brand positions itself as a technology partner rather than a components supplier, working with design engineers to identify leakage root causes, evaluate material compatibility with process fluids and temperature cycles, and prototype alternative seal configurations when standard catalogue products are insufficient. Simrit's technical documentation and material selection guides are widely used as reference resources in industrial seal engineering, reflecting the brand's commitment to raising the overall standard of sealing practice in the markets it serves.",
        logo: simritLogo,
        url: "https://products.fst.com/global/en/search?text=Simrit",
      }
    ]
  };

  // Function to get brands for a specific category
  const getBrandsForCategory = (categoryId: string): Brand[] => {
    return brandsData[categoryId] || [];
  };

  // Category data with detailed information
  const categoriesData: { [key: string]: CategoryInfo } = {
    "linear-motion-bearings": {
      id: "linear-motion-bearings",
      name: "Linear Motion Bearings",
      description: "Precision linear guides and motion components that enable accurate, low-friction movement along a fixed path.",
      detailedDescription: "Linear motion bearings and guide systems provide controlled, low-friction movement for slides, stages, and automated machinery. They are essential in CNC equipment, robotics, packaging lines, and precision assembly where repeatability and load capacity matter. Our linear motion range is backed by trusted manufacturing partners to help you achieve reliable positioning and long service life.",
      image: ballbearings,
      features: [
        "High rigidity and load capacity",
        "Smooth, low-friction linear travel",
        "Excellent positioning accuracy",
        "Long service life in continuous operation",
        "Wide range of sizes and configurations"
      ],
      applications: [
        "CNC and machine tool slides",
        "Automation and robotics",
        "Packaging and material handling",
        "Semiconductor and electronics assembly",
        "General industrial positioning systems"
      ]
    },
    "bearings": {
      id: "bearings",
      name: "Bearings",
      description: "Bearings are crucial machine elements that reduce friction between moving parts and support loads, enabling smooth, efficient motion.",
      detailedDescription: "Bearings are crucial machine elements that reduce friction between moving parts and support loads, enabling smooth, efficient motion. They are used across a vast range of industries, from heavy machinery and power generation to automotive and aerospace applications. Our selection of bearings ensures superior performance, durability, and reliability for all your operational needs.",
      image: ballbearings,
      features: [
        "Reduced friction and smooth operation",
        "Superior load-carrying capacity",
        "High-speed performance capability",
        "Extended service life",
        "Wide temperature range operation"
      ],
      applications: [
        "Heavy machinery and power generation",
        "Automotive and aerospace applications",
        "Industrial equipment and machinery",
        "Electric motors and generators",
        "HVAC systems and compressors"
      ]
    },
    "speciality-lubricants": {
      id: "speciality-lubricants",
      name: "Speciality Lubricants",
      description: "High-performance oils and greases designed for demanding industrial environments with exceptional performance under extreme conditions.",
      detailedDescription: "Speciality lubricants are high-performance oils and greases designed for demanding industrial environments. Unlike conventional lubricants, they are engineered to provide exceptional performance under extreme conditions like high temperatures, heavy loads, and exposure to contaminants. These lubricants are essential for reducing friction, protecting against wear, and extending the service life of critical machinery.",
      image: cogelsa_lubricants,
      features: [
        "Exceptional performance under extreme conditions",
        "High temperature and heavy load resistance",
        "Contaminant protection",
        "Extended equipment service life",
        "Reduced maintenance requirements"
      ],
      applications: [
        "High-temperature industrial applications",
        "Heavy machinery and equipment",
        "Critical rotating equipment",
        "Contaminated environments",
        "Extended service intervals"
      ]
    },
    "automotive-parts": {
      id: "automotive-parts",
      name: "Automotive Parts",
      description: "Comprehensive range of automotive parts essential for heavy earth moving machinery used in the mining sector.",
      detailedDescription: "We supply a comprehensive range of automotive parts essential for the heavy earth moving machinery used in the mining sector. Our portfolio includes components for engines ensuring top-tier performance and safety. We offer solutions of the automotive industry from the leading original equipment manufacturers (OEMs).",
      image: autoparts,
      features: [
        "Top-tier performance and safety",
        "OEM quality standards",
        "Heavy-duty construction",
        "Reliable operation in harsh conditions",
        "Comprehensive component coverage"
      ],
      applications: [
        "Heavy earth moving machinery",
        "Mining sector equipment",
        "Construction vehicles",
        "Industrial engines",
        "Commercial vehicles"
      ]
    },
    "journal-tilting-pad-bearings": {
      id: "journal-tilting-pad-bearings",
      name: "Journal & Tilting Pad Bearings",
      description: "Specialized fluid-film bearings designed for high-speed, high-load applications such as turbines and compressors.",
      detailedDescription: "Journal and tilting pad bearings are a specialized type of fluid-film bearing, designed for high-speed, high-load applications, such as turbines and compressors. They consist of multiple pivoted pads that tilt to form a hydrodynamic wedge of lubricant, providing exceptional stability and load-carrying capacity. These bearings are critical for protecting expensive and vital rotating equipment from damage.",
      image: journalTilt,
      features: [
        "High-speed and high-load capability",
        "Exceptional stability and load-carrying capacity",
        "Hydrodynamic lubrication system",
        "Protection for critical rotating equipment",
        "Multiple pivoted pad design"
      ],
      applications: [
        "Turbines and compressors",
        "Power generation equipment",
        "High-speed rotating machinery",
        "Critical industrial applications",
        "Precision engineering systems"
      ]
    },
    "self-lubricating-bushes": {
      id: "self-lubricating-bushes",
      name: "Self Lubricating Bushes",
      description: "Oilless bearings designed for applications where conventional lubrication is difficult or impossible.",
      detailedDescription: "Self-lubricating bushes, also known as oilless bearings, are designed for applications where conventional lubrication is difficult or impossible. These bushes contain solid lubricants within their structure, which are released during operation to create a protective film. This eliminates the need for external greasing, reducing maintenance costs and ensuring long-lasting performance in harsh conditions.",
      image: lubricatingBushes,
      features: [
        "No external lubrication required",
        "Solid lubricant embedded structure",
        "Reduced maintenance costs",
        "Long-lasting performance",
        "Harsh condition resistance"
      ],
      applications: [
        "Difficult-to-lubricate locations",
        "Harsh environmental conditions",
        "Maintenance-free applications",
        "Remote or inaccessible areas",
        "High-temperature environments"
      ]
    },
    "adaptor-sleeves": {
      id: "adaptor-sleeves",
      name: "Adaptor Sleeves",
      description: "Machine components used to mount bearings with a tapered bore onto cylindrical shafts.",
      detailedDescription: "Adaptor sleeves are machine components used to mount bearings with a tapered bore onto cylindrical shafts. They are a simple yet effective solution that doesn't require any additional retention means on the shaft. Supplied complete with a locknut and tab washer, adaptor sleeves ensure a secure fit and are a fundamental component in many mechanical assemblies.",
      image: adapterSleevesLogo,
      features: [
        "Simple and effective mounting solution",
        "No additional retention means required",
        "Secure fit with locknut and tab washer",
        "Tapered bore compatibility",
        "Fundamental mechanical assembly component"
      ],
      applications: [
        "Bearing mounting on cylindrical shafts",
        "Mechanical assemblies",
        "Industrial machinery",
        "Equipment maintenance",
        "Precision engineering applications"
      ]
    },
    "seals": {
      id: "seals",
      name: "Seals",
      description: "Comprehensive sealing solutions for static, dynamic, and specialized applications across various industries.",
      detailedDescription: "Our seals portfolio encompasses a complete range of sealing solutions designed to meet the most demanding industrial requirements. From static O-rings and dynamic seals to specialized custom solutions and hydraulic accumulators, we provide products from world-leading manufacturers. Our sealing solutions ensure optimal performance, reliability, and longevity in critical applications across automotive, heavy industry, and general industrial sectors.",
      image: sealImage,
      features: [
        "Static and dynamic sealing solutions",
        "Custom specialized sealing products",
        "Hydraulic accumulator systems",
        "World-class manufacturing standards",
        "Expert technical support and consultation"
      ],
      applications: [
        "Automotive and heavy industry applications",
        "Hydraulic and pneumatic systems",
        "Power generation equipment",
        "Industrial machinery and equipment",
        "Custom engineering solutions"
      ]
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    
    if (category) {
      const categoryData = categoriesData[category];
      
      if (categoryData) {
        setCategoryInfo(categoryData);
      } else {
        navigate("/products", { replace: true });
      }
    }
    
    setLoading(false);
  }, [category, navigate]);

  // const categoryProducts = categoryInfo ? getProductsByCategory(categoryInfo.name) : [];

  if (loading || contextLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 w-48 bg-neutral-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Category Not Found</h1>
            <p className="text-neutral-600 mb-6">The category you are looking for does not exist or has been removed.</p>
            <a href="/products" className="btn-primary">View All Products</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: categoryInfo.name }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src={categoryInfo.image} 
              alt={categoryInfo.name} 
              className="w-full h-full object-cover animate-fade-up"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-spco-900/90 to-spco-800/60"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <Breadcrumb 
              items={breadcrumbItems} 
              className="mb-6 text-white/80" 
            />
            
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
                {categoryInfo.name}
              </h1>
              <p className="text-lg text-white/90 mb-8">
                {categoryInfo.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {/* <a href="#products" className="btn-primary">
                  Browse Products
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a> */}
                <a href="/contact" className="btn-primary">
                  Get Technical Support
                </a> 
              </div>
            </div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-6">
                  About Our {categoryInfo.name}
                </h2>
                <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                  {categoryInfo.detailedDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Premium Quality</h3>
                    <p className="text-sm text-neutral-600">Manufactured to highest standards</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Reliable Performance</h3>
                    <p className="text-sm text-neutral-600">Proven in demanding applications</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Cog className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Technical Support</h3>
                    <p className="text-sm text-neutral-600">Expert guidance available</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={categoryInfo.image}
                  alt={categoryInfo.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg animate-fade-up"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features and Applications */}
        {/* <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display font-semibold text-spco-800 mb-6">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {categoryInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-accent-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-neutral-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-spco-800 mb-6">
                  Common Applications
                </h2>
                <div className="space-y-4">
                  {categoryInfo.applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-accent-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-neutral-700">{application}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Brands Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Trusted Brands</h2>
              <p className="section-subtitle mx-auto">
                We partner with world-leading manufacturers to provide you with the highest quality products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {getBrandsForCategory(categoryInfo.id).map((brand, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 hover:border-spco-200 transition-all duration-300"
                >
                  {/* Left accent bar reveals on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent-500 to-spco-600 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                  <div className="flex flex-col md:flex-row">
                    {/* Logo panel */}
                    <div className="md:w-96 flex-shrink-0 flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-spco-50/60 via-neutral-50 to-white border-b md:border-b-0 md:border-r border-neutral-100">
                      {brand.logo ? (
                        <div
                          className={cn(
                            "w-full h-40 md:h-52 flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
                            brand.logoContainerClassName
                          )}
                        >
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className={cn(
                              brand.logoClassName ?? "w-full h-full object-contain",
                              brand.size
                            )}
                          />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-spco-600 to-spco-800 p-6 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                          <Award className="h-12 w-12 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-10 md:p-12">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-xl font-bold text-spco-300 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {brand.url ? (
                          <a
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-3xl md:text-4xl font-bold text-spco-700 hover:text-accent-600 transition-colors"
                          >
                            {brand.name}
                            <ExternalLink className="h-5 w-5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </a>
                        ) : (
                          <h3 className="text-3xl md:text-4xl font-bold text-spco-700 group-hover:text-spco-800 transition-colors">
                            {brand.name}
                          </h3>
                        )}
                      </div>
                      <div className="w-20 h-1.5 bg-gradient-to-r from-accent-500 to-spco-600 rounded-full mb-7" />
                      <div className="space-y-4 text-neutral-600 text-base md:text-lg leading-relaxed">
                        {brand.description
                          .split("\n\n")
                          .map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        {/* <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Browse Our {categoryInfo.name}</h2>
              <p className="section-subtitle mx-auto">
                Explore our complete range of {categoryInfo.name.toLowerCase()} designed for optimal performance in various applications.
              </p>
            </div>
            
            <ProductGrid products={categoryProducts} />
            
            <div className="mt-12 text-center">
              <a href="/products" className="btn-primary">
                View All Products
              </a>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="py-16 bg-spco-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-4">
                Need Help Selecting the Right {categoryInfo.name}?
              </h2>
              <p className="text-neutral-600 mb-8">
                Our technical experts are ready to help you find the perfect solution for your specific application requirements.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* <a 
                  href={`tel:+912212345678`} 
                  className="btn-primary"
                >
                  <Phone className="h-4 w-4" />
                  Call Technical Support: +91 22 1234 5678
                </a> */}
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Request Technical Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
