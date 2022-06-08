import React from 'react'
import "./Nav.scss"
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/projects">
        PROJECTS
      </Link>

      <Link className="nav-menu__item" to="/new-project">
        ADD A PROJECT
      </Link>
    </div>
  )
}

export default Nav