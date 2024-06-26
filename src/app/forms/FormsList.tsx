import React from 'react'
import { forms } from '@/db/schema';
import { InferSelectModel } from 'drizzle-orm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Form = InferSelectModel<typeof forms>;

type Props = {
  forms: Form[]
}

const FormsList = (props: Props) => {
  return (
    <div className='grid grid-cols1 md:grid-cols-3 gap-4'>{props.forms.map((form: Form) => (
      <Card key={form.id} className='max-w-[350px] flex flex-col bg-[#17171b] border-none'>
        <CardHeader className='flex-1'>
          <CardTitle className='text-white'>
            {form.name}
          </CardTitle>
          <CardDescription className='text-white'>
            {form.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link className="w-full" href={`/forms/edit/${form.id}`}>
            <Button className='w-full'>View</Button>
          </Link>
        </CardFooter>
      </Card>
    ))}</div>
  )
}

export default FormsList