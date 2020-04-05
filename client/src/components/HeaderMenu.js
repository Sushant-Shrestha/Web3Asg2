import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderMenu(props) {
    return (
        <Header className='headerView'>
            <Link to='/home'>
                <img src='https://www.freelogodesign.org/file/app/client/thumb/bb77988b-36da-446a-ac63-f7c46c3a75f3_200x200.png?1582322592506' 
                title="logo" alt="logo" style={{height: '95px'}} />
            </Link>
            
            <Btn>
                <button onClick={props.hideTheFilter}>Toggle Filter</button>
                {/* <Link to='/'>
                    <button onClick={props.setFetching}>Show All Movies</button>
                </Link> */}

                {/* <Link to='/movie'>
                    <button>Select Movie</button>
                </Link> */}

                <button onClick={props.toggleFavouriteView}>Toggle Favourites</button>
                
                <button onClick={props.openModal}>About</button>
            </Btn>

        </Header>
        
    )
}

const Header = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    grid-gap: 20px;
    height: 100px;
    padding: 0 10em;
`;

const Btn = styled.div`
    display: flex;
    justify-content: flex-end;    
    align-self: center;
`;