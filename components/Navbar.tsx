import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, to: "home" },
    { name: t.nav.about, to: "about" },
    { name: t.nav.products, to: "products" },
    { name: t.nav.cases, to: "cases" },
    { name: t.nav.contact, to: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            {!imgError ? (
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-10 w-auto object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${scrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'}`}>
                 <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            )}
            <div className="flex flex-col justify-center">
              <span className={`font-bold text-xl leading-tight tracking-wide ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                中源节能
              </span>
              <span className={`text-[0.6rem] tracking-wider uppercase ${scrolled ? 'text-gray-500' : 'text-gray-200'}`}>
                Zhongyuan Energy Conservation
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer text-sm font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </ScrollLink>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-3 py-1 rounded-full border transition-all ${
                scrolled 
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={14} />
              <span className="text-xs font-semibold">{language === 'zh' ? 'CN' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded border transition-all ${
                scrolled 
                  ? 'border-gray-300 text-gray-700' 
                  : 'border-white/30 text-white'
              }`}
            >
              <span className="text-xs font-bold">{language === 'zh' ? 'CN' : 'EN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;