import React from 'react'

export const PostContainer = () => {
  return (
    <form className='post-main-container' onSubmit={console.log("hola")}>
        <article className='post-avatar-container'>
            <img className='post-avatar' src="/public/images/avatars/image-juliusomo.png" alt="avatar" />
        </article>
        <article className='textarea-container'>
            <textarea className='post-input' placeholder='Add a comment...'></textarea>
        </article>
        <article className='btn-container'>
            <button type='submit' className='post-btn'>SEND</button>
        </article>
    </form>
  )
}
