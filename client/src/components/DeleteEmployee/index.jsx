import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

class DeleteEmployee extends Component {
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
    EmployeeService.deleteEmployee(this.state.targetEmployee.id)
      .then(response => {
        alert('The employee has been deleted')
        window.location.href='../employees';
      })
    event.preventDefault()
  }

  render () {
    const targetEmployee = this.state.targetEmployee || {}
    return (
      <Layout>
        <div class="data-table">
          <h2>Delete employee "{targetEmployee.name}"</h2>
          <h3>Employee ID: {targetEmployee.id}</h3>
          <form onSubmit={this.handleSubmit}> 
            <div class="data-btn">
              <button>delete employee</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}
  

export default DeleteEmployee
