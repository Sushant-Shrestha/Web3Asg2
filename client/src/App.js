import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      favourites: [],
      modalIsOpen: false,
      loggedIn: false
    }
  }

  async componentDidMount() {
    this.setState({ isFetching: true });
    //let movies = JSON.parse(localStorage.getItem('movieList') || '[]');
    //this.setState({ movieList: movies });
    // if (localStorage.getItem("movieList") === null) {
      try {
        // let moviesUrl = '/api/movies';
        //if (this.state.movieList.length === 0) {
          const response = await fetch('/api/movies');
          const jsonData = await response.json();
          this.setState({ movieList: jsonData, isFetching: false });
          //alocalStorage.setItem("movieList", JSON.stringify(jsonData));
        //}
      } catch (error) {
        console.error(error);
      }
    // }
    this.setState({ isFetching: true });

    // try {
    //   // let url = '/api/favorites';
    //   if (this.state.movieList.length === 0) {
    //     const resp =  await fetch('/api/favorites');
    //     const json =  await resp.json();
    //     this.setState({ favourites: json });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // let favs = JSON.parse(localStorage.getItem('favList') || '[]');
    // this.setState({ favourites: favs })

    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('favList', JSON.stringify(this.state.favourites));
    // })
  
  }

  // componentWillUnmount() {
  //   localStorage.setItem('favList', JSON.stringify(this.state.favourites));
  // }

  updateSearchTerm = (searchString) => {
    // this.fetchFavList;
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

  removeFavourite = (movie) => {
    const copyFavourites = cloneDeep(this.state.favourites);
    let isFoundIndex = this.state.favourites.findIndex(fav => fav.id === movie.id);
    copyFavourites.splice(isFoundIndex, 1);
    if (isFoundIndex !== undefined) {
      this.setState({ favourites: copyFavourites })
    }
  }

  animationComplete = () => {
    this.setState({ animationComplete: true })
  }

  animationStart = () => {
    this.setState({ animationComplete: false })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  redirectToLogin =() => {
      window.location.href = 'https://mysterious-reaches-90427.herokuapp.com/';
      this.setState({ loggedIn: true});
  }

  // fetchFavList = () => {
  //   try {
  //     let url = '/api/favorites';
  //     if (this.state.movieList.length === 0) {
  //       const response =  await fetch(url);
  //       const jsonData =  await response.json();
  //       this.setState({ favourites: jsonData });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    return (
      <div className="App">
        
        <About isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
        <Route render={({ location }) => {
          return (
                <Switch location={location}>
                  {!this.state.loggedIn ? 
                  (<Route path='/' exact render={this.redirectToLogin} />)
                  :
                  (<Route path='/' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} />)}
                  {/* <Route path='/' exact render={(props) => <Home searchHandler={this.updateSearchTerm} />} /> */}
                  {/* <Route path='/' exact render={this.redirectToLogin} /> */}
                  <Route path='/home' exact render={(props) => <Home searchHandler={this.updateSearchTerm} searchTerm={this.state.searchTerm} />} />
                  <Route path='/movie' exact component={Movie} />
                  <Route path='/movielist' exact render={(props) => <MovieList className='mainView' {...props} movies={this.state.movieList} addToFavourites={this.addToFavourites} removeFavourite={this.removeFavourite} searchTerm={this.state.searchTerm} anim={this.state.animationComplete} favs={this.state.favourites} openModal={this.openModal}/>} />
                  <Route path='/cast' exact component={Cast} />
                  {/* <Route path='/about' exact component={About} /> */}
                </Switch>
          );
        }}
        />
      </div>
    );
  }
}

export default App;
