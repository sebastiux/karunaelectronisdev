import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {

  const { currency, router, getCartCount, getCartAmount } = useAppContext()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {

  }

  useEffect(() => {
    fetchUserAddresses();
  }, [])

  return (
    <div className="w-full md:w-96 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="border-b-2 border-yellow-400 pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-gray-800 text-sm font-bold">K</span>
          </div>
          Resumen del Pedido
        </h2>
        <p className="text-sm text-gray-600 mt-1">Componentes Electrónicos Karuna</p>
      </div>

      <div className="space-y-6">
        {/* Address Selection */}
        <div>
          <label className="text-base font-semibold uppercase text-gray-700 block mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Dirección de Envío
          </label>
          <div className="relative inline-block w-full text-sm">
            <button
              className="w-full text-left px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 hover:border-yellow-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-sm">
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Seleccionar Dirección"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"} text-blue-600`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border-2 border-gray-200 rounded-lg shadow-xl mt-2 z-10 py-2 max-h-48 overflow-y-auto">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 hover:bg-yellow-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                    onClick={() => handleAddressSelect(address)}
                  >
                    <div className="font-medium text-gray-800">{address.fullName}</div>
                    <div className="text-gray-600">{address.area}, {address.city}, {address.state}</div>
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-center text-blue-600 font-medium border-t-2 border-blue-100"
                >
                  + Agregar Nueva Dirección
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <label className="text-base font-semibold uppercase text-gray-700 block mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
            </svg>
            Código Promocional
          </label>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Ingresa tu código promocional"
              className="w-full outline-none px-4 py-3 text-gray-700 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-200"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-md">
              Aplicar Descuento
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            Detalles del Pedido
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Productos ({getCartCount()})
              </span>
              <span className="font-medium text-gray-800">{currency}{getCartAmount()}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Envío
              </span>
              <span className="font-medium text-green-600">Gratis</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                IVA (16%)
              </span>
              <span className="font-medium text-gray-800">{currency}{Math.floor(getCartAmount() * 0.16)}</span>
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t-2 border-yellow-400">
              <span className="text-lg font-bold text-gray-800">Total</span>
              <span className="text-xl font-bold text-gray-800">{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.16)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button 
        onClick={createOrder} 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 mt-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 11-4 0v-5m4 0V8a2 2 0 10-4 0v5"/>
        </svg>
        Realizar Pedido
      </button>

      {/* Security Badge */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        Compra 100% Segura • Karuna Electronics
      </div>
    </div>
  );
};

export default OrderSummary;