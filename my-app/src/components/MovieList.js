import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';
import MovieMatches from './MovieMatches';
import styled from 'styled-components';
import Filter from './Filter';
import * as cloneDeep from 'lodash/cloneDeep';
import FilterAnimation from '../animation/FilterAnimation';
import MovieListAnimation from '../animation/MovieListAnimation';
import Favourites from './Favourites';
import MovieDetails from './MovieDetails';

class MovieList extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
        this.state = {
            movieList: [],
            hideFilter: false,
            hideFav: false,
            filteredMovies: [],
            componentLoaded: false,
            searchTerm: this.props.searchTerm,
            isFetching: true,
            isViewing: false,
            movieID: null,
            filterAnim: false,
            yearFilter: '',
            titleFilter: '',
            ratingFilter: ''
        }
    }


    componentDidUpdate(prevProps) {
        if (this.state.movieList.length === 0) {
            this.setState({ movieList: this.props.movies });
        }

        if (this.state.searchTerm !== '') {
            let list = cloneDeep(this.state.movieList);
            let tempList = list.filter((m) => m.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
            this.setState({ filteredMovies: tempList, searchTerm: '' });
        }

    }

    async componentDidMount() {
        if (this.state.filteredMovies.length === 0) {
            let movies = JSON.parse(localStorage.getItem('movieList') || '[]');
            this.setState({ movieList: movies, filteredMovies: movies });
            if (localStorage.getItem("movieList") === null) {
                try {
                    let url = 'http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
                    this.setState({ isFetching: true });
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    this.setState({ filteredMovies: jsonData, isFetching: false })
                    localStorage.setItem("movieList", JSON.stringify(jsonData));
                } catch (error) {
                    console.error(error);
                }
            }
        }

        this.setState({ filterAnim: false });
        if (this.state.hidefav === true && this.props.favs.length > 0) {
            this.setState({ hideFav: false })
        } else {
            this.setState({ hideFav: true })
        }
    }

    searchMovieTerm = () => {
        if (this.state.searchTerm !== "") {
            let filtered = this.state.filteredMovies.filter(movie => {
                return movie.title.match('/' + this.state.searchTerm + '/g');
            });
            this.setState({ filteredMovies: filtered })
        }
    }

    titleChange = (searchTerm) => {
        let list = cloneDeep(this.state.movieList);
        let tempList = list.filter((m) => m.title.toLowerCase().includes(searchTerm.toLowerCase()));
        this.setState({ filteredMovies: tempList, searchTerm: searchTerm.toLowerCase() });
    }

    filterTrigger = (list) => {
        this.setState({ filteredMovies: list });
    }

    // searchMovieTerm = () => {
    //     if (this.state.searchTerm !== "") {
    //         let filtered = this.state.filteredMovies.filter(movie => {
    //             return movie.title.match('/' + this.state.searchTerm + '/g');
    //         });
    //         this.setState({ filteredMovies: filtered })
    //     }
    // }

    resetFilters = () => {
        this.setState({ filteredMovies: this.state.movieList, searchTerm: '' })
    }

    hideTheFilter = () => {
        let hide = this.state.hideFilter;
        let newHide = !hide;
        setTimeout(() => {
            this.setState({ filterAnim: !hide })
        }, 2000);
        this.setState({ hideFilter: newHide });

    }

    setFetching = () => {
        this.setState({ isFetching: true })
    }

    toggleFavouriteView = () => {
        let fav = !this.state.hideFav;
        console.log(fav)
        this.setState({ hideFav: fav })
    }

    setViewing = (movie) => {
        this.setState({ isViewing: true });
        this.setState({ movieID: movie });
        // console.log({this.state.viewedMovie});
    }

    closeView = () => {
        this.setState({ isViewing: false });
        this.setState({ movieID: null });
    }

    filterTitleDesc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => b.title.localeCompare(a.title));
        this.setState({ filteredMovies: tempList, titleFilter: 'descending' });
    }

    filterTitleAsc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => a.title.localeCompare(b.title));
        this.setState({ filteredMovies: tempList, titleFilter: 'ascending' });
    }

    toggleTitleFilter = () => {
        if (this.state.titleFilter === 'ascending') {
            this.filterTitleDesc();
        } else if (this.state.titleFilter === 'descending') {
            this.filterTitleAsc();
        }

        if (this.state.titleFilter === '') {
            this.filterTitleDesc();
        }
    }

    filterYearDesc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => b.release_date.split('-')[0] - a.release_date.split('-')[0]);
        this.setState({ filteredMovies: tempList, yearFilter: 'descending' });
    }

    filterYearAsc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => a.release_date.split('-')[0] - b.release_date.split('-')[0]);
        this.setState({ filteredMovies: tempList, yearFilter: 'ascending' });
    }

    toggleYearFilter = () => {
        if (this.state.yearFilter === 'ascending') {
            this.filterYearDesc();
        } else if (this.state.yearFilter === 'descending') {
            this.filterYearAsc();
        }

        if (this.state.yearFilter === '') {
            this.filterYearDesc();
        }
    }

    filterRatingDesc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => b.ratings.average - a.ratings.average);
        this.setState({ filteredMovies: tempList, ratingFilter: 'descending' });
    }

    filterRatingAsc = () => {
        let list = cloneDeep(this.state.filteredMovies);
        let tempList = list.sort((a, b) => a.ratings.average - b.ratings.average);
        this.setState({ filteredMovies: tempList, ratingFilter: 'ascending' });
    }

    toggleRatingFilter = () => {
        if (this.state.ratingFilter === 'ascending') {
            this.filterRatinggDesc();
        } else if (this.state.ratingFilter === 'descending') {
            this.filterRatingAsc();
        }

        if (this.state.ratingFilter === '') {
            this.filterRatingDesc();
        }
    }


    render() {
        let imgUrl = "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        return (
            <RightDiv className='mainView' ref={this.componentRef} style={{ backgroundColor: 'var(--background-general)', width: '100%', display: 'flex', flexFlow: 'column' }}>

                <HeaderMenu openModal={this.props.openModal} hideTheFilter={this.hideTheFilter} setFetching={this.setFetching} toggleFavouriteView={this.toggleFavouriteView} />

                <FavDiv className='subView' props={this.state.hideFav}>
                    <Favourites favs={this.props.favs} removeFavourite={this.props.removeFavourite} toggleFavouriteView={this.toggleFavouriteView}/>
                </FavDiv>





                {
                    this.state.isViewing ? (
                        <MovieDetails closeView={this.closeView} id={this.state.movieID} />
                    ) : (
                        <div>
                            <MovFilter className='subView' props={this.state.hideFilter}>
                                {this.state.filterAnim ? (
                                    <FilterAnimation />
                                ) : (
                                        <Filter filteredList={this.state.filteredMovies} titleChange={this.titleChange} filterTrigger={this.filterTrigger} resetFilters={this.resetFilters} />
                                    )}

                            </MovFilter>
                            <MovList className='subView' props={this.state.hideFilter} style={{ height: '750px' }}>
                                {!this.props.anim ? (
                                    <div>
                                        <MovieListAnimation />
                                        <p>Loading...</p>
                                    </div>
                                ) : (
                                        <MovieMatches movies={this.state.filteredMovies} addToFavourites={this.props.addToFavourites} searchTerm={this.state.searchTerm} setViewing={this.setViewing} movieViewed={this.setViewedMovie} toggleTitleFilter={this.toggleTitleFilter} toggleYearFilter={this.toggleYearFilter} toggleRatingFilter={this.toggleRatingFilter} />
                                    )

                                }
                            </MovList>
                            </div>
                    )
                }



            </RightDiv>
        )
    }
}

// const MovList = styled.div`
// grid-row: 1;
// background-color: #E27D60;
//     grid-column: ${props => props.props ? "1 / 3" : "2 / 3"}
// `

// const MovFilter = styled.div`
//     grid-row: 1;
//     background-color: #E8A872;
//     display: ${props => props.props ? "none" : ""};
//     grid-column: 1/2;
//     legend {
//       text-color: red;  
//     }
// `

// const FavDiv = styled.div`
//     display: ${props => props.props ? "none" : ""};
// `

const MovList = styled.div`
    position: absoulte;
    margin: 0 5em;
    padding: 0 2em;
    background-color: #a6a6a6;

    
    height: ${props => props.props ? "90%" : "79%"}
`

const MovFilter = styled.div`
    margin: 0 2em;
    border-radius: 10px;
    grid-row: 1;

    background-color: #48D1CC;
    
    display: ${props => props.props ? "none" : ""};
    grid-column: 1/2;
    legend {
      text-color: red;  
    }
`

const FavDiv = styled.div`
    display: ${props => props.props ? "none" : ""};
    background-image: url('https://ak4.picdn.net/shutterstock/videos/20618434/thumb/1.jpg?ip=x480');
`


export default MovieList;