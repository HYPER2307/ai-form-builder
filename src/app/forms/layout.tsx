import React from 'react'

const FormEditLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[url("/ttten.svg")] bg-cover'>{children}</main>
  )
}

export default FormEditLayout