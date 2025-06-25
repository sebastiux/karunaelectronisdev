"use client"
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Product = () => {
    const { id } = useParams();
    const { products, router, addToCart } = useAppContext()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (<>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden bg-karuna-gray-50 mb-4 border border-karuna-gray-200">
                        <Image
                            src={mainImage || productData.image[0]}
                            alt="alt"
                            className="w-full h-auto object-cover"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {productData.image.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg overflow-hidden bg-karuna-gray-50 border border-karuna-gray-200 hover:border-karuna-yellow-500 transition-colors"
                            >
                                <Image
                                    src={image}
                                    alt="alt"
                                    className="w-full h-auto object-cover"
                                    width={1280}
                                    height={720}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-karuna-gray-900 mb-4">
                        {productData.name}
                    </h1>
                    
                    {/* Rating con estrellas */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, index) => (
                                <svg 
                                    key={index}
                                    className={`w-5 h-5 ${index < 4 ? 'text-karuna-yellow-500' : 'text-karuna-gray-300'}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-karuna-gray-600 font-medium">(4.5)</span>
                    </div>

                    <div className="mb-6">
                        <p className="text-karuna-gray-700 text-base leading-relaxed">
                            {productData.description}
                        </p>
                    </div>

                    {/* Precio */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-karuna-gray-900">
                                ${productData.offerPrice}
                            </span>
                            <span className="text-xl text-karuna-gray-500 line-through">
                                ${productData.price}
                            </span>
                            <span className="px-2 py-1 bg-karuna-yellow-100 text-karuna-yellow-800 text-sm font-medium rounded">
                                {Math.round(((productData.price - productData.offerPrice) / productData.price) * 100)}% OFF
                            </span>
                        </div>
                    </div>

                    <hr className="border-karuna-gray-200 my-6" />

                    {/* Especificaciones */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-karuna-gray-900 mb-4">Especificaciones</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between py-2 border-b border-karuna-gray-100">
                                <span className="text-karuna-gray-600 font-medium">Marca</span>
                                <span className="text-karuna-gray-900">Generic</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-karuna-gray-100">
                                <span className="text-karuna-gray-600 font-medium">Color</span>
                                <span className="text-karuna-gray-900">Multi</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-karuna-gray-100">
                                <span className="text-karuna-gray-600 font-medium">Categoría</span>
                                <span className="text-karuna-gray-900">{productData.category}</span>
                            </div>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex items-center gap-4 mb-8">
                        <button 
                            onClick={() => addToCart(productData._id)} 
                            className="flex-1 py-4 px-6 bg-white border-2 border-karuna-gray-300 text-karuna-gray-700 font-semibold rounded-lg hover:border-karuna-yellow-500 hover:text-karuna-yellow-600 transition-all duration-200"
                        >
                            Agregar al Carrito
                        </button>
                        <button 
                            onClick={() => { addToCart(productData._id); router.push('/cart') }} 
                            className="flex-1 py-4 px-6 bg-karuna-yellow-500 text-white font-semibold rounded-lg hover:bg-karuna-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Comprar Ahora
                        </button>
                    </div>

                    {/* Información adicional */}
                    <div className="bg-karuna-blue-50 border border-karuna-blue-200 rounded-lg p-6">
                        <h4 className="text-karuna-blue-800 font-semibold mb-3">Información de Envío</h4>
                        <div className="space-y-2 text-sm text-karuna-blue-700">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Envío gratis en compras mayores a $500</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Entrega en 2-3 días hábiles</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Garantía de 30 días</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos relacionados */}
            <div className="pt-16">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-3xl font-bold text-karuna-gray-900 mb-4">
                        Productos <span className="text-karuna-yellow-600">Relacionados</span>
                    </h2>
                    <div className="w-24 h-1 bg-karuna-yellow-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
                    {products.slice(0, 5).map((product, index) => 
                        <ProductCard key={index} product={product} />
                    )}
                </div>
                <div className="text-center">
                    <button 
                        onClick={() => router.push('/all-products')}
                        className="px-8 py-3 border-2 border-karuna-gray-300 text-karuna-gray-700 font-medium rounded-lg hover:border-karuna-yellow-500 hover:text-karuna-yellow-600 transition-all duration-200"
                    >
                        Ver más productos
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </>
    ) : <Loading />
};

export default Product;