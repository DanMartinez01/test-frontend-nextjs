import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Sidebar: React.FC = () => {
    return (
        <div className='w-1/4 flex flex-col bg-white-500 px-4 pt-12 pl-4 border-l-2 border-r-2 border-purple'>
            <div className='flex flex-row items-center px-2 mb-8'>
                <Image src="/Assets/iconcolor.png" alt='ratings' width={10} height={10} className='w-5 h-5' />
                <p className='hidden md:block ml-2 font-bold'>Escritorio</p>
            </div>
            <Button className='bg-purple w-8 h-8 md:w-auto lg:w-5/6 ml-1 md:ml-0 md:px-2 md:py-4 lg:px-2 lg:py-5 mb-8 rounded-full md:rounded-md flex justify-center md:justify-start items-center'>
                <Image src="/Assets/explore.png" alt='ratings' width={10} height={10} className='w-7 h-7' />
                <p className='hidden md:block ml-2 font-bold text-white-500'>Explorar</p>
            </Button>
            <div className='flex flex-row items-center px-2 mb-8'>
                <Image src="/Assets/Book.png" alt='ratings' width={10} height={10} className='w-7 h-7' />
                <p className='hidden md:block ml-2 font-bold'>Aprendizaje</p>
            </div>
            <div className='flex flex-row items-center px-2 mb-8'>
                <Image src="/Assets/settings.png" alt='ratings' width={10} height={10} className='w-7 h-7' />
                <p className='hidden md:block ml-2 font-bold'>Configurar</p>
            </div>
        </div>
    );
}

export default Sidebar;
