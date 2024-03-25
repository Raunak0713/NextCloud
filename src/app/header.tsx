import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
    return (
        <div className='border-b p-4 bg-gray-50'>
            <div className="container mx-auto justify-between flex items-center">
                <div className='md:text-bold md:text-3xl flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                    </svg>
                    NextCloud
                </div>
                <div className='flex gap-2'>
                  <OrganizationSwitcher />
                  <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Header
