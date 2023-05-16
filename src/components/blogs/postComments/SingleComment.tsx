import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CommentPropsType } from "src/types";
import CommentForm from "./CommmentForm";

const SingleComment = ({ comment }: CommentPropsType) => {
    const [onReply, setOnReplay] = useState<boolean>(false)
    const [persianTime, setPersianTime] = useState<string | null>(null)


    useEffect(() => {
        setPersianTime(new Date(comment.createdAt).toLocaleDateString("fa-IR"))
    }, [comment])

    return (
        <div className="border shadow-md rounded-xl border-gray-300 mt-8 overflow-hidden">
            <div className="flex items-center justify-start gap-x-2 bg-gray-100 p-1">
                <UserCircleIcon className="h-10 w-10 stroke-gray-400" strokeWidth={1} />
                <div className="flex flex-col justify-between">
                    <span className="block text-sm text-gray-600">{comment.writer?.name}</span>
                    <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{persianTime}</span>
                </div>
            </div>
            <div className="mt-4 leading-10 px-4">
                {comment.content}
            </div>
            <button className="text-sm px-4 pb-4 cursor-pointer text-blue-600" onClick={() => setOnReplay(!onReply)}>
                {!onReply ? "پاسخ به" : "بیخیال"}
            </button>
            {/* replay form */}
            {onReply && <div className=" p-4">
                <span className="font-bold md:text-lg">در پاسخ به {comment.writer.name}</span>
                <CommentForm postId={comment.postId} responseTo={comment._id} setOnReplay={setOnReplay} />
            </div>}
        </div>
    );
}

export default SingleComment;