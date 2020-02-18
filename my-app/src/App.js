import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Cast from './components/Cast';
import About from './components/About';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      <Route render={({ location }) => {
        return (
          <TransitionGroup component={null}>
            <CSSTransition timeout={{enter: 200, exit: 200}} key={location.key} classNames={'slide'}>
              <Switch location={location}>
                <Route path='/' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} />
                <Route path='/home' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} />
                <Route path='/movie' exact component={Movie} />
                <Route path='/movielist' exact component={MovieList} />
                <Route path='/cast' exact component={Cast} />
                <Route path='/about' exact component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
      />
      </div>
    );
  }
}

  export default App;
