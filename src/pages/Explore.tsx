import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

export type Product = {
    id: string;
    title: string;
    vendor: string;
    imageUrl: string;
    price: number;
    ratings: Rating[];
    reviews: string;
};

export type Rating = {
    score: number;
    ratedBy: string;
};

const Explore: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/getAllProducts');
                const data = await res.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full flex justify-end'>
            <main className='w-full h-full bg-slate-100 pb-8 pl-6'>
                <div className='w-11/12 bg-gray-100 pl-8 mt-8 rounded-md py-16'>
                    <motion.h1
                        className='font-bold text-5xl mb-2'
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        El éxito está en el hábito
                    </motion.h1>
                    <p className='mb-8 text-gray-200'>Crea tu ruta de aprendizaje en DazCourse.</p>
                    <motion.button
                        className='bg-purple text-white-500 text-sm font-bold rounded-md px-6 py-3'
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        Explorar Ahora
                    </motion.button>
                </div>
                <div className='w-11/12 flex flex-row bg-white-500 p-3 rounded-md mt-6'>
                    <Image src="/Assets/search.png" width={10} height={10} alt='search' className='w-6 h-6' />
                    <p className='text-black ml-1'>UI UX Design</p>
                </div>
                <h1 className='text-black text-2xl font-bold mt-8'>Resultados</h1>
                <div className='w-10/12'>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Explore;
