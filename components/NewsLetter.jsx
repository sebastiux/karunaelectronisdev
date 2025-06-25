import React, { useState, useEffect } from "react";

const AudioProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const spaces = [
    {
      id: 1,
      title: "Residencial",
      subtitle: "Hogares Inteligentes",
      description: "Sistemas de audio para hogares con control inteligente, múltiples zonas y integración domótica completa.",
      features: ["Control por voz", "Múltiples zonas", "Streaming inalámbrico", "Automatización"],
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Restaurantes",
      subtitle: "Experiencia Gastronómica",
      description: "Ambientación perfecta que complementa la experiencia culinaria con sistemas de audio zonificados.",
      features: ["Control automático", "Múltiples ambientes", "Programación horaria", "Integración total"],
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Museos",
      subtitle: "Espacios Culturales",
      description: "Sistemas especializados para galerías y espacios educativos con audio direccional y guías integradas.",
      features: ["Audio direccional", "Guías interactivas", "Control independiente", "Diseño discreto"],
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          {/* Museum building base */}
          <path d="M2 20h20v2H2v-2z"/>
          {/* Museum building */}
          <path d="M4 18h16v-8H4v8z"/>
          {/* Roof triangle */}
          <path d="M12 2l10 6v2H2V8l10-6z"/>
          {/* Columns */}
          <rect x="6" y="10" width="1" height="8" fill="white" fillOpacity="0.3"/>
          <rect x="9" y="10" width="1" height="8" fill="white" fillOpacity="0.3"/>
          <rect x="14" y="10" width="1" height="8" fill="white" fillOpacity="0.3"/>
          <rect x="17" y="10" width="1" height="8" fill="white" fillOpacity="0.3"/>
          {/* Entrance */}
          <rect x="11" y="14" width="2" height="4" fill="white" fillOpacity="0.4"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Salas de Música",
      subtitle: "Entretenimiento Premium",
      description: "Diseño acústico profesional para venues, teatros y espacios de entretenimiento de alta calidad.",
      features: ["Acústica profesional", "Alta fidelidad", "Control avanzado", "Calibración experta"],
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      )
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spaces.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [spaces.length]);

  return (
    <div className="bg-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Diseño de Ambientación <span className="font-medium text-yellow-500">Sonora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Creamos experiencias auditivas únicas para cada espacio. Transformamos ambientes 
            a través del diseño e instalación de sistemas de audio profesionales.
          </p>
        </div>

        {/* Modern Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {spaces.map((space, index) => (
                <div
                  key={space.id}
                  className={`min-w-full ${space.bgColor} p-12 md:p-16`}
                >
                  <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className="space-y-8">
                        <div>
                          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">
                            {space.subtitle}
                          </p>
                          <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                            {space.title}
                          </h3>
                          <p className="text-xl text-gray-600 leading-relaxed font-light">
                            {space.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4">
                          {space.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Icon/Visual */}
                      <div className="flex justify-center">
                        <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${space.color} flex items-center justify-center shadow-2xl`}>
                          {space.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {spaces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-yellow-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              ¿Listo para transformar tu espacio?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
              Nuestro equipo especializado puede diseñar la solución de audio perfecta para tu proyecto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-10 py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Solicitar Consulta
              </button>
              
              <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-medium px-10 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioProjects;