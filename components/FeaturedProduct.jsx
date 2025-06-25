import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image, // This would be replaced with microcontroller/electronics image
    title: "Componentes Electrónicos",
    description: "Microcontroladores, amplificadores operacionales, transistores y circuitos integrados de alta calidad.",
    category: "components"
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image, // This would be replaced with Fluke instrument image
    title: "Instrumentos Fluke",
    description: "Equipos de medición profesional Fluke para aplicaciones industriales y de laboratorio.",
    category: "instruments"
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image, // This would be replaced with PCB design image
    title: "Diseño de PCB",
    description: "Servicios profesionales de diseño de circuitos impresos y desarrollo de proyectos electrónicos.",
    category: "design"
  },
];

const FeaturedProduct = () => {
  const getCategoryStyles = (category) => {
    switch (category) {
      case "components":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "instruments":
        return "bg-blue-600 hover:bg-blue-700";
      case "design":
        return "bg-gray-600 hover:bg-gray-700";
      default:
        return "bg-yellow-500 hover:bg-yellow-600";
    }
  };

  const getBackgroundGradient = (category) => {
    switch (category) {
      case "components":
        return "from-yellow-500/20 to-yellow-600/30";
      case "instruments":
        return "from-blue-500/20 to-blue-600/30";
      case "design":
        return "from-gray-500/20 to-gray-600/30";
      default:
        return "from-yellow-500/20 to-yellow-600/30";
    }
  };

  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-gray-800">Productos Destacados</p>
        <div className="w-32 h-0.5 bg-yellow-500 mt-2"></div>
        <p className="text-gray-600 mt-3 text-center max-w-2xl">
          Descubre nuestra selección de componentes electrónicos, instrumentos de medición 
          y servicios de diseño profesional para tus proyectos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description, category }) => (
          <div key={id} className="relative group overflow-hidden rounded-xl shadow-lg">
            {/* Background with gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundGradient(category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Image container */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="group-hover:scale-110 group-hover:brightness-75 transition duration-500 w-full h-full object-cover"
                width={400}
                height={320}
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl lg:text-2xl leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed opacity-90 line-clamp-3">
                    {description}
                  </p>
                  
                  {/* Button */}
                  <div className="pt-2">
                    {category === "design" ? (
                      <button className={`flex items-center gap-2 ${getCategoryStyles(category)} px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
                        Contactar Equipo
                        <Image 
                          className="h-3 w-3 brightness-0 invert" 
                          src={assets.redirect_icon} 
                          alt="Contacto" 
                        />
                      </button>
                    ) : (
                      <button className={`flex items-center gap-2 ${getCategoryStyles(category)} px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
                        Ver Productos
                        <Image 
                          className="h-3 w-3 brightness-0 invert" 
                          src={assets.redirect_icon} 
                          alt="Ver más" 
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryStyles(category)} shadow-md`}>
                {category === "components" && "Componentes"}
                {category === "instruments" && "Instrumentos"}
                {category === "design" && "Servicios"}
              </span>
            </div>

            {/* Hover border effect */}
            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-xl transition-all duration-300 pointer-events-none`}></div>
          </div>
        ))}
      </div>

      {/* Call to action section */}
      <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-blue-50 py-12 rounded-xl mx-4 md:mx-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Necesitas ayuda con tu proyecto?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestro equipo de ingenieros especializados está listo para ayudarte 
          con el diseño y desarrollo de tus proyectos electrónicos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg">
            Solicitar Cotización
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Conocer Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;