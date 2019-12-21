import React from "react";

function SearchForm(){
  return(
    <div className="p-5 bg-secondary">
    <h1>Search Books</h1>
    <form>
      <div className="form-group">
       <input type="text" className="form-control" id="search" placeholder="Search"/>
      </div>
      <button className="btn btn-primary d-block ml-auto">Search</button>
    </form>
    </div>
  )
};

export default SearchForm;