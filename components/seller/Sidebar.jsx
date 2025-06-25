import React from 'react';
import Link from 'next/link';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname()
    const menuItems = [
        { 
            name: 'Componentes Electrónicos', 
            path: '/seller/componentes', 
            icon: assets.add_icon,
            description: 'Microcontroladores, OpAmps, Transistores'
        },
        { 
            name: 'Instrumentos Fluke', 
            path: '/seller/fluke', 
            icon: assets.product_list_icon,
            description: 'Equipos de medición profesional'
        },
        { 
            name: 'Diseño PCB', 
            path: '/seller/pcb-design', 
            icon: assets.order_icon,
            description: 'Servicios de diseño personalizado'
        },
        { 
            name: 'Pedidos', 
            path: '/seller/orders', 
            icon: assets.order_icon,
            description: 'Gestión de órdenes'
        },
        { 
            name: 'Inventario', 
            path: '/seller/inventory', 
            icon: assets.product_list_icon,
            description: 'Control de stock'
        }
    ];

    return (
        <div className='md:w-72 w-16 border-r min-h-screen text-base border-gray-300 py-4 flex flex-col bg-gray-50'>
            {/* Karuna Branding Header */}
            <div className="hidden md:block px-4 pb-6 border-b border-gray-200 mb-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">Panel Karuna</h2>
                <p className="text-xs text-gray-600">Soluciones Electrónicas</p>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link href={item.path} key={item.name} passHref>
                            <div
                                className={`
                                    flex items-start py-3 px-4 gap-3 mx-2 rounded-lg transition-all duration-200 group
                                    ${isActive
                                        ? "bg-yellow-100 border-l-4 border-yellow-500 text-gray-800 shadow-sm"
                                        : "hover:bg-blue-50 hover:border-l-4 hover:border-blue-300 text-gray-600 hover:text-gray-800"
                                    }
                                `}
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.name.toLowerCase()}_icon`}
                                        className={`w-6 h-6 transition-colors ${
                                            isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                                        }`}
                                    />
                                </div>
                                
                                <div className='md:block hidden flex-1'>
                                    <p className={`font-medium text-sm leading-tight ${
                                        isActive ? 'text-gray-800' : 'text-gray-700 group-hover:text-gray-800'
                                    }`}>
                                        {item.name}
                                    </p>
                                    <p className={`text-xs mt-1 leading-tight ${
                                        isActive ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
                                    }`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="hidden md:block p-4 mt-auto border-t border-gray-200">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 text-white">
                    <h3 className="font-semibold text-sm mb-1">¿Necesitas ayuda?</h3>
                    <p className="text-xs opacity-90 mb-2">Contacta a nuestro equipo técnico</p>
                    <button className="bg-white text-yellow-600 text-xs px-3 py-1 rounded-md font-medium hover:bg-gray-100 transition-colors">
                        Contactar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;