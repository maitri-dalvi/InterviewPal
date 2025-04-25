import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '../../../constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
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
      {dummyInterviews.map((interview) => (
          <InterviewCard {...interview}/>
        ))}

      </div>

    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interview</h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))}

      </div>

    </section>
    
    </>
  )
}

export default page