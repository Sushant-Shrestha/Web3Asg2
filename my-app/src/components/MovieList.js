import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';
import MovieMatches from './MovieMatches';
import styled from 'styled-components';
import Filter from './Filter';
import * as cloneDeep from 'lodash/cloneDeep';

class MovieList extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
        this.state = {
            movieList: [],
            hideFilter: false,
            filteredMovies: [],
            componentLoaded: false,
            isFetching: true
        }
    }

    // componentDidMount() {
    //     this.setState({ movieList: this.props.movies, filteredMovies: this.props.movies })
    // }

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
    }

    titleChange = (searchTerm) => {
        let list = cloneDeep(this.state.movieList);
        let tempList = list.filter((m) => m.title.toLowerCase().startsWith(searchTerm.toLowerCase()));
        this.setState({ filteredMovies: tempList });
    }

    filterTrigger = (list) => {
        this.setState({ filteredMovies: list});
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
        this.setState({ filteredMovies: this.state.movieList })
    }

    hideTheFilter = () => {
        let hide = this.state.hideFilter;
        let newHide = !hide;
        this.setState({ hideFilter: newHide });
    }

    setFetching = () => {
        this.setState({ isFetching: true })
    }

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        return (
            <RightDiv ref={this.componentRef} style={{
                height: '800px',
                width: "1920px",
            }}>
                <button onClick={this.hideTheFilter}>True</button>
                <HeaderMenu />
                <Link to='/'>
                    <button onClick={this.setFetching}>Show All Movies</button>
                </Link>

                <Link to='/movie'>
                    <button>Select Movie</button>
                </Link>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                    <MovList props={this.state.hideFilter}>
                        {!this.props.anim ? (
                            <p>Rendering</p>
                        ) : (
                                <MovieMatches movies={this.state.filteredMovies} />
                            )

                        }
                        </MovList>
                    {<Filter filteredList={this.state.filteredMovies} titleChange={this.titleChange} filterTrigger={this.filterTrigger} resetFilters={this.resetFilters}/>}
                    {/* <MovieMatches /> */}
                    {/* </MovFilter> */}
                </div>

            </RightDiv>
        )
    }
}

const MovList = styled.div`
grid-row: 1;
background-color: green;
    grid-column: ${props => props.props ? "1 / 3" : "2 / 3"}
`

const MovFilter = styled.div`
    grid-row: 1;
    background-color: cyan;
    display: ${props => props.props ? "none" : ""};
    grid-column: 1/2;
`

const fullScreen = styled.div`
    grid-column: 1/3;
`

const splitScreenMajority = styled.div`
    grid-column: 2/3;
`

const splitScreenMinority = styled.div`
    grid-column: 1/2;
`




export default MovieList;