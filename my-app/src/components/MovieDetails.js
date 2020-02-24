import React from 'react';
import styled from 'styled-components';
import Production from './Production';
import Cast from './Cast';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            overview: "",
            ratings: [],
            companies: [],
            countries: [],
            keywords: [],
            genres: [],
            cast: [],
            crew: [],
            viewingCast: false,
            newView: false,
            castID: ""
        }
    }

    async componentDidMount() {
        try {
            let url = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=` + this.props.id;
            const response = await fetch(url);
            const jsonData = await response.json();

            this.setState({ movie: jsonData, overview: jsonData.details.overview, ratings: jsonData.ratings, companies: jsonData.production.companies, countries: jsonData.production.countries, keywords: jsonData.details.keywords, genres: jsonData.details.genres, cast: jsonData.production.cast, crew: jsonData.production.crew });
        } catch (error) {
            console.log(error);
        }

    }

    normalView = () => {
        this.props.closeView();
    }

    setViewCast = (id) => {
        this.setState({ viewingCast: true });
        this.setState({ castID: id });
        // console.log(this.state.castID);
    }

    closeView = () => {
        this.setState({ viewingCast: false, castID: null });
    }

    updateViewCast = (id) => {
        this.closeView();
        this.setViewCast(id);

        // this.setState({ castID: id });

        console.log(this.state.castID);
    }

    render() {
        return (
            <div>
                {this.state.viewingCast ? (<div>

                    <Cast id={this.state.castID} cast={this.state.cast} crew={this.state.crew} closeView={this.closeView} setViewCast={this.setViewCast} updateViewCast={this.updateViewCast} />
                </div>)
                    : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr  ', gridColumn: 'span 1' }}>



                            <LeftMovieDetails> <div className="movieDetails">
                                <h2>{this.state.movie.title}</h2>
                                <img src={"https://image.tmdb.org/t/p/w342/" + this.state.movie.poster} />
                            </div>
                            </LeftMovieDetails>

                            <RightMovieDetails>
                                <button onClick={this.normalView}> CLOSE VIEW</button>

                                <div>
                                    <BoxDetails> Release date - {this.state.movie.release_date} <br /></BoxDetails>

                                    <BoxDetails>Revenue - ${this.state.movie.revenue} <br /></BoxDetails>
                                    <BoxDetails> Runtime - {this.state.movie.runtime}m <br /></BoxDetails>
                                    <BoxDetails> Tagling - {this.state.movie.tagline} <br /></BoxDetails>
                                    <BoxDetails> <a href={"https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id}> TMDB LINK</a> <br /></BoxDetails>
                                    <BoxDetails> <a href={"https://www.imdb.com/title/" + this.state.movie.imdb_id}>IMDB LINK</a> <br /> </BoxDetails>
                                    <BoxDetails> Overview -{this.state.overview} <br /> </BoxDetails>
                                    <BoxDetails> Popularity-{this.state.ratings.popularity} <br /></BoxDetails>
                                    <BoxDetails> Average- {this.state.ratings.average} <br /></BoxDetails>
                                    <BoxDetails> Count-{this.state.ratings.count} <br /></BoxDetails>

                                    <BoxDetails>Companies - {this.state.companies ? (<div> {this.state.companies.map((c, index) => {
                                        return c.name
                                    })} </div>) : (<div>
                                        Companies are not available
                                    </div>)}</BoxDetails>

                                    <BoxDetails>Countries - {this.state.countries ? (<div> {this.state.countries.map((c, index) => {
                                        return c.name
                                    })} </div>) : (<div>
                                        Countries are not available
                                    </div>)}</BoxDetails>
                                    {/* Countries - {this.state.countries.map((c, index) => {
                                        return c.name
                                    })} <br /> */}

                                    <BoxDetails>Keywords - {this.state.keywords ? (<div> {this.state.keywords.map((c, index) => {
                                        return c.name
                                    })} </div>) : (<div>
                                        Keywords are not available
                                    </div>)}</BoxDetails>
                                    {/* Keywords - {this.state.keywords.map((c, index) => {
                                        return c.name
                                    })} <br /> */}

                                    <BoxDetails>Genres - {this.state.genres ? (<div> {this.state.genres.map((c, index) => {
                                        return c.name
                                    })} </div>) : (<div>
                                        Genres are not available
                                    </div>)}</BoxDetails>

                                    {/* Genres - {this.state.genres.map((c, index) => {
                                        return ", " + c.name 
                                    })} <br /> */}
                                </div>

                            </RightMovieDetails>

                            <ProductionList>
                                <div>

                                    {/* <Production cast={this.state.cast} crew={this.state.crew} setViewCast={this.setViewCast} closeView={this.closeView}></Production> */}
                                    <h2> Production</h2>
                                    <u>Cast</u> <br />
                                    {this.state.cast.map((c, index) => {
                                        return <Production key={index} setViewCast={this.setViewCast} person={c} closeView={this.closeView} updateViewCast={this.updateViewCast} />
                                    })}
                                </div>
                            </ProductionList>
                        </div>

                    )}
            </div>
        );
    }
}

// const Movie = styled.div`
//     background-color: green;
//     padding: 3em;,
//     grid-row: 2;
// `;
const BoxDetails = styled.div`
background-color: white;
margin: 0px 10px 5px 10px;
`;
const LeftMovie = styled.div`
    padding: 3em;
    margin: 2em;
    dispay:grid;
    gridTemplateColumns: 1fr 2fr;
    gridColumn: span;
`;
const LeftMovieDetails = styled.div`
  background-color: red;
`;

const RightMovieDetails = styled.div`
   background-color: lightblue
   
`;

const ProductionList = styled.div`
    background-color: yellow;
    justify-items: stretch;
    grid-column: span 2;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    grid-column: span 1;
`

export default MovieDetails;