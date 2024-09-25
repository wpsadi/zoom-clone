import { Bitcoin, LucideProps } from 'lucide-react'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
  

interface MeetingCardProps {
    isOpen:boolean,
    onClose:()=>void,
    title:string,
    className?:string,
    children?:React.ReactNode
    buttonText?:string,
    BtnIcon?:(ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>),
   image?:string
    handleClick?:()=>void
  }

const MeetingModal = ({
    isOpen,
    onClose,
    title,
    children,
    
    handleClick,
    buttonText,image,BtnIcon,
    className=""
    
}:MeetingCardProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
      <div className="flex flex-col gap-6">
        {image && (
          <div className="flex justify-center">
            <Image src={image} alt="checked" width={72} height={72} />
          </div>
        )}
        <DialogTitle className={cn("text-3xl font-bold leading-[42px]", className)}>
          {title}
        </DialogTitle>
        {children}
        <Button
          className={
            "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-3 text-lg"
          }
          onClick={handleClick}
        >
          {BtnIcon && (
            // <Image
            //   src={BtnIcon}
            //   alt="button icon"
            //   width={13}
            //   height={13}
            // />
            <BtnIcon className='text-sm '/>
          )}{" "}
          &nbsp;
          <span className="font-bold text-7xl lg:text-9xl"></span>
          {buttonText || "Schedule Meeting"}
        </Button>
      </div>
    </DialogContent>
  </Dialog>

  )
}

export default MeetingModal