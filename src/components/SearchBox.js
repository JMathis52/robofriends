import React, { Fragment } from 'react';

const SearchBox = ({ searchField, searchChange }) => {

    return (
        <Fragment>
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search robots" 
                onChange={searchChange}
            />
        </Fragment>
    )
}

export default SearchBox;
