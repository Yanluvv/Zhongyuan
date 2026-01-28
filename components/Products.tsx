import React, { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';
import * as Icons from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Products: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.5;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Video play failed:", error);
        // Even if play fails (e.g. browser policy), set state to show controls so user can retry manually
        setIsPlaying(true);
      });
    }
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h3 className="text-3xl font-bold text-gray-900">{t.features.subtitle}</h3>
          </Reveal>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <Reveal width="100%">
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video ring-4 ring-white group">
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  {/* Custom Poster Image */}
                  <img 
                    src="/video-poster.jpg" 
                    alt="Video Cover" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="relative z-30 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                    <Icons.Play className="text-blue-600 w-8 h-8 fill-blue-600" />
                  </div>
                </div>
              )}

              <video 
                ref={videoRef}
                className="w-full h-full object-cover bg-black"
                controls={isPlaying}
                playsInline
                loop
                // Removed native poster to rely entirely on our custom overlay for consistency
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {t.features.items.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;
            return (
              <Reveal key={index} delay={0.2 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Tech Specs Comparison */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
             <div className="p-10 lg:p-16 bg-blue-900 text-white">
                <Reveal>
                  <h3 className="text-3xl font-bold mb-8">{t.tech.title}</h3>
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-blue-200 border-b border-blue-700 pb-2">{t.tech.ecTitle}</h4>
                      <ul className="space-y-3">
                        {t.tech.ecDesc.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-blue-50">
                            <Icons.Check className="mt-1 text-green-400 flex-shrink-0" size={18} />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="opacity-60">
                      <h4 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2">{t.tech.acTitle}</h4>
                      <ul className="space-y-3">
                         {t.tech.acDesc.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Icons.X className="mt-1 text-red-400 flex-shrink-0" size={18} />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
             </div>
             
             {/* Chart Section: Reduced padding on mobile (p-4) to maximize width */}
             <div className="p-4 sm:p-10 lg:p-16 bg-white flex flex-col justify-center">
               <Reveal width="100%" delay={0.3}>
                 <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={t.tech.comparison}
                        layout="vertical"
                        // Reduced left margin to 0 (since YAxis has width)
                        // Kept right margin generous (60) to avoid tooltip clipping in overflow-hidden container
                        margin={{ top: 20, right: 60, left: 0, bottom: 5 }}
                        barGap={2}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" domain={[0, 100]} hide />
                        {/* Reduced width from 120 to 90 to move chart left */}
                        <YAxis 
                          dataKey="label" 
                          type="category" 
                          width={90} 
                          tick={{fontSize: 12, fill: '#64748b'}} 
                        />
                        <Tooltip 
                          cursor={{fill: 'transparent'}}
                          contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                          formatter={(value: number, name: string) => [`${value}%`, name]}
                        />
                        <Bar dataKey="valAC" name={t.tech.acTitle} fill="#94a3b8" radius={[0, 4, 4, 0]} barSize={20} />
                        <Bar dataKey="valEC" name={t.tech.ecTitle} fill="#16a34a" radius={[0, 4, 4, 0]} barSize={20} >
                          {
                            t.tech.comparison.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === t.tech.comparison.length - 1 ? '#2563eb' : '#16a34a'} />
                            ))
                          }
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex justify-center gap-8 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                      <span className="text-gray-500">AC Fan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                      <span className="text-gray-500">EC Fan</span>
                    </div>
                 </div>
               </Reveal>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;