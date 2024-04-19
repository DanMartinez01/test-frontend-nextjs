import React from 'react';
import Button from '@/components/Button';

const ErrorForzado: React.FC = () => {
    return (

        <div className='w-full  p-4 bg-slate-100'>
            <div className='h-screen flex flex-col justify-center items-center mt-auto'>
                <h1 className='text-black text-5xl font-bold mb-4 text-center'>Tuvimos un problema</h1>
                <p className='text-gray-200 text-sm text-center'>Estamos trabajando en resolverlo pronto, disculpe las molestias</p>
                <Button className='bg-purple text-white-500 px-6 py-2 rounded-md mt-10'>
                    Volver a intentar
                </Button>
            </div>
        </div>
    );
};

export default ErrorForzado;

