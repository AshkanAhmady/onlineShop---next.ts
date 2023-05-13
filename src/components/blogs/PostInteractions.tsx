import { HeartIcon, BookmarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeartIcon, BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/24/solid'
import { toPersianDigits } from '@/utils/toPersianDigits';
import { PostInteractionsPropsType } from 'src/types';
import http from '@/services/httpService';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import routerPush from '@/utils/routerPush';


const PostInteractions = ({ post, isSmall, className }: PostInteractionsPropsType) => {
    const router = useRouter()

    const likeHandler = () => {
        http.put(`/posts/like/${post._id}`).then(({ data }) => {
            routerPush(router)
            toast.success(data.message)
        }).catch(err => toast.error(err?.response?.data?.message))
    }

    const bookmarkHandler = () => {
        http.put(`/posts/bookmark/${post._id}`).then(({ data }) => {
            routerPush(router)
            toast.success(data.message)

        }).catch(err => toast.error(err?.response?.data?.message))
    }

    const iconSize = `${isSmall ? "w-4 h-4" : "h-6 w-6"}`
    return (
        <div className={`flex items-center ${isSmall ? "gap-x-1" : "gap-x-4"} ${className}`}>
            <button className={`p-[2px] bg-gray-200 text-xs duration-150 text-gray-600 hover:bg-gray-600 hover:text-gray-200 flex items-center gap-1 rounded`}>
                <ChatBubbleLeftIcon className={`stroke-current ${iconSize}`} />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </button>
            <button onClick={likeHandler} className={`p-[2px] bg-red-200 text-xs duration-150 text-red-600 hover:bg-red-600 hover:text-red-200 flex items-center gap-1 rounded`}>
                {post.isLiked
                    ? <SolidHeartIcon className={`fill-current ${iconSize}`} />
                    : <HeartIcon className={`stroke-currfill-current ${iconSize}`} />}

                <span>{toPersianDigits(post.likesCount)}</span>
            </button>
            <button onClick={bookmarkHandler} className={`p-[2px] bg-blue-200 text-xs duration-150 text-blue-600 hover:bg-blue-600 hover:text-blue-200 flex items-center gap-1 rounded`}>
                {post.isBookmarked
                    ? <SolidBookmarkIcon className={`fill-current ${iconSize}`} />
                    : <BookmarkIcon className={`stroke-currfill-current ${iconSize}`} />}

            </button>
        </div>
    );
}

export default PostInteractions;