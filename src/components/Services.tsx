import React from "react";
import { Reveal } from "./ui/Reveal";
import { Droplets, Truck, Warehouse, FlaskConical } from "lucide-react";

const services = [
  { title: "Оптовые поставки", desc: "Поставка нефтепродуктов крупным и мелким оптом.", icon: Droplets },
  { title: "Логистика", desc: "Доставка собственным автотранспортом и Ж/Д.", icon: Truck },
  { title: "Хранение", desc: "Услуги по хранению на собственных нефтебазах.", icon: Warehouse },
  { title: "Контроль качества", desc: "Лабораторный анализ каждой партии топлива.", icon: FlaskConical },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-[#D1D5DB]">
      <div className="container mx-auto">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0B2545]">Наши услуги</h2>
            <p className="max-w-xl text-[#6B7280]">
              Комплексные решения для бизнеса: от поставки до хранения и контроля качества нефтепродуктов.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group p-8 border border-[#E5E7EB] bg-[#F8FAFC] h-full flex flex-col hover:border-[#E86F1F] hover:shadow-lg transition-all duration-300 rounded-sm">
                <div className="w-14 h-14 bg-[#EFF2F6] text-[#E86F1F] flex items-center justify-center mb-6 rounded-full group-hover:bg-[#E86F1F] group-hover:text-white transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#111827]">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="mt-auto">
                    <div className="h-1 w-12 bg-[#E5E7EB] group-hover:bg-[#E86F1F] transition-colors" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
