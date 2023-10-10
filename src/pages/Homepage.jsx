import React from 'react'
import NavPage from '../components/NavPage'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <NavPage/>
      Homepage
      <Link to={"/app"}>go to the app</Link>
      </div>
  )
}

export default Homepage