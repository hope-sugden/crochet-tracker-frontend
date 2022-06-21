import React, { useState } from 'react'
import "./ProjectList.scss"
import Project from "../Project/Project";
import Form from '../Form/Form';

const ProjectList = ({filteredProjects}) => {
  const [showAddBox,setShowAddBox] = useState(false);

  const toggleAddBox = () => {
    setShowAddBox(!showAddBox);
  }
  return (
    <div id ="projects">
    {showAddBox && <Form toggleAddBox={toggleAddBox} />}
      <h2 className="heading">Crochet projects</h2>
      <div className="container">
        {filteredProjects && filteredProjects.map(project => <Project key={project.projectId} project={project} />)}
        <button className='add-button' onClick={toggleAddBox}>+</button>
      </div>
    </div>
  )
}

export default ProjectList