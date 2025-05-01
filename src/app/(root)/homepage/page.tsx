import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action';
import {getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'

const page = async () => {
  const user = await getCurrentUser();

  if (!user?.id) {
    return <div className="flex items-center justify-center min-h-screen">
    <p className="text-red-500 text-center">User not found or not logged in.</p>
  </div>;
  }

  const [userInterviewsRaw, latestInterviewsRaw] = await Promise.all([
    getInterviewsByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  // fallback to empty arrays to avoid .length issues
  const userInterviews = userInterviewsRaw || [];
  const latestInterviews = latestInterviewsRaw || [];

  const hasPastInterviews = userInterviews.length > 0;
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get interview ready with AI-Powered Practice and Feedback</h2>
        <p className='text-lg'>
          Practice on real interview questions and get personalized instant feedback
        </p>
        <Button asChild className='btn-primary max-sm:w-full mt-5'>
          <Link href="/interview">Start an Interview
          </Link>

        </Button>
      </div>
      <Image src="/boy.png" alt="boy" width={450} height={450} className="max-sm:hidden" />

    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
        {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))) : (
              <p>
              You have not taken any interviews yet!
              </p>
            )}
          
      </div>

    </section>

    
    
    </>
  )
}

export default page;