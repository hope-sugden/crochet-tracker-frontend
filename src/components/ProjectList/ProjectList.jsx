import React from 'react'
import "./ProjectList.scss"
import Project from "../Project/Project";

const ProjectList = (props) => {
  return (
    <>
      <h2 className="heading">All of Hope's crochet projects...</h2>
      <div className="container">
        {props.projects && props.projects.map(project => <Project key={project.id} project={project} />)}
      </div>
    </>
  )
}

export default ProjectList