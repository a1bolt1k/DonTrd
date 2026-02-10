import React from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC] border-b border-[#D1D5DB] h-16 flex items-center px-4 md:px-8 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="w-32 h-8 bg-[#0B2545] flex items-center justify-center text-xs text-white font-mono font-bold tracking-wider">
          ДОНТРЕЙД
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm text-[#1F2933] font-medium">
          {["Главная", "О компании", "Услуги", "Топливо", "География", "Партнёрам", "Документы", "Контакты"].map((item) => (
            <a key={item} href="#" className="hover:text-[#E86F1F] hover:underline decoration-2 underline-offset-4 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-[#E86F1F] text-white text-sm font-bold hover:bg-[#d66215] transition-colors rounded-sm shadow-sm">
            Запросить КП
          </button>
          <button className="xl:hidden p-2 text-[#0B2545]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
