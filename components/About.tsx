import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-xl transform rotate-3 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2370&auto=format&fit=crop" 
                alt="Office Building" 
                className="rounded-xl shadow-2xl"
              />
              {/* Overlay box removed */}
            </div>
          </Reveal>

          {/* Text Side */}
          <div>
            <Reveal>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Who We Are</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.title}</h3>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{tag}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;