import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface CommentFormPropsType {
    postId: string
    responseTo: string | null
    setOnReplay: any
}

const CommentForm = ({ postId, responseTo, setOnReplay }: CommentFormPropsType) => {
    const [comment, setComment] = useState<string | number | readonly string[] | undefined>(undefined)
    const router = useRouter()

    const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const data = {
            content: comment,
            postId,
            responseTo
        }
        http.post("post-comment/save-comment", data).then((res) => {
            setComment("")
            toast.success(res.data.message)
            routerPush(router)
            setOnReplay && setOnReplay(false)
        }).catch((error) => toast.error(error?.response?.data?.message))
    }

    return (
        <form>
            <textarea value={comment} placeholder="نظر خود را بنویسید..." onChange={(e) => setComment(e.target.value)} className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"></textarea>
            <button onClick={submitHandler} className="mt-4 mx-auto py-2 w-full sm:w-56 bg-violet-600 rounded-lg text-white px-2 md:text-lg">ارسال نظر</button>
        </form>
    );
}

export default CommentForm;