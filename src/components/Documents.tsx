import React from "react";
import { Reveal } from "./ui/Reveal";
import { FileText, Download } from "lucide-react";

const documents = [
  { name: "Свидетельство о государственной регистрации (ОГРН)", size: "2.4 MB" },
  { name: "Устав ООО «ДОНТРЕЙД»", size: "4.1 MB" },
  { name: "Свидетельство о постановке на учет в налоговом органе (ИНН)", size: "1.8 MB" },
  { name: "Политика в отношении обработки персональных данных", size: "0.5 MB" },
];

export const Documents = () => {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-[#D1D5DB] bg-[#EFF2F6]">
      <div className="container mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#0B2545]">Документы и реквизиты</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Documents List */}
          <Reveal>
            <h3 className="text-sm font-bold mb-6 text-[#E86F1F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E86F1F]"></span>
              Учредительные документы
            </h3>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center gap-5 p-5 bg-[#F8FAFC] border border-[#D1D5DB] hover:border-[#E86F1F] hover:shadow-md transition-all rounded-sm group cursor-pointer">
                  <div className="w-10 h-10 bg-[#E5E7EB] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#E86F1F] transition-colors">
                    <FileText className="text-[#6B7280] w-5 h-5 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#111827] font-medium mb-1 group-hover:text-[#E86F1F] transition-colors">{doc.name}</h4>
                    <span className="text-xs text-[#9CA3AF]">PDF • {doc.size}</span>
                  </div>
                  <Download className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#E86F1F] transition-colors" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Requisites with Image */}
          <Reveal delay={0.2}>
            <h3 className="text-sm font-bold mb-6 text-[#E86F1F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E86F1F]"></span>
              Реквизиты компании
            </h3>
            
            <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#D1D5DB]">
                <div className="relative h-40 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max" 
                        alt="Contract signing" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-6">
                        <h4 className="text-2xl font-bold text-[#0B2545]">ООО «ДОНТРЕЙД»</h4>
                    </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 border-b border-[#E5E7EB] pb-2">
                    <span className="text-sm text-[#6B7280]">Юр. адрес:</span>
                    <span className="col-span-2 text-sm text-[#111827] font-medium">344000, г. Ростов-на-Дону, пр. Буденновский, д. 60</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 border-b border-[#E5E7EB] pb-2">
                    <span className="text-sm text-[#6B7280]">ИНН / КПП:</span>
                    <span className="col-span-2 text-sm text-[#111827] font-medium">6164000000 / 616401001</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 border-b border-[#E5E7EB] pb-2">
                    <span className="text-sm text-[#6B7280]">ОГРН:</span>
                    <span className="col-span-2 text-sm text-[#111827] font-medium">1026100000000</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2">
                    <span className="text-sm text-[#6B7280]">Банк:</span>
                    <span className="col-span-2 text-sm text-[#111827] font-medium">ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2">
                    <span className="text-sm text-[#6B7280]">Р/счет:</span>
                    <span className="col-span-2 text-sm text-[#111827] font-medium">40702810000000000000</span>
                  </div>
                  
                  <div className="pt-6 mt-4">
                     <button className="w-full py-3 border-2 border-[#0B2545] text-[#0B2545] font-bold text-sm uppercase hover:bg-[#0B2545] hover:text-white transition-colors rounded-sm">
                        Скачать карточку предприятия
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
