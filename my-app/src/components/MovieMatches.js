import React from 'react'
import styled from 'styled-components';

export default class MovieMatches extends React.Component {
    render() {


        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                overflow: 'auto',
                height: '500px'
            }}>
                {/* <div style={{gridColumn: 'span 1'}}></div> */}
                {/* <Column><Header>Title</Header></Column>
                <Column><Header>Year</Header></Column>
                <Column><Header>Rating</Header></Column> */}

                <div style={{ gridColumn: 'span 1' }}>Title</div>
                <div style={{ gridColumn: '2/3' }}>Year</div>
                <div style={{ gridColumn: '3/4' }}>Rating</div>

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
    let { props } = prop;
    let img = "https://image.tmdb.org/t/p/w92/" + props.poster;
    // let year = props.release_date;
    return (
        <div style={{
            gridColumn: 'span 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumn: 'span 1' }}>
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
    justify-content: center;
    text-align: center;
    align-self: center;
    grid-column: span 1;
`

const Header = styled.div`
    width: min-content;
    margin-left: 50%;
    &:hover {
        cursor: pointer;
    }
`