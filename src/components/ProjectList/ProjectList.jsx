import React from 'react'
import "./ProjectList.scss"

const ProjectList = (props) => {
  return (
    <>
      <h2 className="heading">All of Hope's crochet projects...</h2>
      <div className="container">
        {props.projects && props.projects.map(project => <Greeting key={project.id} project={project} />)}
      </div>
    </>
  )
}

export default ProjectList