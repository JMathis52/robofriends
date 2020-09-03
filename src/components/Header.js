import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div className="flex flex-column items-center justify-center vh-25">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.props.searchChange} />
      </div>
    );
  }
}

export default Header;
