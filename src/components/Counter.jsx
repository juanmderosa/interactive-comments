import React, { useState } from 'react'

export const Counter = ({comment}) => {

  return (
    <aside className='counter-container'>
        <img src="images/icon-plus.svg" alt="plus button" />
        <h3 className='comment-score'>{comment.score}</h3>
        <img src="images/icon-minus.svg" alt="minus button" />
    </aside>
  )
}
