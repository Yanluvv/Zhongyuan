import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, User, Smartphone, LucideIcon } from 'lucide-react';

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  minHeight?: string;
}

const ContactRow: React.FC<ContactRowProps> = ({ icon: Icon, label, value, minHeight = "min-h-[5rem]" }) => (
  <div className={`flex items-start gap-4 ${minHeight}`}>
     <Icon className="text-blue-500 mt-1 flex-shrink-0" size={20} />
     <div>
       <p className="text-sm text-gray-500 mb-1">{label}</p>
       <p className="text-base text-gray-300">{value}</p>
     </div>
  </div>
);

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand - Spans 2 columns on desktop */}
          <div className="lg:col-span-2 flex flex-col h-full">
             <div>
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
             </div>

             {/* QR Code Section moved here - mt-auto pushes it to the bottom to align with Email */}
             <div className="flex flex-col gap-3 mt-auto">
               <div className="bg-white p-1 rounded-lg w-fit">
                 <img 
                   src="https://drive.google.com/thumbnail?id=1Q7w_ka_LRvhpUxFAJgf4-LG-MEdSa94s&sz=w500" 
                   alt={t.customization.qrAlt}
                   className="w-32 h-32"
                 />
               </div>
               <p className="text-sm text-gray-400 ml-1 whitespace-pre-line">{t.customization.qrAlt}</p>
             </div>
          </div>

          {/* Contact Info - Spans 1 column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold h-7">{t.contact.title}</h4>
            
            <ContactRow 
              icon={MapPin} 
              label={t.contact.addressLabel} 
              value={t.contact.address} 
              minHeight="min-h-[5rem]" /* Height to handle multi-line address and align with Manager */
            />

            <ContactRow 
              icon={Phone} 
              label={t.contact.phoneLabel} 
              value={t.contact.phone}
              minHeight="min-h-[5rem]" /* Align with Mobile */
            />
            
            <div className="flex items-start gap-4">
               <Mail className="text-blue-500 mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="text-sm text-gray-500 mb-1">Email</p>
                 <p className="text-base text-gray-300">Zyzhjn@163.com</p>
               </div>
            </div>
          </div>

          {/* Solution Customization - Spans 1 column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold h-7">{t.customization.title}</h4>
            
            <ContactRow 
              icon={User} 
              label={t.customization.managerLabel} 
              value={t.customization.manager}
              minHeight="min-h-[5rem]"
            />

            <ContactRow 
              icon={Smartphone} 
              label={t.customization.phoneLabel} 
              value={t.customization.phone}
              minHeight="min-h-[5rem]"
            />
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