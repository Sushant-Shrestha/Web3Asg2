import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';

class MovieList extends Component {

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        return (
            <RightDiv style={{
                backgroundImage: `url(${imgUrl})`,
                height: '800px',
                width: "1920px",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
                <HeaderMenu />
                <Link to='/'>
                    <button>Show All Movies</button>
                </Link>

                <Link to='/movie'>
                    <button>Select Movie</button>
                </Link>

            </RightDiv>
        )
    }
}



export default MovieList;