import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input
      aria-label="Search Robots"
      className="pa3 ba br2 b--green bg-lightest-blue"
      type="search"
      placeholder="Search robots"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
