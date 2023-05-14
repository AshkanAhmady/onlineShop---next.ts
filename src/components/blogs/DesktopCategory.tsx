import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CategoryListPropsType } from 'src/types';

const DesktopCategory = ({ categoryData }: CategoryListPropsType) => {
    const [isShowCategories, setIsShowCategories] = useState<boolean>(true)
    const { query } = useRouter()

    return (
        <div className='bg-purple-400 overflow-hidden rounded-3xl sticky top-20'>
            {/* accordion header */}
            <div onClick={() => setIsShowCategories(!isShowCategories)} className='flex justify-between items-center p-4 cursor-pointer'>
                <span className='text-white'>دسته بندی مقالات</span>
                <ChevronDownIcon className={`w-6 h-6 stroke-white duration-300 ${isShowCategories ? "rotate-180" : "rotate-0"}`} />
            </div>

            {/* accordion content */}
            <div className={`bg-white pt-4 ${isShowCategories ? 'block' : 'hidden'}`}>
                <Link href="/blogs" className={`${!query.categorySlug ? "bg-purple-500 text-white" : ""} block text-gray-700 hover:bg-purple-300 duration-150 hover:text-white pr-4 py-2 mb-1`} >همه مقالات</Link>
                {categoryData.map((category) => {
                    return <Link href={`/blogs/${category.englishTitle}`} key={category._id} className={`${query.categorySlug === category.englishTitle ? "bg-purple-500 text-white" : ""} block text-gray-700 hover:bg-purple-300 duration-150 hover:text-white pr-4 py-2`}>{category.title}</Link>
                })}
            </div>
        </div>
    );
}

export default DesktopCategory;