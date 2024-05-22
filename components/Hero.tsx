import React from 'react';
import Link from 'next/link';
const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center p-8' style={{ direction: 'rtl' }}>
            <div className="image md:order-2 mb-8 md:mb-0">
                <img src="/images/png/Camera-amico.PNG" alt="" className='w-[300px] md:w-[350px] rounded-lg shadow-lg mx-auto' />
            </div>
            <div className="texts text-center md:text-right md:flex-1 md:order-1">
                <h1 className="text-white text-3xl text-[25px] lg:text-[50px] leading-none mb-12 ">سدرة للتصوير الفوتوغرافي</h1>
                <div className="text text-white lg:w-[500px]">
                    <p className='' > استديو سدرة متخصصة في تقديم خدمات التصوير للأعراس والحفلات، بالإضافة إلى خدمات التصميم والتسويق. تسعى سدرة إلى توفير تجربة مميزة وفريدة لعملائها من خلال دمج الاحترافية والإبداع في خدماتها. إليك نبذة مختصرة عن خدمات سدرة </p>
                </div>
                <div className="link  mt-5">
                    <Link href="#hero" className='btn py-3 px-6'> تواصل معنا </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
