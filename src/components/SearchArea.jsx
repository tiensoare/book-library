import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 * @param {*} props passed functions to handle search and sort
 * @returns a search area that contains an input place, search, and sort buttons
 */
const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form 
        onSubmit={(e) => {
          if (e && e.preventDefault) e.preventDefault();
          if (props.searchBook) props.searchBook(e);
        }}
        id="input-form"
      >

        <input 
          type="text"
          onChange={(e) => {
            if (e && e.target) {
              props.handleSearch(e);
            }
          }} 
          placeholder={'Enter a keyword to search...'} 
        />
        
        <button type="submit" className="btn search-btn btn-lg btn-light"><i className="fas fa-search"></i></button>
        
        <select defaultValue="Sort" onChange={props.handleSort} className="sort-btn browser-default custom-select">
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      
      </form>
    </div>
  );
}
export default SearchArea;
