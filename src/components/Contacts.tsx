import React from "react";
import { Reveal } from "./ui/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contacts = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#E2E6EB] border-t border-[#D1D5DB]">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-[#0B2545]">Контакты</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="bg-[#F8FAFC] p-8 md:p-10 border border-[#D1D5DB] rounded-sm shadow-md h-full">
              <h3 className="text-xl font-bold mb-8 text-[#111827]">Связаться с нами</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#6B7280] uppercase mb-2 tracking-wider">Ваше имя</label>
                    <input type="text" className="w-full h-12 border border-[#E5E7EB] px-4 bg-white focus:outline-none focus:border-[#E86F1F] focus:ring-1 focus:ring-[#E86F1F] transition-all rounded-sm text-[#111827]" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#6B7280] uppercase mb-2 tracking-wider">Телефон</label>
                    <input type="tel" className="w-full h-12 border border-[#E5E7EB] px-4 bg-white focus:outline-none focus:border-[#E86F1F] focus:ring-1 focus:ring-[#E86F1F] transition-all rounded-sm text-[#111827]" placeholder="+7 (999) 000-00-00" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B7280] uppercase mb-2 tracking-wider">Email</label>
                  <input type="email" className="w-full h-12 border border-[#E5E7EB] px-4 bg-white focus:outline-none focus:border-[#E86F1F] focus:ring-1 focus:ring-[#E86F1F] transition-all rounded-sm text-[#111827]" placeholder="example@company.ru" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B7280] uppercase mb-2 tracking-wider">Сообщение</label>
                  <textarea className="w-full h-32 border border-[#E5E7EB] p-4 bg-white focus:outline-none focus:border-[#E86F1F] focus:ring-1 focus:ring-[#E86F1F] transition-all resize-none rounded-sm text-[#111827]" placeholder="Ваш вопрос или предложение..." />
                </div>
                <div className="pt-2">
                   <button type="button" className="w-full h-14 bg-[#E86F1F] text-white font-bold text-lg hover:bg-[#d66215] transition-colors rounded-sm shadow-md">
                    Отправить заявку
                   </button>
                   <p className="text-xs text-[#9CA3AF] mt-3 text-center">
                     Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                   </p>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Info & Map Image */}
          <Reveal delay={0.2}>
            <div className="flex flex-col h-full gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-[#0B2545] text-lg flex items-center gap-2">
                    <MapPin className="text-[#E86F1F] w-5 h-5" /> Центральный офис
                  </h4>
                  <p className="text-[#4B5563] leading-relaxed">
                    344000, г. Ростов-на-Дону,<br />
                    пр. Буденновский, д. 60,<br />
                    БЦ «Гедон», оф. 505
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-[#0B2545] text-lg flex items-center gap-2">
                    <Clock className="text-[#E86F1F] w-5 h-5" /> Режим работы
                  </h4>
                  <p className="text-[#4B5563] leading-relaxed">
                    Пн-Пт: 09:00 — 18:00<br />
                    Сб-Вс: Выходной
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-[#D1D5DB] pt-6">
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#EFF2F6] rounded-full flex items-center justify-center group-hover:bg-[#E86F1F] transition-colors">
                       <Phone className="w-5 h-5 text-[#0B2545] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                       <p className="text-xs text-[#6B7280] uppercase tracking-wider font-bold">Телефон</p>
                       <p className="text-xl font-bold text-[#111827] group-hover:text-[#E86F1F] transition-colors">+7 (863) 300-33-44</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#EFF2F6] rounded-full flex items-center justify-center group-hover:bg-[#E86F1F] transition-colors">
                       <Mail className="w-5 h-5 text-[#0B2545] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                       <p className="text-xs text-[#6B7280] uppercase tracking-wider font-bold">Email</p>
                       <p className="text-xl font-bold text-[#111827] group-hover:text-[#E86F1F] transition-colors">info@dontrade.ru</p>
                    </div>
                 </div>
              </div>
              
              {/* Map Placeholder Image */}
              <div className="flex-1 w-full min-h-[300px] relative rounded-sm overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1754298994778-514e0a285479?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
                  alt="Офисный центр" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0B2545]/30 group-hover:bg-[#0B2545]/20 transition-colors" />
                
                <div className="absolute bottom-6 left-6 right-6">
                   <button className="w-full py-3 bg-white/90 backdrop-blur-md text-[#0B2545] font-bold rounded-sm shadow-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" /> Показать на Яндекс.Картах
                   </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
