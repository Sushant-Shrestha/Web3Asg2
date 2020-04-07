import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'


export default function MovieRow(prop) {
    let { props } = prop;
    const clickHandler = (e, data) =>{
        prop.addToFavourites(data)
    }
    let img = "https://image.tmdb.org/t/p/w92" + props.poster;
    // let year = props.release_date;

    const view = (title, id, movie) => {
        //console.log(title +  "-" + id);
        prop.setViewing(id);
    }


    return (
        <li className='movieRow' style={{
            gridColumn: 'span 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr auto',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: 'var(--movie-row)',
            borderRadius: '10px',
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumn: 'span 1' }}>
                <Column><img className='clickable' style={{borderRadius: '10px'}} src={img} title={props.title} alt={props.title} onClick={() => view(props.title, props.id, props)}/></Column>
                <Column><p style={{fontSize: 'large'}} className='clickableText' onClick={() => view(props.title, props.id, props)} >{props.title}</p></Column>
            </div>
            <Column style={{fontSize: 'large'}}>{props.release_date.split('-')[0]}</Column>
            <Column style={{fontSize: 'large'}}>{props.ratings.average}</Column>
            <Column>
                <div style={{ display: 'grid', gridGap: '10px' }}>
                    <Button variant="contained" color="primary" onClick={() => view(props.title,props.id, props)}>
                        View                  
                    </Button>
                    <IconButton aria-label="favourite" onClick={(e) => clickHandler(e, props)} style={{color: '#DE67C3'}}>
                    ❤
                    </IconButton>
                    {/* <button className='clickable' onClick={() => view(props.title, props.id, props)}>View</button> */}
                    {/* <button className='clickable' onClick={(e) => clickHandler(e, props)} style={{color: '#DE67C3'}}>❤</button> */}
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