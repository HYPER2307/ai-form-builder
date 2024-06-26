import React, { FC, ReactNode } from 'react';
import { SidebarNavItem } from '@/types/nav-types';
import { Header } from '@/components/ui/header';
import DashboardNav from '@/app/navbar/navbar';
import { SessionProvider } from 'next-auth/react';
import FormGenerator from '../form-generator';
import UpgradeAccountBtn from '@/components/navigation/upgradeAccountBtn';
import { getUserForms } from '../actions/getUserForms';

type Props = {
  children: ReactNode,
};

export const layout: FC<Props> = async ({ children }) => {
  const forms = await getUserForms();
  const formsCount = forms.length;

  const dashboardConfig: { sidebarNav: SidebarNavItem[] } = {
    sidebarNav: [
      {
        title: 'Forms',
        href: '/view-forms',
        icon: "library",
      },
      {
        title: 'Results',
        href: '/results',
        icon: "list",
      },
      {
        title: 'Analytics',
        href: '/analytics',
        icon: "lineChart",
      },
      {
        title: 'Charts',
        href: '/charts',
        icon: "pieChart",
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: "settings",
      },
    ]
  };

  return (
    <div className='flex min-h-screen flex-col space-y-6 bg-[url("/ttten.svg")] bg-cover'>
      <Header />

      <div className='flex-1 pb-10 mx-auto max-w-[1248px] grid gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] min-h-96 h-full flex-col md:flex pr-2 justify-between'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
          <UpgradeAccountBtn />
        </aside>

        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          <header className='flex items-center bg-[#17171b] rounded-lg min-w-[800px] w-full'>
            <h1 className='text-4xl m-5 p-4 font-semibold'>Dashboard</h1>

            <SessionProvider>
              <FormGenerator formsCount={formsCount} />
            </SessionProvider>

          </header>

          <div className='my-4 w-full h-[1px] bg-[#e31d70]'/>

          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;