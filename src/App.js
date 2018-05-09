import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='sidebar'>
          <Link to='#about'> About Ryan </Link> {' '}
          <Link to='#portfolio'> Portfolio </Link> {' '}
          <Link to='#skills'> Skills </Link>
        </nav>
        <About />
        <Portfolio />
        <Skills />
      </div>
    );
  }
}

export default App;
