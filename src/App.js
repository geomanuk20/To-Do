import React from 'react';
import Todoapp from './componenet/todoapp';
import Header from './componenet/header/header';
import About from './componenet/About/about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Todoapp} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default App;


