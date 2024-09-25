import { LucideProps } from 'lucide-react'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

const HomeCard = ({Icon,title,description,handleClick,className="bg-red-500"}:{
    Icon:(ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>),
    title:string,
    description:string,
    handleClick:()=>void,
    className?:string
}) => {
  return (
    <div className={` px-4 py-6 flex flex-1 flex-col justify-between w-full xl:max-w-[100%] min-h-[260px] rounded-[14px] coursor-pointer ${className}`} onClick={handleClick}>
    <div className="flex-center glassmorphism size-12 rounded-[10px]">
  <Icon className={"text-md"}/>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
      <p className="text-lg font-normal">
        {description}
      </p>
    </div>
  </div>
  )
}

export default HomeCard