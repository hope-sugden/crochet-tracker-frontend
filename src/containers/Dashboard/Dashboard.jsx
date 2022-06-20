import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav';
import "./Dashboard.scss"
import Home from '../../components/Home/Home';
import Form from '../../components/Form/Form';
import ProjectList from '../../components/ProjectList/ProjectList';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        fetch('https://crochet-tracker-gl7dtbm7qq-nw.a.run.app/crochet/projects', {
            method: "GET",
            headers: {
                'Content-Type':"application/json"
            },

        })
        .then(res => {
            if(!res.ok){
                console.log(res);
                throw new Error(`${res.status}`)
            }
           return res.json()})
        .then(json => setProjects(json))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProjects();
    }, [getProjects]);

  return (
    <div>
        <Home />
        <ProjectList projects={projects} />
        
    </div>
            
        
  )
}

export default Dashboard