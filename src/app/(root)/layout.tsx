import Link from 'next/link'
import {ReactNode} from 'react'
import Image from 'next/image'
import { redirect } from "next/navigation";
import { isAuthenticated } from '@/lib/actions/auth.action';

const RootLayout = async ({ children } : { children: ReactNode }) => {
  // const RootLayout = async ({ children }: { children: ReactNode }) => {
  //   const isUserAuthenticated = await isAuthenticated();
  //   if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className='root-layout'>
      <nav className='flex justify-between items-center px-4 py-2'>
        {/* Left Side - Logo */}
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/alien.png" alt="Logo" width={39} height={33} />
          <h2 className='text-primary-100'>InterviewPal</h2>
        </Link>
        <div>
          <Image
            src="/user-avatar.png" 
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover border-2 border-primary-100 hover:opacity-90 transition"
          />
        </div>
      </nav>
      {children}
    </div>
  )
  
}

export default RootLayout;