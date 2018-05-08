import React from 'react'
import { Link } from 'react-router-dom'

function Layout (props) {
  return (
    <div>
      <nav>
        <Link to='/employees'><h2>list of employees</h2></Link>
      </nav>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
