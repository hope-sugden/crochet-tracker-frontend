import React, { useState } from 'react'
import "./ProjectList.scss"
import Project from "../Project/Project";
import Form from '../Form/Form';

const ProjectList = (props) => {
  const [showAddBox,setShowAddBox] = useState(false);

  const toggleAddBox = () => {
    setShowAddBox(!showAddBox);
  }
  return (
    <>
    {showAddBox && <Form toggleAddBox={toggleAddBox} />}
      <h2 className="heading">Crochet projects</h2>
      <div className="container">
        {props.projects && props.projects.map(project => <Project key={project.projectId} project={project} />)}
        <button className='add-button' onClick={toggleAddBox}>+</button>
      </div>
    </>
  )
}

export default ProjectList