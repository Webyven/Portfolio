import React from 'react'
import {Link} from 'react-router-dom'

function Projects(): React.ReactElement {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <p>This is the Projects page.</p>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default Projects
