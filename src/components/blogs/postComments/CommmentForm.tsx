const CommentForm = ({ comment, setComment }: any) => {
    return (
        <form>
            <textarea value={comment} placeholder="نظر خود را بنویسید..." onChange={(e) => setComment(e.target.value)} className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"></textarea>
            <button className="mt-4 mx-auto py-2 w-full sm:w-56 bg-violet-600 rounded-lg text-white px-2 md:text-lg">ارسال نظر</button>
        </form>
    );
}

export default CommentForm;