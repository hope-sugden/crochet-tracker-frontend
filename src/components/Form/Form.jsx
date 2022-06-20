import React, { useState } from 'react'
import "./Form.scss"
import whiteCross from "../../assets/images/white_cross.svg"

const Form = ({toggleAddBox}) => {
    const [project, setProject] = useState({
        name: "",
        difficulty: "",
        dateStarted: "",
        dateCompleted: "",
        notes: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://crochet-tracker-gl7dtbm7qq-nw.a.run.app/crochet/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }
            
      
  return (
    <div className="log-form">
      <div className='log-form__content'>
        <img src={whiteCross} alt="Close Add Project" className='log-form__cross' onClick={toggleAddBox}/>
      <h2>Add A New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="project name" onInput={(e) => setProject({ ...project, name: e.target.value })} />
        <input type="text" placeholder="difficulty" onInput={(e) => setProject({ ...project, difficulty: e.target.value })} />
        <input type="text" placeholder="date started" onInput={(e) => setProject({ ...project, dateStarted: e.target.value })} />
        <input type="text" placeholder="date completed" onInput={(e) => setProject({ ...project, dateCompleted: e.target.value })} />
        <input type="text" placeholder="notes" onInput={(e) => setProject({ ...project, notes: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Form