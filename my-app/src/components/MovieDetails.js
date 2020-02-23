import React from 'react';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            overview: ""
            
        }
    }

    async componentDidMount() {
        try{
            let url = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=` + this.props.id;
            const response = await fetch(url);
            const jsonData = await response.json();
    
            this.setState({ movie: jsonData, overview: jsonData.details.overview});
            console.log(this.state.movie);
            // console.log(this.state.movie.details.overview);
    
        } catch (error){
            console.log(error);
        }
       
    }
    normalView = () => {
        this.props.closeView();
    }

    render() {
        return (

            <div>
                <button onClick={this.normalView}> CLOSE VIEW</button>
                <div className="movieDetails">
                    <h2>{this.state.movie.title}</h2>
                    <img src={"https://image.tmdb.org/t/p/w342/" + this.state.movie.poster} />
                    <div>
                        <p>
                            {this.state.movie.release_date} <br/>
                            ${this.state.movie.revenue} <br/>
                            {this.state.movie.runtime}m <br/>
                            {this.state.movie.tagline} <br/>
                            <a href={"https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id}> TMDB LINK</a> <br/>
                            <a href={"https://www.imdb.com/title/" + this.state.movie.imdb_id}>IMDB LINK</a> <br/>
                            {
                                this.state.overview
                                }
                        </p>
                       

                    </div>

                </div>

            </div>
        );
    }
}


export default MovieDetails;