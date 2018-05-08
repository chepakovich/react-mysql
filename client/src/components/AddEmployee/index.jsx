import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

class OneEmployee extends Component {
  state = {
    employees: []
  }
  
  handleSubmit = (event) => {
    EmployeeService.editEmployee(this.state.targetEmployee.id, this.state.feedback)
      .then(response => {
        alert('New employee has been added')
      })
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({feedback: event.target.value})
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




  render () {
    const targetEmployee = this.state.targetEmployee || {}
    return (
      <Layout>
        <h2>Add employee</h2>
        <form onSubmit={this.handleSubmit} className='column is-half'>
          <div className="field">
            <label className='label'>Employee ID: {targetEmployee.id}</label>
            <p>Employee name:</p>
            <input type="text" onChange={this.handleChange} className='text' placeholder={targetEmployee.name} />
          </div>         
          <div className='buttons is-right'>
            <button className='button is-primary'>Submit</button>
          </div>
        </form>
      </Layout>
    )
  }
}

export default OneEmployee
