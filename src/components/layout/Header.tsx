
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SearchBar from '../common/SearchBar';
import spcoLogoBlack from '@/assets/SPCO-Logo-Black.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    // Special case for Products tab - only highlight when on specific product category pages
    if (path === '/products') {
      return location.pathname.startsWith('/products/') && location.pathname !== '/products';
    }
    return location.pathname === path;
  };

  const isShopActive = () => {
    return location.pathname === '/products';
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      submenu: [
        { name: 'Bearings', href: '/products/bearings' },
        { name: 'Speciality Lubricants', href: '/products/speciality-lubricants' },
        { name: 'Automotive Parts', href: '/products/automotive-parts' },
        { name: 'Journal & Tilting Pad Bearings', href: '/products/journal-tilting-pad-bearings' },
        { name: 'Self Lubricating Bushes', href: '/products/self-lubricating-bushes' },
        { name: 'Adaptor Sleeves', href: '/products/adaptor-sleeves' },
      ]
    },
    // { name: 'Shop', href: '/products' },
    // { 
    //   name: 'Industries', 
    //   href: '/industries',
    //   submenu: [
    //     { name: 'Automotive', href: '/industries/automotive' },
    //     { name: 'Heavy Machinery', href: '/industries/heavy-machinery' },
    //     { name: 'Manufacturing', href: '/industries/manufacturing' },
    //     { name: 'Mining', href: '/industries/mining' },
    //     { name: 'Agriculture', href: '/industries/agriculture' },
    //   ]
    // },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={spcoLogoBlack} alt="SPCO" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button 
                    className={cn(
                      'py-2 px-3 rounded-md text-sm font-medium transition-custom flex items-center gap-1',
                      isActive(item.href) ? 'text-accent-500' : 'text-neutral-700 hover:text-spco-600 hover:bg-neutral-50'
                    )}
                    onClick={() => item.name === 'Products' && setProductsMenuOpen(!productsMenuOpen)}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={item.href}
                    className={cn(
                      'py-2 px-3 rounded-md text-sm font-medium transition-custom',
                      item.name === 'Shop' 
                        ? (isShopActive() ? 'text-accent-500' : 'text-neutral-700 hover:text-spco-600 hover:bg-neutral-50')
                        : (isActive(item.href) ? 'text-accent-500' : 'text-neutral-700 hover:text-spco-600 hover:bg-neutral-50')
                    )}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="py-1 bg-white rounded-md shadow-lg border border-neutral-200">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-spco-600 transition-custom"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* <SearchBar className="hidden md:flex mr-4 w-[200px] lg:w-[250px]" /> */}
            
            <Link 
              to="/contact" 
              className="hidden md:inline-flex btn-primary mr-4"
            >
              Enquire Now
            </Link>
            
            <button 
              className="p-2 rounded-md text-neutral-600 hover:text-spco-700 hover:bg-neutral-100 transition-custom lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform ease-in-out duration-300 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '60px' }}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          {/* <SearchBar className="mb-6" /> */}
          
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button 
                      className={cn(
                        'w-full flex items-center justify-between py-3 px-4 rounded-md text-left',
                        isActive(item.href) ? 'bg-neutral-100 text-spco-700' : 'text-neutral-700 hover:bg-neutral-50'
                      )}
                      onClick={() => {
                        if (item.name === 'Products') {
                          setProductsMenuOpen(!productsMenuOpen);
                        }
                      }}
                    >
                      <span className="font-medium">{item.name}</span>
                      {productsMenuOpen && item.name === 'Products' ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </button>
                    
                    {productsMenuOpen && item.name === 'Products' && (
                      <div className="mt-1 ml-4 pl-4 border-l border-neutral-200 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block py-2 px-3 rounded-md text-neutral-600 hover:bg-neutral-50 hover:text-spco-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.href}
                    className={cn(
                      'block py-3 px-4 rounded-md',
                      item.name === 'Shop'
                        ? (isShopActive() ? 'bg-neutral-100 text-spco-700' : 'text-neutral-700 hover:bg-neutral-50')
                        : (isActive(item.href) ? 'bg-neutral-100 text-spco-700' : 'text-neutral-700 hover:bg-neutral-50')
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
