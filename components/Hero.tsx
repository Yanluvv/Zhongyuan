import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://drive.google.com/thumbnail?id=1mLPNkfQLFFz5_gGB6SeXQS-9KeWTE4Lp&sz=w2560")',
        }}
      >
        {/* Reduced opacity from 90/80 to 60/50 to make background clearer */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-gray-900/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge removed */}
        
        <Reveal width="100%" delay={0.3}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {t.hero.title}
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.5}>
          <ScrollLink 
            to="products"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            {t.hero.cta}
          </ScrollLink>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;