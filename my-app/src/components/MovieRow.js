import React from 'react'
import styled from 'styled-components';

export default function MovieRow(prop) {
    let { props } = prop;
    const clickHandler = (e, data) =>{
        prop.addToFavourites(data)
    }
    let img = "https://image.tmdb.org/t/p/w92/" + props.poster;
    // let year = props.release_date;
    return (
        <li style={{
            gridColumn: 'span 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr auto',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: 'var(--card-color)',
            borderRadius: '10px',
            boxShadow: '5px 10px'
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumn: 'span 1' }}>
                <Column><img style={{borderRadius: '10px'}} src={img} title={props.title} alt={props.title} /></Column>
                <Column>{props.title}</Column>
            </div>
            <Column>{props.release_date.split('-')[0]}</Column>
            <Column>{props.ratings.average}</Column>
            <Column>
                <div style={{ display: 'grid', gridGap: '10px' }}>
                    <button style={{backgroundColor: '#a6a6a6', borderRadius: '10px', width: '5em'}}>View</button>
                    <button style={{backgroundColor: '#a6a6a6', borderRadius: '10px'}} onClick={(e) => clickHandler(e, props)}>❤</button>
                </div>
            </Column>
        </li>
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