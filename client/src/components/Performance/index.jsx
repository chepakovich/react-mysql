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
          //this.setState({targetEmployee})
        })
        //.then (alert(this.state.targetEmployee.id))
      //EmployeeService.getPerformanceReview(this.state.targetEmployee.id)
        //.then(({data}) => this.setState({performance: data}))
    }
  }



  handleSubmit = (event) => {
    EmployeeService.updatePerformance(this.state.targetEmployee.id, this.state.feedback)
      .then(response => {
        alert('Performance review has been updated')
        window.location.href='../employees';
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
        <div class="page-data">
          <h2>Performance review for "{targetEmployee.name}"</h2>

          <form onSubmit={this.handleSubmit}>

              Create/edit performance review:<br />
              <textarea rows="10" cols="80" onChange={this.handleChange} placeholder='Write performance review here'></textarea>        
            <div class="data-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Performance
