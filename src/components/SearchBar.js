import React from "react";

const SearchBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg" id="nav">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            aria-label="Search"
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            placeholder="Ex. 'Yogurt'"
            id="search"
          />
          <button
            onClick={props.handleFormSearch}
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
            id="button"
          >
            Search
          </button>
        </form>
      </nav>
    )
};

export default SearchBar;
