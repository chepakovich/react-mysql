import React, { Component } from 'react'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

class FeedbackForm extends Component {
  state = {
    targetEmployee: {},
    feedback: ''
  }

  componentDidMount () {
    const { match: { params } } = this.props;
    if (params.userid) {
      EmployeeService.getEmployees()
        .then(({data}) => {
          const targetEmployee = data.find(u => u.id === +params.userid)
          this.setState({targetEmployee})
        })
    }
  }

  handleSubmit = (event) => {
    EmployeeService.createFeedback(this.state.targetEmployee.id, this.state.feedback)
      .then(response => {
        
        // todo: proper notification

        alert('Feedback has been submitted')
      })

    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({feedback: event.target.value})
  }

  render () {
    const targetEmployee = this.state.targetEmployee || {}
    return (
      <Layout>
        <h2>Send feedback</h2>

        <form onSubmit={this.handleSubmit} className='column is-half'>
          <div className="field">
            <label className='label'>Create feedback for {targetEmployee.name}</label>
            <textarea onChange={this.handleChange} className='textarea' placeholder='Write something'></textarea>
          </div>
          
          <div className='buttons is-right'>
            <button className='button is-primary'>Submit</button>
          </div>
        </form>
      </Layout>
    )
  }
}

export default FeedbackForm
