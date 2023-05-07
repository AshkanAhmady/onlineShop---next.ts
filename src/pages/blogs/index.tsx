import axios from 'axios'
import { indexPropsType } from 'src/types'
import DesktopCategory from '@/components/blogs/DesktopCategory'
import MobileCategory from '@/components/blogs/MobileCategory'
import DesktopSortBar from '@/components/blogs/DesktopSortBar'
import BlogList from '@/components/blogs/BlogList'

const BlogsPage = ({ blogsData, categoryData }: indexPropsType) => {

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
                <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(500px,_1fr)] min-h-screen'>
                    <div className='hidden md:block md:col-span-3 md:row-span-2'>
                        <DesktopCategory categoryData={categoryData} />
                    </div>
                    <div className='flex md:hidden gap-x-4 overflow-scroll pb-4'>
                        <MobileCategory categoryData={categoryData} />
                    </div>
                    <div className='hidden md:block md:col-span-9'>
                        <DesktopSortBar />
                    </div>
                    <div className=' md:col-span-9 grid gap-8 grid-cols-6'>
                        <BlogList blogsData={blogsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsPage

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
