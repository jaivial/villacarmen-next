import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import photo1 from '../../public/galeria/photo-1.png';
import photo2 from '../../public/galeria/photo-2.png';
import photo3 from '../../public/galeria/photo-3.png';
import photo4 from '../../public/galeria/photo-4.png';
import './HeaderSection.css';

const HeaderSection = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        duration: 1000,
        dragStart: () => { },
        dragEnd: () => { },
    });

    return (

        <div className="keen-slider w-full h-[500px] flex justify-start items-center" ref={sliderRef}>
            <div className="keen-slider__slide">
                <Image src={photo1} alt="Photo 1" className='h-[700px] object-cover' />
            </div>
            <div className="keen-slider__slide">
                <Image src={photo2} alt="Photo 2" className='h-[700px] object-cover' />
            </div>
            <div className="keen-slider__slide">
                <Image src={photo3} alt="Photo 3" className='h-[700px] object-cover' />
            </div>
            <div className="keen-slider__slide">
                <Image src={photo4} alt="Photo 4" className='h-[700px] object-cover' />
            </div>
        </div>

    );
};

export default HeaderSection;
