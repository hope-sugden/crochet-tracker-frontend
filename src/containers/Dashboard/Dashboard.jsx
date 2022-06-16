import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    }, []);

  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/crochet-tracker-frontend/" element={<Home />} />
            <Route path="/projects" element={<ProjectList projects={projects} />} />
            <Route path="/new-project" element={<Form />} />
        </Routes>

    </Router>
  )
}

export default Dashboard