
"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router, getCartCount } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const componentCategories = [
    { href: '/components/microcontrollers', label: 'Microcontroladores y MCUs' },
    { href: '/components/integrated-circuits', label: 'Circuitos Integrados' },
    { href: '/components/transistors', label: 'Transistores y Semiconductores' },
    { href: '/components/passive', label: 'Componentes Pasivos' },
    { href: '/components/sensors', label: 'Sensores y Módulos' },
    { href: '/components/opamps', label: 'Amplificadores Operacionales' },
    { href: '/components/power', label: 'Reguladores de Potencia' }
  ];

  const mainNavLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/all-products', label: 'Todos los Productos' },
    { href: '/fluke-instruments', label: 'Instrumentos Fluke' },
    { href: '/pcb-design', label: 'Diseño PCB' },
    { href: '/about', label: 'Audio' },
    { href: '/contact', label: 'Contacto' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}>
        
        {/* Enhanced Search Bar in Top Yellow Bar - Desktop Only */}
        <div className="hidden lg:block bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-400">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="relative group">
              <div className="relative bg-white/95 backdrop-blur rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Busca componentes por número de parte, marca o descripción (ej: LM358, Arduino, Resistencia 1k)"
                  className="w-full px-5 py-3 pr-14 bg-transparent border-0 rounded-xl focus:outline-none text-gray-900 placeholder-gray-600 font-medium text-base"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Search Suggestions Dropdown */}
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-yellow-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Búsquedas populares</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Componentes</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-200 transition-colors">Arduino UNO</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-200 transition-colors">ESP32</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-200 transition-colors">LM358</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-200 transition-colors">NE555</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Instrumentos Fluke</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition-colors">Multímetros</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition-colors">Osciloscopios</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition-colors">Pinzas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 border-b border-gray-200">
          <div className="flex justify-between items-center h-14 lg:h-16">
            
            {/* Logo Section */}
            <div 
              className="cursor-pointer flex-shrink-0"
              onClick={() => router.push('/')}
            >
              <Image
                className="w-32 md:w-36 lg:w-40 transition-transform hover:scale-105 duration-300"
                src={assets.logo}
                alt="Karuna Electronics Logo"
              />
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden lg:flex items-center justify-between space-x-4 px-2 ml-8">
              {mainNavLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium whitespace-nowrap relative group text-sm"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Enhanced Components Dropdown */}
              <div className="relative group">
                <Link 
                  href="/components" 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium flex items-center gap-1 whitespace-nowrap group text-sm"
                >
                  Componentes
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-yellow-50 to-amber-50 shadow-2xl border border-yellow-200 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 px-4 py-2 rounded-lg mb-4">
                      <div className="text-sm font-bold uppercase tracking-wide">⚡ Categorías de Componentes</div>
                    </div>
                    <div className="grid gap-1">
                      {componentCategories.map((category) => (
                        <Link 
                          key={category.href}
                          href={category.href} 
                          className="block px-4 py-3 text-gray-700 hover:bg-white/60 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-yellow-200"
                        >
                          {category.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {mainNavLinks.slice(2).map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium whitespace-nowrap relative group text-sm"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Button */}
              <button
                onClick={toggleSearch}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Smaller Cart Button */}
              <button 
                onClick={() => router.push('/cart')}
                className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-gray-900 px-3 py-1.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg relative group text-sm"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                <span className="font-medium">Carrito</span>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                    {getCartCount()}
                  </span>
                )}
              </button>
              
              {/* Account Button */}
              <button className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 hover:border-yellow-200 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="whitespace-nowrap font-medium">Mi Cuenta</span>
              </button>

              {/* Admin Panel Button - Last Position */}
              {isSeller && (
                <button 
                  onClick={() => router.push('/seller')} 
                  className="hidden lg:flex text-xs bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Panel Admin
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-gradient-to-r from-yellow-50 to-amber-50">
            <div className="px-6 py-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar componentes, instrumentos..."
                  className="w-full px-4 py-3 pr-12 bg-white border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 transition-colors p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="text-white">
                  <div className="font-bold text-lg">KARUNA</div>
                  <div className="text-xs text-blue-100">Electronics</div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-white hover:text-blue-200 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto">
                {/* User Section */}
                <div className="p-4 border-b border-gray-200">
                  <button className="flex items-center space-x-3 w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Mi Cuenta</div>
                      <div className="text-sm text-gray-500">Inicia sesión</div>
                    </div>
                  </button>
                </div>

                {/* Cart Section */}
                <div className="p-4 border-b border-gray-200">
                  <button 
                    onClick={() => {
                      router.push('/cart');
                      toggleMenu();
                    }}
                    className="flex items-center justify-between w-full p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z" />
                      </svg>
                      <span className="font-medium text-gray-900">Mi Carrito</span>
                    </div>
                    {getCartCount() > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                        {getCartCount()}
                      </span>
                    )}
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="p-4 space-y-2">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  {/* Components Submenu */}
                  <div className="px-4 py-2">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Componentes
                    </div>
                    {componentCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-2 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>

                  {isSeller && (
                    <button 
                      onClick={() => {
                        router.push('/seller');
                        toggleMenu();
                      }}
                      className="block w-full text-left px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium border border-blue-200"
                    >
                      Panel Admin
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-32"></div>
    </>
  );
};

export default Navbar;
