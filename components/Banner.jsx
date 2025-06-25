import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-gradient-to-br from-gray-50 to-gray-100 my-16 rounded-xl overflow-hidden border border-gray-200">
      {assets.instrumentationfluke && (
        <Image
          className="max-w-56 drop-shadow-lg"
          src={assets.fluketools}
          alt="Instrumentos Profesionales Fluke"
        />
      )}
      <div className="flex flex-col items-center justify-center text-center space-y-3 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold max-w-[320px] text-gray-800">
          Electrónica e Instrumentación Profesional
        </h2>
        <p className="max-w-[380px] font-medium text-gray-600 leading-relaxed">
          Desde instrumentos Fluke de precisión hasta componentes de grado industrial—todo lo que necesitas para desarrollo profesional
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="group flex items-center justify-center gap-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-gray-900 font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Comprar Instrumentos
            {assets.arrow_icon && (
              <Image className="group-hover:translate-x-1 transition-transform" src={assets.arrow_icon} alt="flecha" />
            )}
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300">
            Ver Componentes
          </button>
        </div>
      </div>
      {assets.transistor && (
        <Image
          className="hidden md:block max-w-80 drop-shadow-lg"
          src={assets.transistor}
          alt="Componentes Electrónicos - Transistores"
        />
      )}
      {assets.capacitor && (
        <Image
          className="md:hidden max-w-48 drop-shadow-lg mt-6"
          src={assets.capacitor}
          alt="Componentes Electrónicos - Capacitores"
        />
      )}
    </div>
  );
};

export default Banner;