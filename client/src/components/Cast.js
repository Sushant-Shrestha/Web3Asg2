import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Production from './Production';

class Cast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celeb: [],
            viewingCast: false
        }
    }

    async componentDidMount() {
        try {
            let apiKey = 'de528c984aa48cf16fcc9988a75aef28';
            let url = `https://api.themoviedb.org/3/person/${this.props.id}?api_key=${apiKey}`;
            console.log(url);
            const response = await fetch(url);
            const jsonData = await response.json();

            this.setState({ celeb: jsonData });
        } catch (error) {
            console.log(error);
        }
    }


    movieView = () => {
        this.props.closeView();
        this.setState({ viewingCast: false });
    }

    newViewCast = (id) => {
        console.log(id);
        this.props.updateViewCast(id);

    }
    render() {
        return (

            <div>

                {this.state.viewingCast ? (<div>
                    VIEW CAST HERE <br />
                    {/* <Cast id={this.state.castID} cast={this.props.cast} crew={this.props.crew} closeView={this.movieView} newViewCast={this.newViewCast} /> */}
                    {this.newViewCast(this.state.castID)}
                </div>)
                    : (

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr  ', gridColumn: 'span 1' }}>
                            <LeftCastDetail>
                                <h2>{this.state.celeb.name}</h2>
                                <img src={"https://image.tmdb.org/t/p/w185/" + this.state.celeb.profile_path} />
                            </LeftCastDetail>
                            <RightCastDetail>
                                <button style={{ float: 'right' }} className='fa fa-close' onClick={this.movieView}></button>
                                <div>
                                    {this.state.celeb.birthday} <br /> <br />
                                    {this.state.celeb.biography} <br /> <br />
                                    {this.state.celeb.place_of_birth} <br /> <br />
                                    <a href={"https://www.imdb.com/name/" + this.state.celeb.imdb_id}>IMDB LINK</a> <br />
                                </div>
                            </RightCastDetail>
                            <ProductionList>
                                <div className='subView'>
                                    <h2>Production</h2>
                                    <u>Cast</u> <br />
                                    {this.props.cast.map((c, index) => {
                                        return <Production key={index} setViewCast={this.newViewCast} person={c} closeView={this.closeView} />
                                    })}
                                </div>
                            </ProductionList>

                        </div>
                    )}
            </div>
            // <div style={{backgroundColor: "cyan", height: "100px", width: "100px"}}>
            //     <HeaderMenu/>
            //     <Link to='/movie'>
            //                     <button>Show All Movies</button>
            //                 </Link>
            // </div>
        )
    }
}

const LeftCastDetail = styled.div`
  background-color: var(--card-color);
`;

const ProductionList = styled.div`
    background-color: var(--card-color);
    justify-items: stretch;
    grid-column: span 2;
`;

const RightCastDetail = styled.div`
<<<<<<< HEAD
  background-color: yellow;
=======
    background-color: lightblue
>>>>>>> ralp
`;



export default Cast;