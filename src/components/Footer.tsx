import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white py-16 px-4 md:px-8 border-t border-[#1F2933]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           {/* Column 1: Logo & Desc */}
           <div className="space-y-6">
              <div className="text-2xl font-bold tracking-wider font-mono text-white">ДОНТРЕЙД</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Надежный поставщик нефтепродуктов по всей России. Гарантия качества, соблюдение сроков, гибкие условия сотрудничества.
              </p>
           </div>

           {/* Column 2: Navigation */}
           <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Компания</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {["О компании", "Услуги", "Топливо", "Филиалы", "Контакты"].map((link) => (
                   <li key={link}><a href="#" className="hover:text-[#E86F1F] transition-colors">{link}</a></li>
                ))}
              </ul>
           </div>

           {/* Column 3: Contacts */}
           <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Контакты</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-[#E86F1F] flex-shrink-0" />
                   <span>344000, г. Ростов-на-Дону,<br/>пр. Буденновский, д. 60</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="w-5 h-5 text-[#E86F1F] flex-shrink-0" />
                   <span>+7 (863) 300-33-44</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="w-5 h-5 text-[#E86F1F] flex-shrink-0" />
                   <span>info@dontrade.ru</span>
                </li>
              </ul>
           </div>
           
           {/* Column 4: Actions */}
           <div>
             <button className="w-full py-3 bg-[#E86F1F] text-white font-bold rounded-sm hover:bg-[#d66215] transition-colors mb-4 text-sm">
               Заказать звонок
             </button>
             <button className="w-full py-3 border border-gray-600 text-gray-300 font-bold rounded-sm hover:border-white hover:text-white transition-colors text-sm">
               Личный кабинет
             </button>
           </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} ООО «ДонТрейд». Все права защищены.
          </p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
             <a href="#" className="hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
