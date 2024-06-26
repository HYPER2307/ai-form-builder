"use client"

import React, { useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useRouter } from 'next/navigation'


const Page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/view-forms') 
    }, 2000);
  }, [router]);

  return (
    <Alert variant="default">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your answers were recorded successfully. Thank you for submitting the form! </AlertDescription>
    </Alert>
  )
}

export default Page;