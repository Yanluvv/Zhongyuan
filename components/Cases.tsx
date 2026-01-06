import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';
import { MapPin, Zap } from 'lucide-react';

const Cases: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-16">
             <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Our Achievements</h2>
             <h3 className="text-3xl font-bold text-gray-900">{t.cases.title}</h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cases.items.map((item, index) => {
            // Determine image source based on index
            let imageSrc = `https://picsum.photos/seed/${index + 40}/600/800`; // Default fallback
            
            if (index === 0) {
              // Changxin Memory
              imageSrc = "https://drive.google.com/thumbnail?id=1kVpfk6rT4vU6Mzd8uu3nRv0ICtxuq5hk&sz=w1000";
            } else if (index === 1) {
              // Sungrow
              imageSrc = "https://drive.google.com/thumbnail?id=1kocGVh1vj_Tq_-FBL9T9f7UkgIWF-DMS&sz=w1000";
            } else if (index === 2) {
              // Unilever
              imageSrc = "https://drive.google.com/thumbnail?id=178T502SoJySIt9pfyMdEdy8AtjsYEGTn&sz=w1000";
            }

            return (
              <Reveal key={index} delay={0.2 * index}>
                <div className="relative group overflow-hidden rounded-2xl bg-gray-900 aspect-[4/5] flex items-end">
                  {/* Background Image */}
                  <img 
                    src={imageSrc} 
                    alt={item.client}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
                  
                  <div className="relative p-8 w-full">
                    <div className="flex items-center gap-2 text-blue-300 mb-2 text-sm uppercase tracking-wider">
                        <MapPin size={14} />
                        {item.location}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.client}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Savings</p>
                        <p className="text-2xl font-bold text-green-400">{item.savings}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Power Reduction</p>
                        <div className="flex items-center gap-1 text-white font-medium">
                          <Zap size={14} className="text-yellow-400" />
                          <span>{item.powerRed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Partners Section */}
        <div className="mt-32">
            <Reveal width="100%">
               <div className="relative mb-16">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-6 bg-white text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      {t.partners.title}
                    </span>
                  </div>
               </div>
               
               {/* Grid layout with baseline alignment to ensure text sits on the same line */}
               <div className="grid grid-cols-2 gap-8 md:gap-16 items-baseline max-w-6xl mx-auto">
                  {/* ZIEHL-ABEGG Logo - Centered on mobile, Right aligned on desktop */}
                  <div className="flex justify-center md:justify-end group transition-all duration-500 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer">
                     <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide text-[#002B7F] text-center md:text-right">
                       ZIEHL-ABEGG
                     </span>
                  </div>

                  {/* ebmpapst Logo - Centered on mobile, Left aligned on desktop */}
                  <div className="flex justify-center md:justify-start group transition-all duration-500 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer">
                     <div className="flex items-baseline">
                        <span className="text-3xl sm:text-4xl md:text-6xl font-bold font-sans tracking-tight text-black">ebm</span>
                        <span className="text-3xl sm:text-4xl md:text-6xl font-bold font-sans tracking-tight text-[#006699]">papst</span>
                     </div>
                  </div>
               </div>
               
               <p className="mt-12 text-center text-sm text-gray-400 max-w-lg mx-auto">{t.partners.desc}</p>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Cases;