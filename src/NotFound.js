import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404- Not Found!</h1>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default NotFound