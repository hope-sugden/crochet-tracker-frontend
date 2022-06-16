import React from 'react'
import "./Nav.scss"
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/crochet-tracker-frontend/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/projects">
        Projects
      </Link>

      <Link className="nav-menu__item" to="/new-project">
        Add A Project
      </Link>
    </div>
  )
}

export default Nav