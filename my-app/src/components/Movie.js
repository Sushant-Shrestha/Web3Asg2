import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { RightDiv, UpDiv } from './StyledComponents';

class Movie extends Component {

    render() {
        let imgUrl = 'https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
        return (
            <UpDiv style={{
                backgroundImage: `url(${imgUrl})`,
                height: '800px',
                width: "1920px",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
                <HeaderMenu />
                <Link to='/movielist'>
                    <button>Show All Movies</button>
                </Link>
            </UpDiv>
        )
    }
}

export default Movie;