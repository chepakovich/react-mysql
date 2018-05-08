import React, { Component } from 'react'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'
//import * as PerformanceService from '../../shared/PerformanceService'

class Performance extends Component {
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
      //EmployeeService.getPerformanceReview(this.state.targetEmployee.id, 'test')
      //  .then(({data}) => this.setState({performance: data}))
    }
  }

  handleSubmit = (event) => {
    EmployeeService.updatePerformance(this.state.targetEmployee.id, this.state.feedback)
      .then(response => {
        alert('Performance review has been updated')
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
        <h2>Performance review</h2>

        <form onSubmit={this.handleSubmit} className='column is-half'>
          <div className="field">
            <label className='label'>Create/edit performance review of {targetEmployee.name}</label>
            <textarea onChange={this.handleChange} className='textarea' placeholder='Write performance review here'></textarea>
          </div>         
          <div className='buttons is-right'>
            <button className='button is-primary'>Submit</button>
          </div>
        </form>
      </Layout>
    )
  }
}

export default Performance
