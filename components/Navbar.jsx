"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
// Add Clerk imports
import { useAuth, useUser, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  // ✅ FIXED: Get isSeller from context instead of local state
  const { isSeller, router, getCartCount } = useAppContext();
  // Add Clerk authentication
  const { isSignedIn, userId } = useAuth();
  const { user } = useUser();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ REMOVED: No need for local isSeller logic - context handles it

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
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-md'
      }`}>
        {/* Top notification bar */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 text-xs py-1.5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline">📞 WhatsApp: +52 55 1234 5678</span>
                <span className="hidden md:inline">📧 info@karunaelectronics.com</span>
              </div>
              <span className="text-xs">🚚 Envío gratis en compras mayores a $1,000 MXN</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src={assets.logo} 
                alt="Karuna Electronics" 
                width={120} 
                height={40}
                className="w-24 lg:w-32 h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Components Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 flex items-center">
                  Componentes
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {componentCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Search - Desktop */}
              <button 
                onClick={toggleSearch}
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 hover:border-yellow-400 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium">Buscar</span>
              </button>

              {/* Search - Mobile */}
              <button 
                onClick={toggleSearch}
                className="lg:hidden p-2 text-gray-600 hover:text-yellow-600 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button 
                onClick={() => router.push('/cart')}
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300 px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-500 shadow-md hover:shadow-lg relative group text-sm border-0"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                <span className="font-medium text-gray-800">Carrito</span>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                    {getCartCount()}
                  </span>
                )}
              </button>
              
              {/* Authentication Section */}
              {isSignedIn ? (
                <div className="flex items-center space-x-3">
                  {/* User info for desktop */}
                  <div className="hidden lg:flex items-center space-x-2">
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                          userButtonPopoverCard: "bg-white shadow-lg border border-gray-200",
                        }
                      }}
                    />
                    <div className="hidden lg:block">
                      <div className="text-sm font-medium text-gray-900">
                        Hola, {user?.firstName || 'Usuario'}
                      </div>
                      <div className="text-xs text-gray-500">Mi cuenta</div>
                    </div>
                  </div>

                  {/* Mobile user button */}
                  <div className="lg:hidden">
                    <UserButton />
                  </div>
                </div>
              ) : (
                /* Sign In Button */
                <SignInButton mode="modal">
                  <button className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 hover:border-yellow-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="whitespace-nowrap font-medium">Mi Cuenta</span>
                  </button>
                </SignInButton>
              )}

              {/* ✅ FIXED: Single Admin Panel Button */}
              {isSeller && (
                <button 
                  onClick={() => router.push('/seller')} 
                  className="hidden lg:flex text-xs bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-800 px-3 py-1.5 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Panel Admin
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-yellow-600 rounded-lg transition-colors duration-200"
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

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 bg-yellow-400 p-4">
            <form onSubmit={handleSearch} className="container mx-auto max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Busca componentes por número de parte, marca o descripción (ej: LM358, Arduino, Resistencia 1k)"
                  className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  autoFocus
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
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
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-yellow-400 to-yellow-500">
                <div className="text-gray-800">
                  <div className="font-bold text-lg">KARUNA</div>
                  <div className="text-xs text-gray-700">Electronics</div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-gray-800 hover:text-gray-600 rounded-lg"
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
                  {isSignedIn ? (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <UserButton />
                      <div className="text-left">
                        <div className="font-medium text-gray-900">
                          {user?.firstName || 'Usuario'}
                        </div>
                        <div className="text-sm text-gray-500">Mi cuenta</div>
                      </div>
                    </div>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="flex items-center space-x-3 w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="bg-yellow-500 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900">Mi Cuenta</div>
                          <div className="text-sm text-gray-500">Inicia sesión</div>
                        </div>
                      </button>
                    </SignInButton>
                  )}
                </div>

                {/* Cart Section */}
                <div className="p-4 border-b border-gray-200">
                  <button 
                    onClick={() => {
                      router.push('/cart');
                      toggleMenu();
                    }}
                    className="flex items-center justify-between w-full p-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z" />
                      </svg>
                      <span className="font-medium text-gray-800">Mi Carrito</span>
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
                      className="block px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200 font-medium"
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
                        className="block px-2 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>

                  {/* ✅ FIXED: Single Admin Panel for Mobile */}
                  {isSeller && (
                    <button 
                      onClick={() => {
                        router.push('/seller');
                        toggleMenu();
                      }}
                      className="block w-full text-left px-4 py-3 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200 font-medium border border-yellow-200"
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