
import ContactForm from "../common/ContactForm";

const QuickContact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-spco-800 to-spco-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-spco-500 opacity-10 blur-3xl"></div>
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent-500 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent-500/20 px-2.5 py-0.5 text-xs font-medium text-accent-100 mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Have Questions About Our Products?
            </h2>
            <p className="text-neutral-300 mb-8 max-w-lg">
              Our team of experts is ready to help you find the perfect solution for your specific needs. Reach out to us today for personalized assistance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Call Us</h3>
                  <p className="mt-1 text-neutral-300">+91 8928385886</p>
                  <p className="mt-1 text-neutral-300">Mon-Sat, 10am-7pm IST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email Us</h3>
                  <p className="mt-1 text-neutral-300">sales1@spco.in</p>
                  <p className="mt-1 text-neutral-300">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 md:p-8 text-neutral-800 shadow-xl">
            <ContactForm showTitle={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
