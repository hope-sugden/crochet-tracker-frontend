import React, { useEffect, useState } from 'react'
import whiteCross from "../../assets/images/white_cross.svg";
import "./UpdateProject.scss";

const UpdateProject = ({name,difficulty,dateCompleted,dateStarted,notes,projectId,toggleUpdateBox}) => {
    const [project, setProject] = useState({
      projectId: projectId,
    name: name,
    difficulty: difficulty,
    dateStarted: dateStarted,
    dateCompleted: dateCompleted,
    notes: notes
})

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://crochet-tracker-gl7dtbm7qq-nw.a.run.app/crochet/projects/' + projectId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
  },
  body: JSON.stringify(project)
})
.then((response) => response.json())
.then((json => console.log(json)
  ))
.catch(err => console.log(err))
e.target.reset();
console.log("project updated", project);
}
useEffect(()=> {

}, [handleSubmit]);
        
  
return (
<div className="update-form">
    <div className="update-form__content">
    <img src={whiteCross} alt="Close info" className="update-form__cross" onClick={toggleUpdateBox} />
  <h2>Update project: {name}</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" defaultValue={name} onInput={(e) => setProject({ ...project, name: e.target.value })} />
    <input type="text" defaultValue={difficulty} onInput={(e) => setProject({ ...project, difficulty: e.target.value })} />
    <input type="text" defaultValue={dateStarted} onInput={(e) => setProject({ ...project, dateStarted: e.target.value })} />
    <input type="text" defaultValue={dateCompleted} onInput={(e) => setProject({ ...project, dateCompleted: e.target.value })} />
    <input type="text" defaultValue={notes} rows={4} onInput={(e) => setProject({ ...project, notes: e.target.value })} />
    <button type="submit" className="btn" >Submit</button>
  </form>
  </div>
</div>
)
}

export default UpdateProject