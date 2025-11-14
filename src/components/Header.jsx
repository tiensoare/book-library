import React from "react";
import SearchArea from "./SearchArea.jsx";

/**
 * This is the header of the app in the HOME page
 * @param {*} props functions and error (if possible) passed from Home
 * @returns a header that contains title and search area and 
 * shows error when the user search with an empty keyword
 */
const Header = (props) => {
  return (
    <div className="main-header">

        <div className="header">
          <h1>Find your books of life here.</h1>
        </div>
      
      <div className="search-bar">
        <SearchArea 
          searchBook={props.searchBook} 
          handleSearch={props.handleSearch} 
          handleSort={props.handleSort} 
          handleSubmit={props.handleSubmit} 
          resetInput={props.resetInput} 
        />
      </div>

      <div className="books_error">
        {props.error && <h2>{props.error}</h2>}
      </div> 

    </div>
  );    
}

export default Header;
