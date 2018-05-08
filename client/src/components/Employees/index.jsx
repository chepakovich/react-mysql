import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

class Employees extends Component {
  state = {
    employees: []
  }

  handleSubmit = (event) => {
    EmployeeService.addEmployee(this.state.feedback)
      .then(response => {
        //alert('New employee has been added')
        window.location.reload();
      })
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({feedback: event.target.value})
  }

  componentDidMount () {
    EmployeeService.getEmployees()
      .then(({data}) => this.setState({employees: data}))
  }

  render () {
    return (
      <Layout>
        <div class="page-data">
        
          <h1>List of employees</h1>
          <div class="data-table">
              <table border="1" cellpadding="7" cellspacing="7">
                  <tr>
                      <th width="50px">ID</th>
                      <th>Name</th>
                      <th>Edit Employee</th>
                      <th>Performance Review</th>
                      <th>Delete Employee</th>
                  </tr>
                {this.state.employees.map(e => {
                  return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td><Link to={`/employee/${e.id}`}>edit employee</Link></td>
                        <td><Link to={`/performance/${e.id}`}>performance review</Link></td>
                        <td><Link to={`/delemployee/${e.id}`}>delete employee</Link></td>
                    </tr>
                  )
                })}
              </table>
            </div>
          
          <br />
          <h1>Add employee</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder='write employee name here' />      
            <div class="data-btn">
              <button>add employee</button>
            </div>
          </form>

        </div>
      </Layout>
    )
  }
}

export default Employees
