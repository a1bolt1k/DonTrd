import React from "react";
import { Reveal } from "./ui/Reveal";

export const Fuel = () => {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-[#D1D5DB] bg-[#E2E6EB]">
      <div className="container mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold mb-4 text-[#0B2545]">Топливо и нефтепродукты</h2>
               <p className="text-[#6B7280] text-lg leading-relaxed">
                 Мы предлагаем широкий ассортимент топлива высокого экологического класса (ЕВРО-5, ЕВРО-6) для различных отраслей промышленности, аграрного сектора и транспортных компаний. Вся продукция проходит строгий лабораторный контроль.
               </p>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto rounded-sm overflow-hidden relative shadow-md">
               <img 
                 src="https://images.unsplash.com/photo-1748261347902-451fb437e8fb?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
                 alt="Лабораторный контроль качества топлива" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#0B2545]/20 mix-blend-multiply" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="overflow-x-auto bg-[#F8FAFC] border border-[#D1D5DB] mb-10 shadow-sm rounded-sm">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2545] text-white">
                  <th className="p-5 w-1/4 font-semibold text-sm uppercase tracking-wider">Категория</th>
                  <th className="p-5 w-1/4 font-semibold text-sm uppercase tracking-wider">Марка</th>
                  <th className="p-5 w-1/3 font-semibold text-sm uppercase tracking-wider">Описание / ГОСТ</th>
                  <th className="p-5 font-semibold text-sm uppercase tracking-wider text-center">Наличие</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5E7EB] hover:bg-[#EFF2F6] transition-colors group">
                  <td className="p-5 text-[#111827] font-bold">Дизельное топливо</td>
                  <td className="p-5 text-[#111827]">ДТ-Л-К5 / ДТ-З-К5</td>
                  <td className="p-5 text-[#6B7280]">Сорт C / Сорт F, ГОСТ 32511-2013</td>
                  <td className="p-5 text-center">
                    <div className="w-3 h-3 mx-auto bg-[#10B981] rounded-full" title="В наличии" />
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] hover:bg-[#EFF2F6] transition-colors group">
                  <td className="p-5 text-[#111827] font-bold">Бензины</td>
                  <td className="p-5 text-[#111827]">АИ-92-К5 / АИ-95-К5</td>
                  <td className="p-5 text-[#6B7280]">Неэтилированный, ГОСТ 32513-2013</td>
                  <td className="p-5 text-center">
                    <div className="w-3 h-3 mx-auto bg-[#10B981] rounded-full" title="В наличии" />
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] hover:bg-[#EFF2F6] transition-colors group">
                  <td className="p-5 text-[#111827] font-bold">Керосин</td>
                  <td className="p-5 text-[#111827]">ТС-1 / РТ</td>
                  <td className="p-5 text-[#6B7280]">Авиационный, ГОСТ 10227-86</td>
                  <td className="p-5 text-center">
                    <div className="w-3 h-3 mx-auto bg-[#F59E0B] rounded-full" title="Под заказ" />
                  </td>
                </tr>
                 <tr className="border-b border-[#E5E7EB] hover:bg-[#EFF2F6] transition-colors group">
                  <td className="p-5 text-[#111827] font-bold">Мазут</td>
                  <td className="p-5 text-[#111827]">М-100 / М-40</td>
                  <td className="p-5 text-[#6B7280]">Топочный зольный, ГОСТ 10585-2013</td>
                  <td className="p-5 text-center">
                    <div className="w-3 h-3 mx-auto bg-[#10B981] rounded-full" title="В наличии" />
                  </td>
                </tr>
                <tr className="border-b border-[#E5E7EB] hover:bg-[#EFF2F6] transition-colors group">
                  <td className="p-5 text-[#111827] font-bold">Битум</td>
                  <td className="p-5 text-[#111827]">БНД 60/90</td>
                  <td className="p-5 text-[#6B7280]">Дорожный вязкий, ГОСТ 33133-2014</td>
                  <td className="p-5 text-center">
                    <div className="w-3 h-3 mx-auto bg-[#F59E0B] rounded-full" title="Под заказ" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-[#E86F1F] text-white font-bold hover:bg-[#d66215] transition-colors rounded-sm shadow-md uppercase tracking-wider text-sm">
              Скачать полный прайс-лист (PDF)
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
