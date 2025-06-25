import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Electrónica de Audio Profesional - ¡Diseño de espacios HI-FI, instalación, venta y reparaciones!",
      offer: "Amplificadores, DACs, Preamplificadores y Más",
      buttonText1: "Ver más",
      buttonText2: "Consultar",
      imgSrc: assets.audioelectronics, // You'll need to add this asset
      bgColor: "bg-gradient-to-r from-yellow-50 to-blue-50",
      featured: true, // Mark as featured since it's most important
    },
    {
      id: 2,
      title: "Instrumentos Fluke de Precisión - ¡La Calidad que Necesitas!",
      offer: "Oferta Especial - Envío Gratis",
      buttonText1: "Ver Catálogo",
      buttonText2: "Cotizar Ahora",
      imgSrc: assets.flukenicebanner,
      bgColor: "bg-gradient-to-r from-blue-50 to-gray-50",
    },
    {
      id: 3,
      title: "Componentes Electrónicos para Universidades e Industria",
      offer: "Microcontroladores, OpAmps, Transistores y Más",
      buttonText1: "Explorar",
      buttonText2: "Contactar",
      imgSrc: assets.components,
      bgColor: "bg-gradient-to-r from-gray-50 to-yellow-50",
    },
    {
      id: 4,
      title: "Diseño de PCB Profesional - Equipo Karuna",
      offer: "Consultoría Especializada en Proyectos",
      buttonText1: "Solicitar",
      buttonText2: "Más Info",
      imgSrc: assets.pcbdesign,
      bgColor: "bg-gradient-to-r from-yellow-50 to-gray-50",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4500); // Slightly longer interval for 4 slides
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex flex-col-reverse md:flex-row items-center justify-between ${slide.bgColor} py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full border border-gray-200 shadow-sm ${
              slide.featured ? 'ring-2 ring-yellow-400/50' : ''
            }`}
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <p className="md:text-base text-yellow-600 pb-1 font-medium">
                  {slide.offer}
                </p>
                {slide.featured && (
                  <span className="bg-yellow-500 text-gray-800 text-xs px-2 py-1 rounded-full font-semibold">
                    DESTACADO
                  </span>
                )}
              </div>
              <h1 className="max-w-lg md:text-[36px] md:leading-[44px] text-2xl font-bold text-gray-800">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 gap-3">
                <button className={`md:px-8 px-6 md:py-3 py-2 ${
                  slide.featured 
                    ? 'bg-yellow-500 hover:bg-yellow-600 ring-2 ring-yellow-400/30' 
                    : 'bg-yellow-500 hover:bg-yellow-600'
                } rounded-lg text-gray-800 font-semibold transition-all duration-200 shadow-md transform hover:scale-105`}>
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-4 py-2.5 font-medium text-blue-700 hover:text-blue-800 transition-colors">
                  {slide.buttonText2}
                  <Image 
                    className="group-hover:translate-x-1 transition-transform" 
                    src={assets.arrow_icon} 
                    alt="arrow_icon" 
                  />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>
                  {slide.id === 1 ? 'Especialistas en Audio' : 
                   slide.id === 2 ? 'Distribuidor Autorizado' : 
                   slide.id === 3 ? 'Componentes Originales' : 
                   'Equipo Profesional'}
                </span>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <div className="relative">
                <div className={`absolute inset-0 ${
                  slide.featured 
                    ? 'bg-gradient-to-r from-yellow-400/30 to-blue-400/30' 
                    : 'bg-gradient-to-r from-yellow-400/20 to-blue-400/20'
                } rounded-full blur-xl`}></div>
                <Image
                  className="relative md:w-80 w-56 drop-shadow-lg"
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        {sliderData.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? slide.featured
                  ? "bg-yellow-500 scale-125 ring-2 ring-yellow-400/50" 
                  : "bg-yellow-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;