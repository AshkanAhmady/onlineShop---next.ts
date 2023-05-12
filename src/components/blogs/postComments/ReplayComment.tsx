import SingleComment from "./SingleComment";

const ReplayComment = ({ comments, parrentCommentId }: any) => {

    console.log(comments)

    return comments.map((comment: any) => {
        return (
            parrentCommentId === comment.responseTo && (
                <div key={comment._id} className="mr-5">
                    <SingleComment comment={comment} />
                    <ReplayComment comments={comments} parrentCommentId={comment._id} />
                </div>
            )
        )
    })
}

export default ReplayComment;