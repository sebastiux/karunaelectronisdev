import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
    const { currency, router } = useAppContext()

    const handleDatasheetClick = (e, datasheetUrl) => {
        e.stopPropagation(); // Prevent card click when clicking datasheet
        if (datasheetUrl) {
            window.open(datasheetUrl, '_blank');
        }
    }

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-2 max-w-[280px] w-full cursor-pointer bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-yellow-400"
        >
            {/* Product Image */}
            <div className="cursor-pointer group relative bg-gray-50 rounded-lg w-full h-48 flex items-center justify-center overflow-hidden">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition-transform duration-300 object-contain w-4/5 h-4/5"
                    width={800}
                    height={800}
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="Agregar a favoritos"
                    />
                </button>
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                    {product.category}
                </div>
            </div>

            {/* Product Info */}
            <div className="w-full space-y-2">
                {/* Part Number */}
                <p className="text-sm font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {product.partNumber}
                </p>
                
                {/* Product Name */}
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight">
                    {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                {/* Key Specifications */}
                {product.keySpecs && (
                    <div className="text-xs text-gray-500">
                        <span className="font-medium">Especificaciones: </span>
                        {product.keySpecs}
                    </div>
                )}

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className="h-3 w-3"
                                src={
                                    index < Math.floor(4.5)
                                        ? assets.star_icon
                                        : assets.star_dull_icon
                                }
                                alt="Calificación"
                            />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500">(4.5)</p>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between w-full pt-2 border-t border-gray-100">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold text-gray-900">
                            {currency}{product.offerPrice}
                        </p>
                        {product.price !== product.offerPrice && (
                            <p className="text-sm text-gray-500 line-through">
                                {currency}{product.price}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <button className="px-3 py-1.5 bg-yellow-500 text-white text-xs font-medium rounded-md hover:bg-yellow-600 transition-colors">
                            Comprar
                        </button>
                        {product.datasheet && (
                            <button
                                onClick={(e) => handleDatasheetClick(e, product.datasheet)}
                                className="px-3 py-1 border border-blue-300 text-blue-600 text-xs font-medium rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                Datasheet
                            </button>
                        )}
                    </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 pt-1">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-xs font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                        {product.inStock ? 'En stock' : 'Sin stock'}
                    </span>
                    {product.quantity && product.inStock && (
                        <span className="text-xs text-gray-500">
                            ({product.quantity} disponibles)
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard