import React from 'react'

import { forms } from '@/db/schema';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { auth } from '../../../../auth';

import Form from '../../Form';

type Props = {
  params: {
    formId: string,
  },
}

const page: React.FC<Props> = async ({ params }) => {
  const formId = params.formId;

  const session = await auth();
  const userId = session?.user?.id;

  const form = await db.query.forms.findFirst({
    where: eq(forms.id, parseInt(formId)),
    with: {
      questions: {
        with: {
          fieldOptions: true,
        },
      },
    }
  });

  if (userId !== form?.userId) {
    return <div>Unauthorized</div>;
  }


  if (!formId) {
    return <div>Form not found</div>;
  } else {
    
  }

  return (
    <Form form={form as Form} editMode/>
  );
};

export default page;