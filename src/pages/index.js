'use client';
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import { useEffect, useState, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import HeaderSection from '../components/HeaderSection';
import '../components/herosection.css';
import '../components/HeaderSection.css';

export default function Home() {

    return (
        <main className="bg-red-400 w-full flex flex-col items-center justify-center p-0">
            <div className="bg-gray-200 w-full">
                <div className='divmoveup h-dvh'>
                    <HeroSection />
                </div>
                <div className="header-fade-in">
                    <HeaderSection />
                </div>
            </div >
        </main>
    );
}