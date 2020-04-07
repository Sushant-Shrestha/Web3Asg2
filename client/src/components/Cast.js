import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Production from './Production';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import Link from '@material-ui/core/Link';


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
                                {/* <button style={{ float: 'right' }} className='fa fa-close' onClick={this.movieView}></button> */}

                                <Button variant="contained" onClick={this.movieView} style={{
                                    float: 'right',
                                    margin: "10px 0 0 0 "
                                }}>
                                    <Close />
                                </Button>

                                <div>
                                    <BioBox>
                                        <Typography variant="subtitle1">
                                            {this.state.celeb.biography} <br />


                                        </Typography>
                                    </BioBox>



                                    <BioBox> <Typography variant="subtitle2">
                                        <b>Born : </b>&nbsp;{this.state.celeb.birthday} in {this.state.celeb.place_of_birth} &nbsp;

                                        <Link
                                            variant="subtitle2"
                                            color="primary"
                                            href={"https://www.imdb.com/name/" + this.state.celeb.imdb_id}
                                        >
                                            IMDB
                                        </Link>
                                    </Typography>


                                        {/* <a href={"https://www.imdb.com/name/" + this.state.celeb.imdb_id} style={{
                                            textDecoration: "none",
                                            "&:hover": { textDecoration: "underline" }
                                        }}>IMDB </a> <br /> */}
                                    </BioBox>
                                </div>
                                <div>
                                    {/* {this.state.celeb.birthday} <br /> <br /> */}
                                    {/* {this.state.celeb.biography} <br /> <br /> */}
                                    {/* {this.state.celeb.place_of_birth} <br /> <br /> */}

                                </div>
                            </RightCastDetail>
                            {/* <ProductionList>
                                <div className='subView'>
                                    <h2>Production</h2>
                                    <u>Cast</u> <br />
                                    {this.props.cast.map((c, index) => {
                                        return <Production key={index} setViewCast={this.newViewCast} person={c} closeView={this.closeView} />
                                    })}
                                </div>
                            </ProductionList> */}

                        </div>
                    )
                }
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

const LeftCastDetail = styled(Paper)`
  background-color: var(--card-color);
`;

const ProductionList = styled(Paper)`
    background-color: var(--card-color);
    justify-items: stretch;
    grid-column: span 2;
`;

const RightCastDetail = styled(Paper)`
    // background-color: lightblue
    height: 100%;
`;

const BioBox = styled(Paper)`
 background-color: #e6eeff;
 margin: 10px 70px 10px 30px;
 padding: 10px;
 height: 100%;
 text-align: left;
`;

const BoxDetails = styled(Paper)`
 background-color: #e6eeff;
 margin: 0px 70px 5px 30px;
 padding: 10px;
 //border-style: solid;
 height: 100%;
 text-align: left;
//  justify-content: left;
`;



export default Cast;