import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/icons/logo.svg"
import MobileNav from './MobileNav'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
function Navbar() {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex place-items-center">
        <Logo className={" max-sm:size-10"} />
        <p className="text-[26px] font-extrabold text-white ">Doom</p>
      </Link>


      <div className="flex flex-between gap-5">
        {/* Clerk management */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>



        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar