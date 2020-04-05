import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';


const FavouriteItem = function (props) {
    const clickHandler = (e, data) => {
        props.removeFavourite(data);
    }


    let img = "https://image.tmdb.org/t/p/w92/" + props.movie.poster;

        {/* <animated.div style={anim}> */}
    // const anim = useSpring({ opacity: 1, from: { opacity: 0 } });
        {/* </animated.div> */}
    return (
            <Image>
                <img src={img} alt={props.movie.title} title={props.movie.title} />
                <button onClick={(e) => clickHandler(e, props.movie)}>
                    <DeleteIcon />
                </button>
            </Image>

    )
}

const Image = styled.div`
    position: relative;
    cursor: pointer;
    display: inline-block;
    button {
        display: none;
    }
    img:hover + button, button:hover + button {
        display: block;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
    }

`

export default FavouriteItem;