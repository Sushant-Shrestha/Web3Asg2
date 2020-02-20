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
import * as cloneDeep from 'lodash/cloneDeep';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: "",
      movieList: [],
      isFetching: false,
      animationComplete: true,
      favourites: []
    }
  }

  async componentDidMount() {
    this.setState({ isFetching: true });
    let movies = JSON.parse(localStorage.getItem('movieList') || '[]');
    this.setState({ movieList: movies });
    if (localStorage.getItem("movieList") === null) {
      try {
        let url = 'http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
        if (this.state.movieList.length === 0) {
          const response = await fetch(url);
          const jsonData = await response.json();
          this.setState({ movieList: jsonData, isFetching: false })
          localStorage.setItem("movieList", JSON.stringify(jsonData));
        }
      } catch (error) {
        console.error(error);
      }
    }
    this.setState({ isFetching: true });
  }

  updateSearchTerm = (searchString) => {
    this.setState({ searchTerm: searchString });
  }

  addToFavourites = (movie) => {
    const copyFavourites = cloneDeep(this.state.favourites);
    const newFav = movie;
    let isFound = this.state.favourites.find(fav => fav.id === newFav.id);
    if (isFound === undefined) {
      copyFavourites.push(newFav)
      this.setState({ favourites: copyFavourites })
    }
  }

  animationComplete = () => {
    this.setState({ animationComplete: true })
  }

  animationStart = () => {
    this.setState({ animationComplete: false })
  }

  render() {
    return (
      <div className="App">
        <Route render={({ location }) => {
          return (
            <TransitionGroup component={null}>
              <CSSTransition onEnter={this.animationStart} onEntered={this.animationComplete} timeout={{ enter: 200, exit: 100 }} key={location.key} classNames={'slide'}>
                <Switch location={location}>
                  <Route path='/' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} />
                  <Route path='/home' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} />
                  <Route path='/movie' exact component={Movie} />
                  <Route path='/movielist' exact render={(props) => <MovieList {...props} movies={this.state.movieList} addToFavourites={this.addToFavourites} searchTerm={this.state.searchTerm} anim={this.state.animationComplete} />} />
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
