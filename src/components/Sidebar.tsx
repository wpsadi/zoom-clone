"use client";
import { SidebarLinks } from '@/constants/SidebarLinks'
import { cn } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
    const pathname = usePathname()
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      
        <div className="flex flex-col gap-6">
            {
                SidebarLinks.map((link,index)=>{
                    const isActive = pathname.toString() === link.route || pathname.toString().startsWith(link.route)

                    return (<>
                    <Link 
                    href={link.route}
                    key={index+1}
                    className={cn("flex gap-4 items-center p-4 rounded-lg justify-start",{
                        "bg-blue-1":isActive
                    })}
                    >
                        {link.providedImg == "component" ? <link.Img/> :<Image height={24} width={24} src={link.Img as string} alt={link.label}/>}
                        <p className="text-lg font-semibold max-lg:hidden">
                        {link.label}

                        </p>
                
                    
                    </Link>
                    </>)

                })
            }
        </div>
    </section>
  )
}

export default Sidebar