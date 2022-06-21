import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav';
import "./Dashboard.scss"
import Home from '../../components/Home/Home';
import ProjectList from '../../components/ProjectList/ProjectList';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);


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

    const toggleSearch = () => {
        console.log(showSearch);
        setShowSearch(!showSearch);
      };

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
      };
    
    //   const filteredProjects = projects.filter(project => {
    //     const projectNameLower = project.name.toLowerCase();
    //     return projectNameLower.includes(searchTerm);
    //   })

    const filteredProjects = projects.filter((project) => {
        return project.name.toLowerCase().includes(searchTerm);
    }) 

  return (
    <div>
        <Nav toggleSearch={toggleSearch} searchTerm={searchTerm} handleInput={handleInput} searchResultCount={filteredProjects.length} />
        <Home />
        <ProjectList filteredProjects={filteredProjects} />
        
    </div>
            
        
  )
}

export default Dashboard