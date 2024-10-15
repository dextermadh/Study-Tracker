"use client"
import { useUserContext } from '@/context/userContext'
import Image from 'next/image';
import React from 'react'

function Profile() {

    const {user} = useUserContext();

  return (
    <div className='m-4'>
      <div className='px-2 py-1 flex items-center gap-3 bg-[#E6E6E6]/20 rounded-[0.8rem]
        hover:bg-[#E6E6E6]/50 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-2 hover:border-white"'
        
        >
            <div>
                <Image 
                    src={user?.photo}
                    alt='avatar'
                    width={40}
                    height={40}
                    className='rounded-full'
                />
            </div>
            <div>
                <h1 className='flex flex-col text-l'>
                    <span className='font-medium'>Hello</span>
                    <span className='font-bold'>{user?.name}</span>
                </h1>
            </div>
        </div>
        <div className='mt-3 flex flex-col gap-8'>
            <div className='grid grid-cols-2 gap-4'>
            <div className='text-gray-400'> 
            <p>Total Tasks:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-purple-500 rounded-[5px]"></span>
              <span className="font-medium text-xl text-[#333]">
                10
              </span>
            </p>
            </div>
            <div className='text-gray-400'> 
            <p>In Progress:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-500 rounded-[5px]"></span>
              <span className="font-medium text-xl text-[#333]">
                10
              </span>
            </p>
            </div>
            <div className='text-gray-400'> 
            <p>Open Tasks:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-orange-500 rounded-[5px]"></span>
              <span className="font-medium text-xl text-[#333]">
                10
              </span>
            </p>
            </div>
            <div className='text-gray-400'> 
            <p>Completed:</p>
            <p className='pl-4 relative flex gap-2'>
            <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-400 rounded-[5px]"></span>
              <span className="font-medium text-xl text-[#333]">
                10
              </span>
            </p>
            </div>
            </div>
        </div>
        <h3 className='mt-8 font-medium'>Activity</h3>
    </div>
  )
}

export default Profile
