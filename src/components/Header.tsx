'use client'
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className='w-full h-20  flex items-center justify-between border-b-4 border-gray-100'>
            <div className='flex flex-row items-center ml-4 md:m-10 lg:ml-10'>
                <Image src="/Assets/group.png" width={20} height={20} alt='icon' className='w-6 h-6 ml-5 md:ml-6 lg:ml-6' />
                <p className='hidden md:block text-2xl line-height font-bold text-black ml-2 md:ml-10 lg:ml-10'>DazCourse</p>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row mx-auto md:mr-40 items-center'>
                    <Image src="/Assets/Favorite.png" width={20} height={20} className='w-6 h-6 mx-4' alt="favorite" />
                    <Image src="/Assets/Bell.png" width={20} height={20} className='w-14 h-14 mx-4' alt='notifications' />
                </div>
                <div className='flex flex-row mr-4 md:mr-16 items-center'>
                    <div className='bg-gray-500 rounded-full w-12 h-12 mr-2'></div>
                    <div className='flex flex-col items-start hidden md:block'>
                        <p className='text-black font-bold text-base'>Alfred Sinaga</p>
                        <p className='text-gray-500 text-xs'>alfreds@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

