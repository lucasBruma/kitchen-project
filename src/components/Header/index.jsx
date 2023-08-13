'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useEffect, useState} from 'react';
import { linksNav } from '../../constants/constants';


export function Header () {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bg = scrollTop > 0 ? 'bg-white/90' : 'bg-transparent';

  return (
    <header className={`flex justify-center items-center px-10 py-6 text-secondary ${bg} fixed w-full z-50 ease-in-out duration-300 h-[100px]`}>
        <div className='flex items-center gap-6 absolute w-full justify-center'>
            <span className='hover:cursor-pointer'>
              {/* <Image src="/hamburger-menu.svg" alt="hamburger-menu" width={30} height={30} className='hover:text-white ease-in-out duration-300' /> */}
            </span>
            <ul className='flex items-center list-style-none gap-8'>
                { 
                linksNav.map((link, index) => {
                    return (
                    <li key={index} className='hover:text-white ease-in-out duration-300 hover:bg-red-500 py-2 px-3'>
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                    )
                })} 
            </ul>
        </div>
        {/* <Image src='/hbo-logo2.png' alt="logo" width={130} height={20} className='hover:text-white ease-in-out duration-300' /> */}
    </header>

  )
}