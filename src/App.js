import React from 'react';

import './App.css';
import NavBar from './components/NavigationBar';
import Content from './components/Content';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <NavBar className="navbar"/>
      <Main/>
    </div>
  );
}

export default App;
