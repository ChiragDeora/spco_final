import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import spcoAboutus from '@/assets/aboutus.svg';
import { CheckCircle, MapPin, Award, Users, TrendingUp, BarChart3 } from "lucide-react";
const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const timeline = [{
    year: "1995",
    title: "Company Founded",
    description: "SPCO was established in Mumbai as a small hardware distributor focused on the local market."
  }, {
    year: "2002",
    title: "Expansion of Product Range",
    description: "Expanded product portfolio to include a comprehensive range of bearings and related components."
  }, {
    year: "2008",
    title: "Technical Support Team",
    description: "Established a dedicated technical support team to provide specialized assistance to customers."
  }, {
    year: "2015",
    title: "New Headquarters",
    description: "Moved to a larger headquarters with expanded warehousing and logistics capabilities."
  }, {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented advanced digital systems for inventory management and customer service."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-spco-800 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507646871303-331b8f659227?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-spco-900 to-spco-800/70"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <Breadcrumb items={[{
            label: "About"
          }]} className="mb-6 text-white/80" />
            
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
                About SPCO
              </h1>
              <p className="text-lg text-white/90 mb-6">
                 In India's competitive market we have established our selves over the last 36 years as an organization that can be trusted for quality & service. at SPCO we value relationships above all else; with clients, suppliers, employees and partners alike.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700 mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl font-display font-semibold text-spco-800 mb-4">
                  A Legacy of Quality and Reliability
                </h2>
                <p className="text-neutral-600 mb-6">
                  Founded in 1989 by Mr. Sudhir Deora, Spares & Components Co. Pvt. Ltd. (SPCO) began as a small supplier of needle roller bearings to local companies. Through focused vision and deep industry knowledge, Mr. Deora steadily expanded the business into general and specialty anti-friction bearings, earning a strong reputation for precision and reliability.
                </p>
                <p className="text-neutral-600 mb-6">
                  Over time, SPCO grew into one of India's largest stockists and distributors of bearings, bushes, and specialty lubricants. With a head office and master warehouse in Mumbai and branches in Jaipur, Nasik, Chennai, Jamshedpur, and Pune, we now serve a broad industrial clientele nationwide.
                </p>
                <p className="text-neutral-600">
                  Our foundation is built on trust, technical expertise, and a deep commitment to customer satisfaction. As we continue to expand our reach and product offerings, we remain rooted in the values that shaped us from the beginning—precision, partnership, and performance.
                </p>
              </div>
              
              <div className="relative">
                <div className="">
                  <img src={spcoAboutus} alt="SPCO Headquarters" className="w-60 h-60" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-spco-50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-spco-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-spco-800">Headquarters</h4>
                      <p className="text-sm text-neutral-600">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Mission & Values</h2>
              <p className="section-subtitle mx-auto">
                At SPCO, our business is guided by clear principles that define who we are and how we operate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <Award className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-neutral-600">
                To deliver precision-engineered components with unmatched reliability, service, and speed  empowering Indian industries through a robust supply network, deep product expertise, and lasting partnerships built on trust.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Vision
                </h3>
                <p className="text-neutral-600">
                To be India’s most trusted and comprehensive industrial distribution partner, recognized for our integrity, technical excellence, and relentless commitment to customer satisfaction in every bearing, bush, and lubricant we deliver.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <Users className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Values
                </h3>
                <ul className="text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Quality without compromise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Technical excellence and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Integrity in all relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Customer success drives our success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle mx-auto">
                A timeline of SPCO's growth and key milestones over the years.
              </p>
            </div>
            
            <div className="relative"> */}
              {/* Vertical line */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => <div key={index} className="relative"> */}
                    {/* Timeline dot */}
                    {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-white"></div>
                    
                    <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2"></div>
                      <div className="md:w-1/2 flex items-center">
                        <div className="bg-neutral-50 p-6 rounded-lg shadow-sm border border-neutral-100 w-full">
                          <span className="inline-flex items-center rounded-full bg-spco-50 px-2.5 py-0.5 text-xs font-medium text-spco-700 mb-2">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-display font-semibold text-spco-700 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section> */}

        {/* Facilities and Infrastructure */}
        {/* <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Facilities & Capabilities</h2>
              <p className="section-subtitle mx-auto">
                SPCO's state-of-the-art infrastructure enables us to deliver reliable service and timely solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-spco-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-spco-700 mb-1">Advanced Warehouse Management</h3>
                      <p className="text-neutral-600">
                        Our 25,000 sq. ft. warehouse facility employs digital inventory management systems for efficient stock handling and order fulfillment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-spco-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-spco-700 mb-1">Quality Control Lab</h3>
                      <p className="text-neutral-600">
                        Our in-house quality control laboratory ensures that all products meet the highest standards before they reach our customers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Users className="h-5 w-5 text-spco-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-spco-700 mb-1">Technical Support Center</h3>
                      <p className="text-neutral-600">
                        Our technical team provides expert support and solutions, with a combined experience of over 100 years in the industry.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Award className="h-5 w-5 text-spco-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-spco-700 mb-1">Distribution Network</h3>
                      <p className="text-neutral-600">
                        With distribution centers in key locations across India, we can deliver products efficiently to customers nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1630569470960-ec1e8c073b13?q=80&w=2069&auto=format&fit=crop" alt="SPCO Warehouse" className="w-full h-full object-cover aspect-square" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1556221430-4dd6d1b1f9c1?q=80&w=2070&auto=format&fit=crop" alt="Quality Control Lab" className="w-full h-full object-cover aspect-square" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop" alt="Technical Support" className="w-full h-full object-cover aspect-square" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Distribution" className="w-full h-full object-cover aspect-square" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Team (Placeholder) */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Leadership Team</h2>
              <p className="section-subtitle mx-auto">
                Meet the experienced professionals who guide SPCO's vision and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-100 card-hover">
                  <div className="aspect-square bg-neutral-100">
                    <img src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`} alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-spco-700">
                      {i === 1 ? 'Raj Mehta' : i === 2 ? 'Priya Sharma' : i === 3 ? 'Vikram Desai' : 'Anjali Patel'}
                    </h3>
                    <p className="text-accent-500 font-medium text-sm mb-3">
                      {i === 1 ? 'CEO & Founder' : i === 2 ? 'Technical Director' : i === 3 ? 'Operations Manager' : 'Sales Director'}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {i === 1 ? 'Raj has 25+ years of experience in the hardware industry and founded SPCO in 1995.' : i === 2 ? 'Priya leads our technical team with expertise in bearing applications across industries.' : i === 3 ? 'Vikram ensures efficient operations and logistics for timely product delivery.' : 'Anjali develops strategic relationships with customers and partners.'}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-spco-800 to-spco-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4 text-stone-50">Ready to Work with SPCO?</h2>
              <p className="text-lg text-white/90 mb-8">
                Experience the SPCO difference with our premium products and expert technical support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* <a href="/products" className="btn-primary">
                  Browse Products
                </a> */}
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;