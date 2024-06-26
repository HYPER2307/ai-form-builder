import { auth, signOut, signIn } from '../../auth'
import Link from 'next/link';
import React from 'react'
import { Button } from './button';
import Image from 'next/image';

const SignOut = () => (
  <form action={async () => {
    'use server';

    await signOut();
  }}>
    <Button type="submit">
      Sign out
    </Button>
  </form>
);

export const Header = async () => {
  const session = await auth();;

  return (
    <header className='border-b border-[#e31d70] w-full bg-[#17171b]'>
      <nav className='border-[#e31d70] max-w-screen-xl px-4 py-2.5 mx-auto'>
        <div className='flex justify-between items-center mx-auto w-full'>
          <h1>
            <Link href='/'>
              <Image
                className='object-cover'
                src="/images/logo.png"
                alt='logo'
                width={170}
                height={50}
              />
            </Link>
          </h1>

          <div className='flex items-center gap-4'>
            <Link href="/view-forms" className=''>
              <Button variant="default" className='text-white'>
                Dashboard
              </Button>
            </Link>
            {
              session?.user
                ? (
                  <div className='flex justify-center items-center gap-4'>
                    {
                      session.user.name && session.user.image && (
                        <Image
                          src={session.user.image}
                          alt={session.user.name}
                          width={32}
                          height={32}
                          className='rounded-full'
                        />
                      )
                    }
                    <SignOut />
                  </div>
                )
                : (
                  <Link href="/api/auth/signin">
                    <Button variant='link'>
                      Sign in
                    </Button>
                  </Link>
                )
            }
          </div>
        </div>
      </nav>
    </header>
  )
}