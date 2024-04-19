import React from 'react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

const Custom404: React.FC = () => {
    return (
        <Layout>
            <div className='w-full  p-4 bg-slate-100'>
                <div className='h-screen flex flex-col justify-center items-center mt-auto'>
                    <h1 className='text-black text-5xl font-bold mb-4 text-center'>Esta página no existe</h1>
                    <p className='text-gray-200 text-sm text-center'>La url ingresada no es correcta</p>
                    <Button className='bg-purple text-white-500 px-6 py-2 rounded-md mt-10'>
                        Volver
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Custom404;

