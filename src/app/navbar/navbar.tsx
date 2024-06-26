"use client"

import React from 'react';
import { SidebarNavItem } from '@/types/nav-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Icons } from '../../components/icons';

interface Props {
  items: SidebarNavItem[],
};

const DashboardNav = ({
  items,
}: Props) => {
  const path = usePathname();

  if (!items.length) return null;

  return (
    <nav className='p-4 rounded-lg bg-[#17171b]'>
      {items.map((item, index) => {
        const Icon = Icons[item?.icon || "list"];
        const isActive = item.href === path;
        
        return item.href && (
          <Link
            key={index}
            href={item.disabled ? '/' : item.href}
          >
            <span
              className={cn(
                "group flex items-center rounded-md px-3 p-2 text-sm font-medium",
                isActive? "bg-[#17171b]" : "transparent",
                item.disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer",
              )}
            >
              <Icon className="w-4 h-4 mr-2"/>
              <p className='group-hover: hover:bg-[#17171b] hover:text-[#e31d70]'>
                {item.title}                
              </p>
            </span>
          </Link>  
        )
      })}
    </nav>
  );
};

export default DashboardNav;