import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logoBlanco.png'; // Adjust the path to your logo image
import '../app/globals.css';
import '../components/herosection.css';
import flowers from '../../public/d551b92a-3028-4fb2-ab09-1faf45d3bda1.png';
import flowers2 from '../../public/f1843d91-4c02-4115-82aa-41eff2647533.png';
import flowers3 from '../../public/flowers3.png';
import flowerscentral1 from '../../public/flowerscentral.png';
const images = [
    '/galeria/photo-1.png', // Adjust the paths to your images
    '/galeria/photo-2.png',
    '/galeria/photo-3.png',
];

console.log(images);
const HeroSection = () => {


    return (
        <div>
            <div className='w-full h-dvh bg-[#004E52] flex justify-center items-center relative overflow-hidden overflow-y-hidden'>
                <div>
                    <Image src={logo} alt="logo" width={250} height={100} className=' self-center logo-fade-in z-10' />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
