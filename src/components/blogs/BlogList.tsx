import { HeartIcon, ClockIcon, BookmarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { BlogListPropsType, SingleBlogType } from 'src/types';

const BlogList: React.FC<BlogListPropsType> = ({ blogsData }) => {

    return (
        <>
            {
                blogsData.docs.map((blog: SingleBlogType) => {
                    return <div key={blog._id} className='bg-white border-2 border-gray-100  flex flex-col gap-2 rounded-3xl p-2 col-span-6 sm:col-span-3 lg:col-span-2'>
                        {/* cover image */}
                        <div className='aspect-w-16 aspect-h-9'>
                            <img src={blog.coverImage} className='rounded-2xl w-full h-full object-center object-cover' alt="course" />
                        </div>
                        {/* blog content */}
                        <div className='bg-gray-50 flex-1 justify-between p-2 rounded-2xl flex flex-col gap-3'>
                            <h2 className='font-bold mb-2'>{blog.title}</h2>
                            <div>
                                <div className='flex items-center mb-2 justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <img src="/images/nuxt.webp" className='ring-2 ml-2 ring-white w-6 h-6 rounded-full' alt="" />
                                        <span className='text-gray-700 text-sm font-light'>{blog.author.name}</span>
                                    </div>

                                    {blog.category && <span className='duration-150 text-xs bg-blue-200 text-blue-500 px-2 py-1 hover:bg-blue-600 hover:text-white rounded-full cursor-pointer'>{blog.category}</span>}
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <button className='p-[2px] bg-gray-200 text-xs text-gray-600 flex items-center gap-1 rounded'>
                                            <ChatBubbleLeftIcon className='stroke-gray-600 w-4 h-4' />
                                            <span>{blog.commentsCount}</span>
                                        </button>
                                        <button className='p-[2px] bg-red-200 text-xs text-red-600 flex items-center gap-1 rounded'>
                                            <HeartIcon className='stroke-red-600 w-4 h-4' />
                                            <span>{blog.likesCount}</span>
                                        </button>
                                        <button className='p-[2px] bg-gray-200 text-xs text-blue-600 flex items-center gap-1 rounded'>
                                            <BookmarkIcon className='stroke-blue-600 w-4 h-4' />

                                        </button>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <ClockIcon className='w-5 h-5 stroke-gray-400' />
                                        <span className='text-gray-400 text-[11px]'>{`زمان مطالعه: ${blog.readingTime} دقیقه`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default BlogList;