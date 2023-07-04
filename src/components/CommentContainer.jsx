import { Counter } from "./Counter"
import { Comment } from "./Comment"
import { ReplyContainer } from "./ReplyContainer"

export const CommentContainer = ({comment}) => {

  return (
    <>
      <article className="comment-main-container">
        <Counter comment={comment}/>
        <Comment comment={comment}/>
    </article>
    <div className="replies-line">
      <aside className="aside-line"></aside>
      {comment.replies.length > 0 ? 
          comment.replies.map((comment, index)=>(
            <ReplyContainer comment={comment} key={index}/>
          ))
        : null} 
    </div>

    
    </>
  )
}
