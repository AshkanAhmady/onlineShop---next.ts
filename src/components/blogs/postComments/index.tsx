import { useState } from "react";
import { SingleCommentType, SinglePostPropsType } from "src/types";
import CommentForm from "./CommmentForm";
import ReplayComment from "./ReplayComment";
import SingleComment from "./SingleComment";

const PostComments = ({ post }: SinglePostPropsType) => {
    const [comment, setComment] = useState<string | number | readonly string[] | undefined>(undefined)
    return (
        <div>
            <h2>نظرات</h2>
            {post.comments.map((comment: SingleCommentType) => {
                return !comment.responseTo && comment.status === 2 && <div key={comment._id}>
                    <SingleComment comment={comment} />
                    <ReplayComment comments={post.comments} parrentCommentId={comment._id} />
                </div>
            })}

            {/* base comment form */}
            <div className="mt-8">
                <span className="font-bold md:text-lg">ارسال نظر جدید</span>
                <CommentForm comment={comment} setComment={setComment} />
            </div>
        </div>
    );
}

export default PostComments;