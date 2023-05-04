import type { NextPage } from 'next'
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isShowCategories, setIsShowCategories] = useState<boolean>(false)

  return (
    <div className='grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(500px,_1fr)] bg-gray-100 min-h-screen'>
      <div className='bg-red-400 hidden md:block md:col-span-3 md:row-span-2'>
        <div className='bg-purple-300 overflow-hidden rounded-3xl'>
          {/* accordion header */}
          <div onClick={() => setIsShowCategories(!isShowCategories)} className='flex justify-between items-center p-4 cursor-pointer'>
            <span className='text-gray-700'>دسته بندی مقالات</span>
            <ChevronDownIcon className={`w-6 h-6 stroke-purple-800 duration-300 ${isShowCategories ? "rotate-180" : "rotate-0"}`} />
          </div>

          {/* accordion content */}
          <div className={`bg-white ${isShowCategories ? 'block' : 'hidden'}`}>
            <Link className='block text-gray-700 hover:bg-purple-200 pr-4 py-2 mb-1' href="#">همه مقالات</Link>
            <Link className='block text-gray-700 hover:bg-purple-200 pr-4 py-2 mb-1' href="#">ریکت</Link>
            <Link className='block text-gray-700 hover:bg-purple-200 pr-4 py-2' href="#">جاوااسکریپت</Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block md:col-span-9'>
        <div className='rounded-3xl bg-white px-4 flex items-center'>
          <div className='flex items-center gap-2'>
            <AdjustmentsHorizontalIcon className='w-6 h-6' />
            <span className='text-gray-700'>مرتب سازی:</span>
          </div>
          <ul className='flex items-center gap-4 mr-3'>
            <li className='text-gray-700 cursor-pointer py-3' >پر بازید ترین</li>
            <li className='text-gray-700 cursor-pointer py-3' >جدید ترین</li>
            <li className='text-gray-700 cursor-pointer py-3' >محبوب ترین</li>
          </ul>
        </div>

      </div>
      <div className='bg-red-400 md:col-span-9'>blogs</div>
    </div>
  )
}

export default Home
