import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

function Home (){
  return (
    <Layout>
      <div class="page-data">
        <h1>Performance review</h1>  
        <p>This application is a basic employee performance review tool.</p>
        <p>It has the following functionality:</p>
        <ul>
          <li><Link to='/employees'>List all employees</Link></li>
          <li>Add/remove/update/view employees</li>
          <li>Add/update/view performance reviews</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
