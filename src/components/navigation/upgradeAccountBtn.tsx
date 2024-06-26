import React from 'react'
import Link from 'next/link'
import { getUserForms } from '@/app/actions/getUserForms'
import ProgressBar from '../progressBar'
import SubscribeBtn from '@/app/subscription/subscribeButton'
import { auth } from '@/auth'
import { getUserSubscription } from '@/app/actions/userSubscriptions'

type Props = {}

const UpdgradeAccBtn = async (props: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  
  if (!userId) {
    return null;
  }

  console.log(userId);

  const subscription = await getUserSubscription({ userId });

  console.log(subscription);
  
  if (subscription) {
    return null;
  }
  const forms = await getUserForms();
  const formCount = forms.length;
  const percent = (formCount / 3) * 100;

  return (
    <div className='p-4 mb-4 text-left text-xs'>
      <ProgressBar value={percent} />
      <p className='mt-2'>{formCount} out of {3} forms generated.</p>
      <p>
        <SubscribeBtn price="price_1PVkxZLtkjyMBW3c2gmDVm2a" userId={userId} />
        {' '} for unlimited forms.
      </p>
    </div>
  )
}

export default UpdgradeAccBtn