import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                {!imgError ? (
                  <img 
                    src="https://drive.google.com/thumbnail?id=1iPkIKtJDABtNZ6a1lus8NeEVU-ZPB9v7&sz=w1000" 
                    alt="Logo" 
                    className="h-8 w-auto object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                )}
                <span className="text-2xl font-bold">中源节能</span>
             </div>
             <p className="text-gray-400 max-w-md mb-8 text-base">
               {t.hero.subtitle}
             </p>
             <button className="flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
               Get in touch <ArrowUpRight size={16} />
             </button>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold">{t.contact.title}</h4>
            
            <div className="flex items-start gap-4">
               <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="text-sm text-gray-500 mb-1">{t.contact.addressLabel}</p>
                 <p className="text-base text-gray-300">{t.contact.address}</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <Phone className="text-blue-500 mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="text-sm text-gray-500 mb-1">{t.contact.phoneLabel}</p>
                 <p className="text-base text-gray-300">{t.contact.phone}</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4">
               <Mail className="text-blue-500 mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="text-sm text-gray-500 mb-1">Email</p>
                 <p className="text-base text-gray-300">Zyzhjn@163.com</p>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{t.contact.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;