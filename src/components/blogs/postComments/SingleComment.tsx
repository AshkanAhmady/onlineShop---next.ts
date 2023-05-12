import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CommentPropsType } from "src/types";
import CommentForm from "./CommmentForm";

const SingleComment = ({ comment }: CommentPropsType) => {
    const [onReply, setOnReplay] = useState<boolean>(false)
    const [persianTime, setPersianTime] = useState<string | null>(null)
    const [commentValue, setCommentValue] = useState<string | number | readonly string[] | undefined>(undefined)


    useEffect(() => {
        setPersianTime(new Date(comment.createdAt).toLocaleDateString("fa-IR"))
    }, [comment])

    return (
        <div className="border rounded-xl border-gray-300 mt-8 p-4 md:p-8 ">
            <div className="flex items-center justify-start gap-x-4 ">
                <UserCircleIcon className="h-12 w-12 stroke-gray-400" strokeWidth={1} />
                <div className="flex flex-col justify-between mr-4">
                    <span className="block text-sm text-gray-600">{comment.writer?.name}</span>
                    <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{persianTime}</span>
                </div>
            </div>
            <div className="mt-4 leading-10">
                {comment.content}
            </div>
            <button className="text-sm p-4 cursor-pointer text-blue-600" onClick={() => setOnReplay(!onReply)}>
                {!onReply ? "پاسخ به" : "بیخیال"}
            </button>
            {/* replay form */}
            {onReply && <div className="mt-8">
                <span className="font-bold md:text-lg">در پاسخ به {comment.writer.name}</span>
                <CommentForm comment={commentValue} setComment={setCommentValue} />
            </div>}
        </div>
    );
}

export default SingleComment;