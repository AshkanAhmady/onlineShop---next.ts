import routerPush from '@/utils/routerPush'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'


const sortList = [
    { label: "پربازدید ترین", id: "most" },
    { label: "جدید ترین", id: "newest" },
    { label: "محبوب ترین", id: "popular" },
]

const DesktopSortBar = () => {
    const router = useRouter()
    const [sort, setSort] = useState(router.query.sort || "newest")

    const sortHandler = (id: string) => {
        // add new query that name is sort
        router.query.sort = id
        // reload page and add query to url
        // when page reloaded, SSR in blogs/index page run again
        routerPush(router)
        setSort(id)
    }

    return (
        <div className='rounded-3xl bg-white px-4 flex items-center'>
            <div className='flex items-center gap-2'>
                <AdjustmentsHorizontalIcon className='w-6 h-6' />
                <span className='text-gray-700'>مرتب سازی:</span>
            </div>
            <ul className='flex items-center gap-4 mr-3'>
                {sortList.map(({ label, id }) => {
                    return <li onClick={() => sortHandler(id)} key={id} className={`${id === sort ? "text-purple-500" : "text-gray-700"} duration-300 relative cursor-pointer py-3`} >
                        {label}
                        <span className={`${id === sort ? "opacity-100" : "opacity-0"} duration-300 h-[3px] absolute bottom-0 right-0 bg-purple-500 w-8`}></span>
                    </li>
                })
                }
            </ul>
        </div>

    );
}

export default DesktopSortBar;