import React from 'react'

function SelfAssessment ({review, onSubmit, onChange}) {
  const questionnaire = review.map(question => {
    return (
      <Question key={question.id} {...question} onChange={onChange} />
    )
  })

  return (
    <div className='column is-three-fifths'>
      <h2>Self-assessment</h2>

      <form onSubmit={onSubmit}>
        {questionnaire}

        <div className='buttons is-right'>
          <button className='button is-primary'>Save</button>
        </div>
      </form>
    </div>
  )
}

function Question ({id, title, response, onChange}) {
  return (
    <div className='field'>
      <label className='label'>{title}</label>
      <textarea defaultValue={response} onChange={onChange} name={id} className='textarea' rows='4'></textarea>
    </div>
  )
}

export default SelfAssessment
