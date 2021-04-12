import React from 'react'

const SearchField = () => {
    return (
    <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Search for products..." aria-label="Username" aria-describedby="basic-addon1"/>
        <span role="button" className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
    </div>
    );
}

export default SearchField;