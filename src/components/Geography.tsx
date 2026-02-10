import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { MapPin } from "lucide-react";
import mapImage from 'figma:asset/0e2b5d71484869d8a1f03df9a0280e901f366b8e.png';

// Coordinates adjusted slightly left again as requested
// Shifted approx -4% X relative to previous position
const cities = [
  { id: 1, name: "г. Белгород", x: 22, y: 64 },
  { id: 2, name: "г. Воронеж", x: 24, y: 61 },
  { id: 3, name: "Ростов-на-Дону", x: 21, y: 70 },
  { id: 4, name: "г. Краснодар", x: 19, y: 76 },
  { id: 5, name: "г. Волгоград", x: 28, y: 71 },
  { id: 6, name: "г. Уфа", x: 36, y: 62 },
  { id: 7, name: "г. Челябинск", x: 40, y: 64 },
];

export const Geography = () => {
  const [activeCityId, setActiveCityId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 border-b border-[#D1D5DB] bg-[#EFF2F6]">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-[#0B2545]">География работы</h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map Area - 2/3 width */}
          <Reveal className="lg:w-2/3">
            <div className="relative w-full rounded-sm overflow-hidden bg-[#1F2937] shadow-lg border border-[#374151]">
              {/* Map Image */}
              <div className="relative w-full">
                <img 
                  src={mapImage} 
                  alt="Карта филиалов РФ" 
                  className="w-full h-auto block"
                />
                
                {/* Overlay Markers */}
                <div className="absolute inset-0">
                  {cities.map((city) => {
                    const isActive = activeCityId === city.id;
                    return (
                      <div
                        key={city.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
                        style={{ left: `${city.x}%`, top: `${city.y}%` }}
                        onMouseEnter={() => setActiveCityId(city.id)}
                        onMouseLeave={() => setActiveCityId(null)}
                      >
                         {/* Pulse Animation for Active State */}
                         {isActive && (
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#E86F1F] rounded-full animate-ping opacity-40 pointer-events-none" />
                         )}

                         {/* Marker Dot */}
                         <div className={`
                           w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white transition-all duration-300 shadow-md
                           ${isActive ? "bg-[#E86F1F] scale-125" : "bg-[#E86F1F] hover:scale-110"}
                         `} />

                         {/* Tooltip */}
                         <div className={`
                           absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 
                           bg-white text-[#0B2545] text-xs md:text-sm font-bold rounded shadow-xl 
                           whitespace-nowrap transition-all duration-300 pointer-events-none z-20
                           ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                         `}>
                            {city.name}
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                         </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B7280] italic">
              * Филиальная сеть компании охватывает ключевые промышленные регионы России
            </p>
          </Reveal>

          {/* List Area - 1/3 width */}
          <Reveal delay={0.2} className="lg:w-1/3">
            <div className="h-full bg-[#F8FAFC] border border-[#D1D5DB] p-8 rounded-sm shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-8 text-[#0B2545] flex items-center gap-3">
                 <span className="w-1 h-6 bg-[#E86F1F] rounded-full block"></span>
                 Филиалы
              </h3>
              
              <ul className="space-y-3">
                {cities.map((city) => {
                  const isActive = activeCityId === city.id;
                  return (
                    <li 
                      key={city.id} 
                      onMouseEnter={() => setActiveCityId(city.id)}
                      onMouseLeave={() => setActiveCityId(null)}
                      className={`
                        flex items-center gap-4 p-3 rounded-sm cursor-pointer transition-all duration-200 border
                        ${isActive 
                          ? "bg-[#E86F1F] border-[#E86F1F] text-white shadow-md -translate-x-1" 
                          : "bg-white border-transparent hover:border-[#D1D5DB] text-[#111827]"}
                      `}
                    >
                      <MapPin className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-[#E86F1F]"}`} />
                      <span className="font-bold text-sm">{city.name}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-8 border-t border-[#E5E7EB]">
                  <p className="text-sm text-[#6B7280]">
                      Мы постоянно расширяем географию присутствия, чтобы быть ближе к нашим партнерам.
                  </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
