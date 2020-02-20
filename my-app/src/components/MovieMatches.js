import React from 'react'
import styled from 'styled-components';

export default class MovieMatches extends React.Component {
    render() {


        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto',
                overflow: 'auto',
                height: '500px'
            }}>
                <Column><Header>Title</Header></Column>
                <Column><Header>Year</Header></Column>
                <Column><Header>Rating</Header></Column>

                {
                    this.props.movies.map((movie, index) => {
                        return <MovieRow props={movie} key={index} />
                    })
                }
            </div>
        )
    }
}

function MovieRow(prop) {
    let {props} = prop;
    let img = "https://image.tmdb.org/t/p/w92/" + props.poster;
    // let year = props.release_date;
    return (
        <div style={{ gridColumn: 'span 3', 
        display: 'grid', 
        gridTemplateColumns: 'auto auto auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <Column><img src={img} title={props.title} alt={props.title} /></Column>
                <Column>{props.title}</Column>
            </div>
            <Column>{props.release_date.split('-')[0]}</Column>
            <Column>{props.ratings.average}</Column>
        </div>
    )
}


const Column = styled.div`
    display: flex;
    align-items: center;
    grid-column: span 1;
    align-self: center;
`

const Header = styled.div`
    width: min-content;
    margin-left: 50%;
    &:hover {
        cursor: pointer;
    }
`