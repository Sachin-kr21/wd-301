import CommentList from "./CommentList";
import NewComment from "./NewComment";
// import ProjectList from "./ProjectList";
const Comments = () => {
  return (
    <>
      <div className="flex justify-between">
        {/* <h2 className="text-2xl font-medium tracking-tight">Projects</h2> */}
        {/* <div className="fixed inset-0 overflow-y-auto"> */}
            {/* <div className="flex min-h-full items-center justify-center p-4 text-center"> */}
        < NewComment />
        </div>
        <CommentList />
      {/* </div> */}
    </>
  )
}
export default Comments;