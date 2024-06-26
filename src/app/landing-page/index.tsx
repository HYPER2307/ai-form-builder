import React from 'react'
import FormGenerator from '../form-generator'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <>
      <section className='mb-8 flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url("/ttten.svg")] bg-no-repeat bg-cover'>
        <h1 className='text-4xl font-bolt text-center tracking-tighter sm:text-5xl md:text-6xl leading-6'>
          Create your forms <br />in seconds not hours
        </h1>

        <p className='max-w-[600px] mt-4 text-center text-gray-300 md:text-xl'>
          Generate, publish and share your form right away with AI. Dive into insightful results, charts and analytics.
        </p>

        <FormGenerator />
        <div className='w-full bg-gradient-to-b from-transparent to-[#0e0915] h-24'></div>
      </section>
      <section className='text-center w-full mb-10'>
        <h2 className='mb-8 font-bold text-5xl'>
          How it works
        </h2>

        <ul className='flex justify-center gap-8 px-10'>
          <li className='flex flex-col items-center gap-4 max-w-[450px] w-full'>
            <div className='max-w-[450px] w-full max-h-[300px]'>
              <Image
                src="/images/app/prompt.gif"
                width="100"
                height="100"
                alt='create form'
                className='object-cover border rounded-lg w-full h-full aspect-video'
              />
            </div>

            <p className='block w-[300px]'>
              1. Add a prompt and describe the requirements for your forms.
            </p>
          </li>
          <li className='flex flex-col items-center gap-4 max-w-[450px] w-full'>
            <div className='max-w-[450px] w-full max-h-[300px]'>
              <Image
                src="/images/app/generate.gif"
                width="100"
                height="100"
                alt='create form'
                className='object-cover border rounded-lg w-full h-full aspect-video'
              />
            </div>

            <p className='block w-[300px]'>
              2. Generate the forms.
            </p>
          </li>
          <li className='flex flex-col items-center gap-4 max-w-[450px] w-full'>
            <div className='max-w-[450px] w-full max-h-[300px]'>
              <Image
                src="/images/app/analytics.gif"
                width="100"
                height="100"
                alt='create form'
                className='object-cover border rounded-lg w-full h-full aspect-video'
              />
            </div>
            <p className='block w-[300px]'>
              3. Check results, analytics and more.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default LandingPage