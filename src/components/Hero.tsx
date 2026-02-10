import React from "react";
import Slider from "react-slick";
import { Reveal } from "./ui/Reveal";

const slides = [
  {
    id: 1,
    // Oil Refinery / Industrial Plant
    image: "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max",
    title: "НАДЕЖНЫЕ ПОСТАВКИ НЕФТЕПРОДУКТОВ",
    subtitle: "Оптовая реализация топлива высшего качества для вашего бизнеса с гарантией соблюдения сроков."
  },
  {
    id: 2,
    // Fuel Tanker Truck
    image: "https://images.unsplash.com/photo-1761590542271-27a3518ab957?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max",
    title: "СЕТЬ НЕФТЕБАЗ ПО ВСЕЙ РОССИИ",
    subtitle: "Собственные терминалы хранения и развитая логистическая инфраструктура для бесперебойных поставок."
  },
  {
    id: 3,
    // Gas Station Pump
    image: "https://images.unsplash.com/photo-1764708969667-2d0e31372d14?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max",
    title: "СОВРЕМЕННЫЕ АЗС",
    subtitle: "Выгодные условия заправки для корпоративных клиентов и качественный сервис."
  }
];

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 bg-white/30 rounded-full hover:bg-[#E86F1F] transition-colors cursor-pointer" />
    ),
  };

  return (
    <section className="relative h-[600px] w-full bg-[#0B2545] text-white">
      {/* Inject minimal Slick CSS manually */}
      <style>{`
        .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
        .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0;height:100%;}
        .slick-list:focus{outline:0}
        .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto;height:100%;}
        .slick-track:before,.slick-track:after{display:table;content:''}
        .slick-track:after{clear:both}
        .slick-slide{display:none;float:left;height:100%;min-height:1px}
        .slick-initialized .slick-slide{display:block}
        
        .slick-dots {
          position: absolute;
          bottom: 25px;
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          z-index: 20;
        }
        .slick-dots li {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
        }
        .slick-dots li.slick-active div {
          background-color: #E86F1F;
          opacity: 1;
        }
      `}</style>

      {/* Background Slider */}
      <div className="absolute inset-0 z-0 h-full">
        <Slider {...settings} className="h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="outline-none h-[600px] w-full relative">
               {/* Image Background */}
               <div className="absolute inset-0">
                 <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.backgroundColor = '#1F2937'; // Fallback color
                    }}
                 />
                 {/* Lighter Gradient Overlay for Better Visibility */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#051326]/80 via-[#051326]/40 to-transparent" />
               </div>

               {/* Content */}
               <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
                 <div className="max-w-3xl space-y-8">
                    <Reveal>
                      <div className="border-l-4 border-[#E86F1F] pl-6 py-2">
                        <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight uppercase tracking-wide drop-shadow-md">
                          {slide.title}
                        </h1>
                      </div>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                      <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-sm font-medium">
                        {slide.subtitle}
                      </p>
                    </Reveal>
                    
                    <Reveal delay={0.4}>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-3 bg-[#E86F1F] text-white font-bold hover:bg-[#d66215] transition-colors rounded-sm shadow-lg hover:shadow-xl uppercase tracking-wider text-sm">
                          Узнать подробнее
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-[#0B2545] transition-colors rounded-sm uppercase tracking-wider text-sm bg-black/20 backdrop-blur-sm">
                          Связаться с нами
                        </button>
                      </div>
                    </Reveal>
                 </div>
               </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
