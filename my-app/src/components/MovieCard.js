import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        height: 'auto',
        width: '225px'
    },

    cardImage: {
        height: 'auto',
        width: '225px'
    },

    cardButtons: {
        textAlign: 'center'
    },

    cardIndividualButtons: {
        display: 'inline-block'
    }
});

export default function MovieRow(prop) {
    const classes = useStyles();

    let { props } = prop;
    const clickHandler = (e, data) => {
        prop.addToFavourites(data)
    }
    let img = "https://image.tmdb.org/t/p/w342/" + props.poster;
    // let year = props.release_date;

    const view = (title, id, movie) => {
        //console.log(title +  "-" + id);
        prop.setViewing(id);
    }



    return (

        <Card className={classes.card}>
            {/* <CardActionArea> */}
                <CardMedia
                    className={classes.cardImage}
                    component='img'
                    alt={`Image of the movie ${props.title}`}
                    image={`${img}`}
                    title={`${props.title}`} />
                <CardContent>
                    <Typography variant='h6' component='p'>{props.title}</Typography>
                    <Typography variant='subtitle1' component='p'>{props.release_date.split('-')[0]}</Typography>
                    <Typography variant='subtitle1' component='p'>{props.ratings.average}</Typography>

                </CardContent>
            {/* </CardActionArea> */}
            <CardActions className={classes.cardButtons}>
                <Button className={classes.cardIndividualButtons} variant="contained" color="primary" onClick={() => view(props.title, props.id, props)}>
                    View
                    </Button>
                <IconButton className={classes.cardIndividualButtons} aria-label="favourite" onClick={(e) => clickHandler(e, props)} style={{ color: '#DE67C3' }}>
                    ❤
                    </IconButton>
            </CardActions>
        </Card>

        // <li className='movieRow' style={{
        //     gridColumn: 'span 3',
        //     display: 'grid',
        //     gridTemplateColumns: '1fr 1fr 1fr auto',
        //     padding: '10px',
        //     marginBottom: '10px',
        //     backgroundColor: 'var(--movie-row)',
        //     borderRadius: '10px',
        // }}>
        //     <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumn: 'span 1' }}>
        //         <Column><img className='clickable' style={{ borderRadius: '10px' }} src={img} title={props.title} alt={props.title} onClick={() => view(props.title, props.id, props)} /></Column>
        //         <Column><p style={{ fontSize: 'large' }} className='clickableText' onClick={() => view(props.title, props.id, props)} >{props.title}</p></Column>
        //     </div>
        //     <Column style={{ fontSize: 'large' }}>{props.release_date.split('-')[0]}</Column>
        //     <Column style={{ fontSize: 'large' }}>{props.ratings.average}</Column>
        //     <Column>
        //         <div style={{ display: 'grid', gridGap: '10px' }}>
        //             <Button variant="contained" color="primary" onClick={() => view(props.title, props.id, props)}>
        //                 View
        //             </Button>
        //             <IconButton aria-label="favourite" onClick={(e) => clickHandler(e, props)} style={{ color: '#DE67C3' }}>
        //                 ❤
        //             </IconButton>
        //             {/* <button className='clickable' onClick={() => view(props.title, props.id, props)}>View</button> */}
        //             {/* <button className='clickable' onClick={(e) => clickHandler(e, props)} style={{color: '#DE67C3'}}>❤</button> */}
        //         </div>
        //     </Column>
        // </li>

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