import axios from "axios";
import { SinglePostPropsType } from "src/types";
import { LinkIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as SolideBookmarkIcon } from '@heroicons/react/24/solid'
import { toPersianDigits } from "@/utils/toPersianDigits";
import { useEffect, useState } from "react";
import PostInteractions from "@/components/blogs/PostInteractions";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"
import { FaTelegram } from "react-icons/fa"
import { MdContentCopy } from "react-icons/md"
import CopyToClipboard from "react-copy-to-clipboard";
import BlogList from "@/components/blogs/BlogList";
import PostComments from "@/components/blogs/postComments";

const SinglePostPage = ({ post }: SinglePostPropsType) => {
    const [persianTime, setPersianTime] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setPersianTime(new Date(post.createdAt).toLocaleDateString("fa-IR"))
    }, [post])

    const copyHandler = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="md:max-w-screen-lg container mx-auto">
                <header className="flex md:max-w-screen-md flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto">
                    {/* author data */}
                    <div className="flex items-stretch">
                        <img src="/images/author.jpg" className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white" alt={post.author.name} />
                        <div className="flex flex-col mr-4 justify-between">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-md">{post.author.name}</span>
                                <span className="border px-3 py-1 text-xs border-blue-500 text-blue-500 rounded-full">{post.category?.title}</span>
                            </div>
                            <span className="font-normal text-xs hidden md:block">{post.author.biography}</span>
                            <div className="font-normal flex text-gray-400 text-sm">
                                <span>{persianTime}</span>
                                <span className="mx-1">&bull;</span>
                                <span className="flex gap-x-1">
                                    <span>خواندن</span>
                                    <span>{toPersianDigits(post.readingTime)}</span>
                                    <span>دقیقه</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* interactions buttons */}
                    <div className="flex">
                        <button>
                            <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer" />
                        </button>
                        <button className="mr-4 border rounded-full px-3 py-1 flex items-center border-gray-300 text-gray-500 hover:text-gray-600">
                            <span className="ml-1 text-xs">
                                {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
                            </span>

                            {post.isBookmarked ? (
                                <SolideBookmarkIcon className="h-6 w-6 fill-current" />
                            ) : (
                                <BookmarkIcon className="h-6 w-6 stroke-current" />
                            )}
                        </button>
                    </div>

                </header>
                <main className="mb-8 prose md:max-w-screen-md mx-auto prose-xl prose-slate prose-img:rounded-xl prose-img:shadow-md prose-a:text-blue-500 prose-h1:text-xl md:prose-h1:text-3xl prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-bold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10">
                    <h1>سرتیتر اول</h1>
                    <h2>سر تیتر داخلی</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <img src="/images/next.webp" alt="" />
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

                </main>
                {/* post tags */}
                <section>
                    <ul className="flex items-center flex-wrap gap-x-4 mb-6">
                        {
                            ["ری اکت", "جاوااسکریپت", "نکست", "ری اکت", "جاوااسکریپت", "نکست"].map((tag, index) => {
                                return <li key={index} className="px-3 py-1 rounded-2xl border border-gray-400 bg-gray-200 hover:bg-gray-100 transition-all cursor-pointer text-gray-600 duration-150 text-sm mb-3 block">
                                    {tag}
                                </li>
                            })
                        }
                    </ul>
                    <div className="flex mb-10 border-b-2 pb-4 border-black items-center flex-col gap-y-8 md:flex-row md:justify-between">
                        {/* like - comment - bookmark */}
                        <PostInteractions isSmall={false} post={post} className="justify-evenly w-full md:w-auto" />
                        <div className="flex items-center md:gap-x-4 gap-x-6 justify-between w-full md:w-auto">
                            {/* share btn */}
                            <div className="flex items-center justify-between md:w-auto md:gap-x-4 gap-x-3 w-full">
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.DOMAIN_URL}/posts/${post.hashId}/${post.slug}`} target="_blank" className="block" rel="noreferrer">
                                    <IoLogoLinkedin size={24} className="fill-gray-400 hover:fill-gray-500 duration-150 cursor-pointer" />
                                </a>
                                <a href="#" target="_blank" className="block" rel="noreferrer">
                                    <IoLogoTwitter size={24} className="fill-gray-400 hover:fill-gray-500 duration-150 cursor-pointer" />
                                </a>
                                <a href="#" target="_blank" className="block" rel="noreferrer">
                                    <FaTelegram size={24} className="fill-gray-400 hover:fill-gray-500 duration-150 cursor-pointer" />
                                </a>
                            </div>
                            {/* copy post link */}
                            <div className="relative">
                                <CopyToClipboard
                                    text={`${process.env.DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
                                    onCopy={() => copyHandler()}
                                >
                                    <div className="bg-gray-100 text-sm md:text-base cursor-pointer border px-3 py-1 rounded-2xl text-gray-600 flex items-center ">
                                        <span>کپی&nbsp;لینک</span>
                                        <MdContentCopy size={24} />
                                    </div>
                                </CopyToClipboard>
                                {copied && <span className="absolute bottom-9 left-0 bg-blue-500 px-3 py-1 rounded-full shadow text-white text-sm">کپی شد</span>}
                            </div>
                        </div>
                    </div>
                </section>
                {/* related posts */}
                <section className="mb-20">
                    <h2 className="font-extrabold mb-4 text-2xl md:text-3xl">
                        پست های مشابه
                    </h2>
                    <div className=' md:col-span-9 grid items-start gap-8 grid-cols-6'>
                        <BlogList blogsData={post.related} />
                    </div>
                </section>
                {/* post comments */}
                <PostComments post={post} />
            </div>
        </div>
    );
}

export default SinglePostPage;

export async function getServerSideProps(ctx: any) {
    const { query } = ctx
    const { data } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`)

    return {
        props: {
            post: data.data
        }
    }
}