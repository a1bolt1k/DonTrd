import React from "react";
import { Reveal } from "./ui/Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

const subdivisions = [
  { region: "Краснодарский край", city: "г. Краснодар", address: "ул. Северная, д. 327", phone: "+7 (861) 200-11-22", email: "krd@dontrade.ru" },
  { region: "Ростовская область", city: "г. Ростов-на-Дону", address: "пр. Буденновский, д. 60", phone: "+7 (863) 300-33-44", email: "rst@dontrade.ru" },
  { region: "Воронежская область", city: "г. Воронеж", address: "ул. Революции 1905 года, д. 82", phone: "+7 (473) 250-55-66", email: "vrn@dontrade.ru" },
  { region: "Волгоградская область", city: "г. Волгоград", address: "пр. Ленина, д. 98", phone: "+7 (844) 270-77-88", email: "vlg@dontrade.ru" },
];

export const Subdivisions = () => {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-[#D1D5DB] bg-[#E2E6EB]">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0B2545]">Обособленные подразделения</h2>
            <p className="text-[#6B7280]">
              Широкая сеть филиалов позволяет нам оперативно реагировать на запросы клиентов в ключевых регионах присутствия.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subdivisions.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#F8FAFC] p-8 border border-[#D1D5DB] hover:border-[#0B2545] hover:shadow-md transition-all rounded-sm group h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#E86F1F] transition-colors">
                      {item.city}
                    </h3>
                    <span className="text-sm text-[#6B7280] uppercase tracking-wider font-semibold">
                      {item.region}
                    </span>
                  </div>
                  <div className="p-2 bg-[#EFF2F6] rounded-full text-[#0B2545] group-hover:bg-[#E86F1F] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-[#E5E7EB]">
                   <div className="flex items-center gap-3 text-[#4B5563]">
                     <MapPin className="w-4 h-4 text-[#9CA3AF]" />
                     <span className="text-sm">{item.address}</span>
                   </div>
                   <div className="flex items-center gap-3 text-[#4B5563]">
                     <Phone className="w-4 h-4 text-[#9CA3AF]" />
                     <span className="text-sm font-medium">{item.phone}</span>
                   </div>
                   <div className="flex items-center gap-3 text-[#4B5563]">
                     <Mail className="w-4 h-4 text-[#9CA3AF]" />
                     <span className="text-sm hover:text-[#E86F1F] transition-colors cursor-pointer">{item.email}</span>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
            <div className="mt-8 text-center">
                <p className="text-[#6B7280] text-sm">
                    Полный список адресов складов и нефтебаз доступен по запросу у менеджеров.
                </p>
            </div>
        </Reveal>
      </div>
    </section>
  );
};
