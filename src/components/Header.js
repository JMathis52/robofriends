import React from 'react';
import SearchBox from './SearchBox';

function Header(props) {
  return (
    <div className='flex flex-column items-center justify-center vh-25'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox searchChange={props.searchChange} />
    </div>
  );
}

export default Header;
