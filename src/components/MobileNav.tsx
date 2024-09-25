"use client";
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/assets/icons/hamburger.svg";
import Link from 'next/link';
import Logo from "@/assets/icons/logo.svg";
import { usePathname } from 'next/navigation';
import { SidebarLinks } from '@/constants/SidebarLinks';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Hamburger className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex">
            <Logo className="max-sm:size-10" />
            <p className="text-[26px] font-extrabold text-white">Doom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {SidebarLinks.map((link) => {
                  const isActive = pathname.toString() === link.route || pathname.toString().startsWith(link.route);

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        {link.providedImg == "component" ? (
                          <link.Img />
                        ) : (
                          <Image height={24} width={24} src={link.Img as string} alt={link.label} />
                        )}
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
