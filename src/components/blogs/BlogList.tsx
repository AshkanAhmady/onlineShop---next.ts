import { ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { BlogListPropsType, SingleBlogType } from 'src/types';
import PostInteractions from './PostInteractions';

const BlogList: React.FC<BlogListPropsType> = ({ blogsData }) => {

    return (
        <>
            {
                blogsData.map((blog: SingleBlogType) => {
                    return <div key={blog._id} className='bg-white border-2 border-gray-100 flex flex-col gap-2 rounded-3xl p-2 col-span-6 sm:col-span-3 lg:col-span-2'>
                        {/* cover image */}
                        <div className='aspect-w-16 aspect-h-9'>
                            <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                                <img src={blog.coverImage} className='rounded-2xl w-full h-full object-center object-cover' alt="course" />
                            </Link>
                        </div>
                        {/* blog content */}
                        <div className='bg-gray-50 flex-1 justify-between p-2 rounded-2xl flex flex-col gap-3'>
                            <h2 className='font-bold truncate mb-2'>
                                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                                    {blog.title}
                                </Link>
                            </h2>
                            <div>
                                <div className='flex items-center mb-2 justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <img src="/images/nuxt.webp" className='ring-2 ml-2 ring-white w-6 h-6 rounded-full' alt="" />
                                        <span className='text-gray-700 text-sm font-light'>{blog.author.name}</span>
                                    </div>

                                    {blog.category && <Link href={`/blogs/${blog.category.englishTitle}`} className='duration-150 text-xs bg-blue-200 text-blue-500 px-2 py-1 hover:bg-blue-600 hover:text-white rounded-full cursor-pointer'>{blog.category.title}</Link>}
                                </div>
                                <div className='flex items-center justify-between'>
                                    <PostInteractions className='' isSmall={true} post={blog} />
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