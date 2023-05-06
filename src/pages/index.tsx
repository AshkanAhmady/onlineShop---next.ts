import type { NextPage } from 'next'
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import BlogList from '../components/blogs/BlogList'
import { indexPropsType } from 'src/types'

const Home = ({ blogsData, categoryData }: indexPropsType) => {
  const [isShowCategories, setIsShowCategories] = useState<boolean>(false)

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(500px,_1fr)] min-h-screen'>
          <div className='hidden md:block md:col-span-3 md:row-span-2'>
            <div className='bg-purple-400 overflow-hidden rounded-3xl'>
              {/* accordion header */}
              <div onClick={() => setIsShowCategories(!isShowCategories)} className='flex justify-between items-center p-4 cursor-pointer'>
                <span className='text-white'>دسته بندی مقالات</span>
                <ChevronDownIcon className={`w-6 h-6 stroke-white duration-300 ${isShowCategories ? "rotate-180" : "rotate-0"}`} />
              </div>

              {/* accordion content */}
              <div className={`bg-white pt-4 ${isShowCategories ? 'block' : 'hidden'}`}>
                <Link href="/blogs" className='block text-gray-700 hover:bg-blue-400 hover:text-white pr-4 py-2 mb-1' >همه مقالات</Link>
                {categoryData.map((category) => {
                  return <Link href={`/blogs/${category.englishTitle}`} key={category._id} className='block text-gray-700 hover:bg-blue-400 hover:text-white pr-4 py-2'>{category.title}</Link>
                })}
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
            <BlogList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {

  const { data: blogsData } = await axios.get("http://localhost:5000/api/posts?page=1&limit=6")
  const { data: categoryData } = await axios.get("http://localhost:5000/api/post-category")

  return {
    props: {
      blogsData: blogsData.data,
      categoryData: categoryData.data
    }
  }
}
