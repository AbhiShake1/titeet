"use client"

import { TNavigationMenu } from "@car/ui";
import React from "react";
// import { useAuth, UserButton } from "@clerk/nextjs"

export function NavBar() {
  // const { isSignedIn } = useAuth()

  return <nav
    className='flex flex-row items-center justify-center py-4 w-full sticky top-0 z-[999] border-b backdrop-blur-[4px] shadow-lg shadow-black'>
    <TNavigationMenu />
    <div className='fixed right-16'>
      {
        // isSignedIn && <UserButton afterSignOutUrl='/' />
      }
    </div>
    {/*<TDarkModeToggle className='fixed right-36'/>*/}
  </nav>
}
