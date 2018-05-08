import React from 'react'

function FeedbackList ({data}) {
  return (
    <div className='content column'>
      <h3>Feedback received</h3>
      {data.map(feedback => {
        return (
          <div key={feedback.from}>
            <h4 className='is-size-6'>From: {feedback.from}</h4>
            <blockquote>{feedback.text}</blockquote>
          </div>
        )
      })}
    </div>
  )
}

export default FeedbackList
