import React from 'react'
import {Link} from 'react-router-dom'

function About(): React.ReactElement {
  return (
    <div className='about h-screen flex flex-col items-center justify-center'>
      <h1>About</h1>
      <p>This is the About page.</p>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default About
