import React from 'react'

export const Comment = ({comment}) => {
  return (
    <>
    <div className="comment-container">
        <div className="inforeply-container">
            <div className="info-container">
                <img className="avatar" src={comment.user.image.png} alt="avatar" />
                <p className="user-name">{comment.user.username}</p>
                <p className="post-time">{comment.createdAt}</p>
            </div>
            <div className="reply-container">
                <img className="reply-btn" src="images/icon-reply.svg" alt="reply icon"/>
                <p className="reply-p">Reply</p>
            </div>
        </div>
        <p className="comment-p">{comment.content}</p>
    </div>
    </>

  )
}
