import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [searchField, setSearchField] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons')
      .then((res) => res.json())
      .then((data) => {
        setRobots(data.data);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setFilteredRobots(
      robots.filter((robot) => {
        const name = robot.firstname + ' ' + robot.lastname;
        return name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [robots, searchField]);

  return isLoading ? (
    <h1 className='tc'>LOADING</h1>
  ) : (
    <div className='tc'>
      <Header searchChange={(e) => setSearchField(e.target.value)} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
