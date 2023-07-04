import React from 'react'
import { Counter } from './Counter'
import { Comment } from './Comment'

export const ReplyContainer = ({comment}) => {

    const {replies} = comment
    console.log(replies)

  return (
    <article className="reply-main-container">
        <Counter comment={comment}/>
        <Comment comment={comment}/>
    </article>
  )
}
