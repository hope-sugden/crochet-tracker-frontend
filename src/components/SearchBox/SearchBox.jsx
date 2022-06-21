import React from 'react'
import "./SearchBox.scss";

const SearchBox = ({searchTerm, handleInput,searchResultCount}) => {
    const searchResults = searchResultCount === 1 ? "1 project found" :
  (searchResultCount >1 ? searchResultCount +" projects found" : "No match found!")
  return (
    <form className="search-box">
        <div className="search-box__search">
            <input placeholder="Search By Name" type="text" value={searchTerm} onInput={handleInput} className="search-box__input"/>
            <p className="search-box__results">{searchResults}</p>
        </div>
        </form>
  )
}

export default SearchBox;