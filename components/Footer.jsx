import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-300 text-gray-600">
        <div className="w-full md:w-2/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="Karuna logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Karuna es tu socio confiable en componentes electrónicos de alta calidad. 
            Ofrecemos microcontroladores, amplificadores operacionales, circuitos integrados, 
            transistores, componentes de audio profesional e instrumentos Fluke para universidades 
            y desarrollos industriales. Nuestro equipo también brinda servicios profesionales de 
            diseño de PCB y proyectos electrónicos especializados.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/5 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-gray-800 mb-5 text-yellow-600">Productos</h2>
            <ul className="text-sm space-y-3">
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Microcontroladores
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Amplificadores Op
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Audio Electrónica
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Circuitos Integrados
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Instrumentos Fluke
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-600 hover:underline transition duration-200" href="#">
                  Transistores
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/5 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-gray-800 mb-5 text-blue-600">Servicios</h2>
            <ul className="text-sm space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline transition duration-200" href="#">
                  Diseño de PCB
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline transition duration-200" href="#">
                  Proyectos Electrónicos
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline transition duration-200" href="#">
                  Diseño Ambiental Sonoro
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline transition duration-200" href="#">
                  Consultoría Técnica
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline transition duration-200" href="#">
                  Soporte Universitario
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/5 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-gray-800 mb-5 text-gray-700">Empresa</h2>
            <ul className="text-sm space-y-3 mb-6">
              <li>
                <a className="hover:text-gray-800 hover:underline transition duration-200" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800 hover:underline transition duration-200" href="#">
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800 hover:underline transition duration-200" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Contacto</h3>
              <div className="text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-yellow-600">📞</span>
                  +52-72-0253-3388
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-600">✉️</span>
                  ventas@karuna.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            Copyright 2025 © <span className="text-yellow-600 font-medium">Karuna Electronics</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span className="text-xs text-gray-400">🇲🇽</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-500">Envíos a toda la República</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;