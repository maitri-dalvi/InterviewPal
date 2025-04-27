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
      <nav>
        <Link href="/" className='flex items-center gap-2'>
        <Image src="/alien.png" alt="Logo" width={39} height={33} />
        <h2 className='text-primary-100'>InterviewPal</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout;