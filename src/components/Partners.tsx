import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, FileText, Calculator, Handshake, CreditCard, Truck } from "lucide-react";

const steps = [
  { id: 1, title: "Заявка", desc: "Оставьте заявку на сайте или по телефону", icon: FileText },
  { id: 2, title: "Расчет", desc: "Персональный менеджер подготовит КП", icon: Calculator },
  { id: 3, title: "Договор", desc: "Подписание договора поставки", icon: Handshake },
  { id: 4, title: "Оплата", desc: "Удобные варианты оплаты продукции", icon: CreditCard },
  { id: 5, title: "Поставка", desc: "Отгрузка топлива точно в срок", icon: Truck },
];

export const Partners = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#0B2545] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max" 
          alt="Partnership background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]" />
      </div>

      <div className="container mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Как начать сотрудничество</h2>
            <p className="text-gray-300 text-lg">
              Простая и прозрачная схема работы. Мы ценим ваше время, поэтому свели бюрократию к минимуму.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.1} className="relative group">
              <div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-6 rounded-sm h-full flex flex-col items-center text-center hover:bg-[#FFFFFF]/10 hover:border-[#E86F1F]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-[#E86F1F]/20 flex items-center justify-center text-[#E86F1F] mb-6 group-hover:bg-[#E86F1F] group-hover:text-white transition-colors">
                   <step.icon className="w-7 h-7" />
                </div>
                
                <span className="text-4xl font-black text-white/10 absolute top-2 right-4 pointer-events-none select-none group-hover:text-[#E86F1F]/10 transition-colors">
                  0{step.id}
                </span>

                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-snug">
                   {step.desc}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {i < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 translate-x-1/2">
                   <ArrowRight className="text-[#E86F1F] w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="flex flex-col items-center gap-4">
            <button className="px-12 py-4 bg-[#E86F1F] text-white font-bold hover:bg-[#d66215] transition-colors rounded-sm shadow-xl uppercase tracking-wider text-sm">
              Стать партнёром
            </button>
            <p className="text-xs text-gray-500 mt-2">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
