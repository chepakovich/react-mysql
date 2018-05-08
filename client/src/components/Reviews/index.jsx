import React, { Component } from 'react'
import Layout from '../../shared/Layout'
import Header from '../../shared/Header'
import SelfAssessment from './SelfAssessment'
import FeedbackList from './FeedbackList'
import * as AuthService from '../../shared/AuthService'
import * as EmployeeService from '../../shared/EmployeeService'

class Reviews extends Component {
  state = {
    user: {},
    review: [], 
    feedback: []
  }

  componentDidMount () {
    
    // todo: proper auth

    const { match: { params } } = this.props;
    const id = params.userid || 1

    EmployeeService.getEmployees()
      .then(({data}) => {
        const user = data.find(u => u.id === +id)
        this.setState({user})
        AuthService.setCurrentUser(user.id)
      })

    EmployeeService.getReview()
      .then(({data}) => this.setState({review: data}))

    EmployeeService.getFeedback()
      .then(({data}) => this.setState({feedback: data}))
  }

  handleSubmit = (event) => {
    EmployeeService.updateReview(this.state.review)
      .then(() => {
        // todo: proper notification
        alert('Review has been saved')
      })

    event.preventDefault()
  }

  handleChange = (event) => {
    const review = this.state.review
    review.find(q => q.id === +event.target.name).response = event.target.value

    this.setState({review})
  }

  onChangeUser = (event) => {
    AuthService.setCurrentUser(event.target.value)
    this.props.history.push(`/reviews/${event.target.value}`)
    window.location.reload()
  }

  render () {
    return (
      <Layout>

        <Header
          user={this.state.user}
          onChangeUser={this.onChangeUser} />

        <div className="columns">

          <SelfAssessment
            review={this.state.review}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange} />
          
          <FeedbackList
            data={this.state.feedback} />
            
        </div>

      </Layout>
    )
  }
}

export default Reviews
