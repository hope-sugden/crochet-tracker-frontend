import React from 'react'
import "./Project.scss";

const Project = (props) => {

    const{
        name,
        difficulty,
        dateStarted,
        dateCompeted,
        notes
    } =props.project;
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>Difficulty: {difficulty}</p>
      <p>Date started: {dateStarted}</p>
      <p>Date completed: {dateCompeted}</p>
      <p>Noes: {notes}</p>
    </div>
  )
}

export default Project