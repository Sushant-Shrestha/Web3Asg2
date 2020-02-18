import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Cast from './components/Cast';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ""
    }
  }

  updateSearchTerm = (searchString) => {
    this.setState({ searchTerm: searchString });
  }

  render() {
    return (
      <div className="App">
        <Route path='/' exact render={(props) => <Home searchHandler={this.updateSearchTerm}/>} />
        <Route path='/home' exact render={(props) => <Home searchHandler={this.updateSearchTerm}/>} />
        <Route path='/movie' exact component={Movie}/>
        <Route path='/movielist' exact component={MovieList}/>
        <Route path='/cast' exact component={Cast}/>
        {/* <Route path='/home' exact component={Home} /> */}
        {/* just testing stuff for now*/}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
