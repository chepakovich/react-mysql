import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

class OneEmployee extends Component {
  state = {
    employees: []
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
    EmployeeService.editEmployee(this.state.targetEmployee.id, this.state.feedback)
      .then(response => {
        alert('Employee name has been updated')
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
        <div class="data-table">
          <h2>Edit employee "{targetEmployee.name}"</h2>
          <h3>Employee ID: {targetEmployee.id}</h3>
          <form onSubmit={this.handleSubmit}>
            Edit employee name:<br />
            <input type="text" onChange={this.handleChange} placeholder={targetEmployee.name} />        
            <div class="data-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default OneEmployee
