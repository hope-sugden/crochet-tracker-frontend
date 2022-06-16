import React, { useEffect, useState } from 'react'
import UpdateProject from '../UpdateProject/UpdateProject';
import "./Project.scss";

const Project = (props) => {

    const{
      projectId,
        name,
        difficulty,
        dateStarted,
        dateCompleted,
        notes
    } =props.project;
    const [showUpdateBox,setShowUpdateBox] = useState(false);

    const toggleUpdateBox = () => {
      setShowUpdateBox(!showUpdateBox);
    }

    const deleteProject = () => {
      fetch("https://crochet-tracker-gl7dtbm7qq-nw.a.run.app/crochet/" + projectId, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((json => console.log(json)))
  .catch(err => console.log(err));
  console.log("deleted");
}
useEffect( () => {

}, [deleteProject]);

  return (
    <div className="project">
      {showUpdateBox && <UpdateProject toggleUpdateBox={toggleUpdateBox} name = {name} difficulty={difficulty} dateStarted={dateStarted} dateCompleted={dateCompleted} notes={notes} projectId={projectId} />}
      <h3>{name}</h3>
      <p>Difficulty: {difficulty}</p>
      <p>Date started: {dateStarted}</p>
      <p>Date completed: {dateCompleted}</p>
      <p>Notes: {notes}</p>
      <button type='button' className='deleteButton' onClick={deleteProject}>Delete</button>
      <button type='button' className='updateButton' onClick={toggleUpdateBox}>Update</button>
    </div>
  )
}

export default Project