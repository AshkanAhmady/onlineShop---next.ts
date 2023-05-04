import type { NextPage } from 'next'
import { ChevronDownIcon, AdjustmentsHorizontalIcon, HeartIcon, ClockIcon, BookmarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isShowCategories, setIsShowCategories] = useState<boolean>(false)

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(500px,_1fr)] min-h-screen'>
          <div className='hidden md:block md:col-span-3 md:row-span-2'>
            <div className='bg-purple-400 overflow-hidden rounded-3xl'>
              {/* accordion header */}
              <div onClick={() => setIsShowCategories(!isShowCategories)} className='flex justify-between items-center p-4 cursor-pointer'>
                <span className='text-gray-700 text-white'>دسته بندی مقالات</span>
                <ChevronDownIcon className={`w-6 h-6 stroke-white duration-300 ${isShowCategories ? "rotate-180" : "rotate-0"}`} />
              </div>

              {/* accordion content */}
              <div className={`bg-white pt-4 ${isShowCategories ? 'block' : 'hidden'}`}>
                <Link className='block text-gray-700 hover:bg-blue-400 hover:text-white pr-4 py-2 mb-1' href="#">همه مقالات</Link>
                <Link className='block text-gray-700 hover:bg-blue-400 hover:text-white pr-4 py-2 mb-1' href="#">ریکت</Link>
                <Link className='block text-gray-700 hover:bg-blue-400 hover:text-white pr-4 py-2' href="#">جاوااسکریپت</Link>
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
          <div className=' md:col-span-9 grid gap-8 grid-cols-6'>
            {["nuxt.webp", "next.webp", "react.png", "next.webp", "nuxt.webp"].map((item, index) => {
              return (
                <div key={index} className='bg-white border-2 border-gray-100  flex flex-col gap-2 rounded-3xl p-2 col-span-6 sm:col-span-3 lg:col-span-2'>
                  {/* cover image */}
                  <div className='aspect-w-16 aspect-h-9'>
                    <img src={`/images/${item}`} className='rounded-2xl w-full h-full object-center object-cover' alt="course" />
                  </div>
                  {/* blog content */}
                  <div className='bg-gray-100 flex-1 justify-between p-2 rounded-2xl flex flex-col gap-3'>
                    <h2 className='font-bold'>
                      {index === 2 ? "بررسی کامل ریکت و ریداکسبررسی کامل ریکت و ریداکس" : "بررسی کامل ریکت و ریداکس"}
                    </h2>
                    <div>
                      <div className='flex items-center mb-2 justify-between'>
                        <div className='flex items-center justify-between'>
                          <img src="/images/nuxt.webp" className='ring-2 ml-2 ring-white w-6 h-6 rounded-full' alt="" />
                          <span className='text-gray-700 text-sm font-light'>اشکان احمدی</span>
                        </div>
                        <span className='duration-150 text-xs bg-blue-200 text-blue-500 px-2 py-1 hover:bg-blue-600 hover:text-white rounded-full cursor-pointer'>ری اکت</span>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                          <ChatBubbleLeftIcon className='cursor-pointer p-1 bg-gray-200 stroke-gray-600 rounded w-6 h-6' />
                          <BookmarkIcon className='cursor-pointer p-1 bg-red-200 stroke-red-600 rounded w-6 h-6' />
                          <HeartIcon className='cursor-pointer p-1 bg-blue-200 stroke-blue-600 rounded w-6 h-6' />
                        </div>
                        <div className='flex items-center gap-1'>
                          <ClockIcon className='w-5 h-5 stroke-gray-400' />
                          <span className='text-gray-400 text-[11px]'>زمان مطالعه: 12 دقیقه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
