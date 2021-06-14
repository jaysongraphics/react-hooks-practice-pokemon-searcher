import React from "react";

function Search({searchTerm, handleTermChange}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        value={searchTerm} 
        onChange={handleTermChange}
        placeholder ="Type pokemon here..."
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
