import React, {useState} from 'react'
import styled from 'styled-components';
import MovieRow from './MovieRow';

export default class MovieMatches extends React.Component {
    addFav = (e) => {
        this.props.addToFavourites(e)
    }

    setViewing = (mov) => {
        this.props.setViewing(mov);
    }

    // setViewedMovie = () =>{
    //     this.props.movieViewed =
    // }
    
    render() {

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr auto',
                overflow: 'auto',
                height: '500px',
                padding: '10px',
            }}>

                <div style={{ gridColumn: 'span 1' }}>Title</div>
                <div style={{ gridColumn: '2/3' }}>Year</div>
                <div style={{ gridColumn: '3/4' }}>Rating</div>
                <ul style={{ gridColumn: 'span 4', listStyleType: 'none', padding: '0'}}>
                    {
                        this.props.movies.length > 0 ? (
                        this.props.movies.map((movie, index) => {
                            return <MovieRow props={movie} key={index} addToFavourites={(this.addFav)} setViewing={this.setViewing}/>
                        })
                        ) : (
                            <p>No movies found matching query!</p>
                        )
                    }
                </ul>
            </div>
        )
    }
}


// function MovieRow(prop) {
//     test = (e) =>{
//         prop.addToFavourites(e)
//     }
//     let { props, addFav } = prop;
//     let img = "https://image.tmdb.org/t/p/w92/" + props.poster;
//     // let year = props.release_date;
//     return (
//         <li style={{
//             gridColumn: 'span 3',
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr 1fr auto',
//             padding: '10px',
//             marginBottom: '10px',
//             backgroundColor: 'var(--card-color)',
//             borderRadius: '10px'
//         }}>
//             <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumn: 'span 1' }}>
//                 <Column><img style={{borderRadius: '10px'}} src={img} title={props.title} alt={props.title} /></Column>
//                 <Column>{props.title}</Column>
//             </div>
//             <Column>{props.release_date.split('-')[0]}</Column>
//             <Column>{props.ratings.average}</Column>
//             <Column>
//                 <div style={{ display: 'grid', gridGap: '10px' }}>
//                     <button>View</button>
//                     <button onClick={this.test}>❤</button>
//                 </div>
//             </Column>
//         </li>
//     )
// }


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