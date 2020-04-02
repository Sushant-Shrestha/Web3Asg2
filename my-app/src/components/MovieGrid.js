import React, {useState} from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MovieRow from './MovieRow';
import MovieCard from './MovieCard';
import Paper from '@material-ui/core/Paper';


export default class MovieMatches extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            titleFilter: 'fa-sort',
            yearFilter: 'fa-sort',
            ratingFilter: 'fa-sort'
        }
    }

    addFav = (e) => {
        this.props.addToFavourites(e)
    }

    setViewing = (mov) => {
        this.props.setViewing(mov);
    }

    // setViewedMovie = () =>{
    //     this.props.movieViewed =
    // }
    sortTitle = () => {
        this.resetIcons();
        if (this.state.titleFilter === 'fa-sort-asc' || this.state.titleFilter === 'fa-sort') {
            this.setState({ titleFilter: 'fa-sort-desc'})
            this.props.toggleTitleFilter();
        } else if (this.state.titleFilter === 'fa-sort-desc') {
            this.setState({ titleFilter: 'fa-sort-asc' })
            this.props.toggleTitleFilter();
        }
    }

    sortYear = () => {
        this.resetIcons();
        if (this.state.yearFilter === 'fa-sort-asc' || this.state.yearFilter === 'fa-sort') {
            this.setState({ yearFilter: 'fa-sort-desc'})
            this.props.toggleYearFilter();
        } else if (this.state.yearFilter === 'fa-sort-desc') {
            this.setState({ yearFilter: 'fa-sort-asc' })
            this.props.toggleYearFilter();
        }
    }

    sortRating = () => {
        this.resetIcons();
        if (this.state.ratingFilter === 'fa-sort-asc' || this.state.ratingFilter === 'fa-sort') {
            this.setState({ ratingFilter: 'fa-sort-desc'})
            this.props.toggleRatingFilter();
        } else if (this.state.ratingFilter === 'fa-sort-desc') {
            this.setState({ ratingFilter: 'fa-sort-asc' })
            this.props.toggleRatingFilter();
        }
    }

    resetIcons = () => {
        this.setState({ titleFilter: 'fa-sort', yearFilter: 'fa-sort', ratingFilter: 'fa-sort'})
    }
    
    render() {

        return (

            <div style= {{
                padding: '1em'
            }}>
            <Grid container spacing={2} className="gridContainer">
                <Grid item xs={12}>
                    <Grid
                      container
                      spacing={4}
                      direction="row"
                      justify="space-around"
                      alignItems="flex-start"
                      alignContent="stretch"
                      wrap="wrap"
                    >
                    {this.props.movies.map((movie, index) => (
                        <Grid key={index} props={movie} addToFavourites={(this.addFav)} setViewing={this.setViewing} item s={2}>
                            <MovieCard props={movie} key={index} addToFavourites={(this.addFav)} setViewing={this.setViewing}/>
                        </Grid>
                    ))}
                      
                    </Grid>

                </Grid>
              
            </Grid>
            </div>
        )
    }
}