import React, { useState } from 'react'
import "./Nav.scss"
import {Link} from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';

const Nav = ({searchTerm,handleInput,searchResultCount}) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };
  
  return (
    <>
      <div className="nav-menu">
      
        <a className="nav-menu__item" href="#projects">
          Projects
        </a>

        <a className="nav-menu__item" onClick={toggleSearch}>
          Search
        </a>
        </div>
        <div>
      {showSearch && <SearchBox toggleSearch={toggleSearch} searchTerm={searchTerm} handleInput={handleInput} searchResultCount={searchResultCount} />}
    </div>
    </>
  )
}

export default Nav