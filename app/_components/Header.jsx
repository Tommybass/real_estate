"use client"
// import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import { Button } from "@nextui-org/button";
import { UserButton, useUser } from '@clerk/nextjs';

function Header() {
    const path=usePathname();
    const {user, isSignedIn}=useUser();

    useEffect(()=>{
        console.log(path)


    }, [])
  return (
    <div className='flex justify-between p-2 px-10 shadow-sm fixed top-0 w-full z-10 bg-white'>
        <div className='flex gap-12 items-center'>
            <Image src={'./logo.svg'} width={150}
            height={150} alt='logo'/>
            <ul className='hidden md:flex gap-10'>
                <Link href={'/'}>
                <li className={`'hover:text-primary font-medium text-sm cursor-pointer  ${path=='/'&&'text-primary'}`}>For Sale</li>
                </Link>
                <li className='hover:text-primary font-medium text-sm cursor-pointer'>For Rent</li>
                <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
            </ul>
        </div>
        <div className='flex gap-2 items-center'>
            <Button color="primary" className="flex gap-2 " radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"><Plus className='h-5 w-5'/>Post Your Ad</Button>
            {isSignedIn ?
             <UserButton/>
             :
            <Link href={'./sign-in'}>
                <Button color="primary" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Login</Button>
            </Link>
            }
            
            {/* <Button variant="outline" className="flex gap-2"><Plus className='h-5 w-5'/>Post Your Ad</Button>
            <Button variant="outline">Login</Button> */}
        </div>
    </div>
  )
}

export default Header;