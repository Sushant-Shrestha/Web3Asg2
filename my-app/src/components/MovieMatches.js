import React from 'react'
import styled from 'styled-components';
import MovieRow from './MovieRow';

export default class MovieMatches extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            titleFilter: 'fa-sort',
            yearFilter: 'fa-sort',
            ratingFilter: 'fa-sort'
        }
    }
    
    addFav = (e) => {
        this.props.addToFavourites(e)
    }

    sortTitle = () => {
        this.resetIcons();
        if (this.state.titleFilter === 'fa-sort-asc' || this.state.titleFilter === 'fa-sort') {
            this.setState({ titleFilter: 'fa-sort-desc'})
            this.props.toggleTitleFilter();
        } else if (this.state.titleFilter === 'fa-sort-desc') {
            this.setState({ titleFilter: 'fa-sort-asc' })
            this.props.toggleTitleFilter();
        }
    }

    sortYear = () => {
        this.resetIcons();
        if (this.state.yearFilter === 'fa-sort-asc' || this.state.yearFilter === 'fa-sort') {
            this.setState({ yearFilter: 'fa-sort-desc'})
            this.props.toggleYearFilter();
        } else if (this.state.yearFilter === 'fa-sort-desc') {
            this.setState({ yearFilter: 'fa-sort-asc' })
            this.props.toggleYearFilter();
        }
    }

    sortRating = () => {
        this.resetIcons();
        if (this.state.ratingFilter === 'fa-sort-asc' || this.state.ratingFilter === 'fa-sort') {
            this.setState({ ratingFilter: 'fa-sort-desc'})
            this.props.toggleRatingFilter();
        } else if (this.state.ratingFilter === 'fa-sort-desc') {
            this.setState({ ratingFilter: 'fa-sort-asc' })
            this.props.toggleRatingFilter();
        }
    }

    resetIcons = () => {
        this.setState({ titleFilter: 'fa-sort', yearFilter: 'fa-sort', ratingFilter: 'fa-sort'})
    }
    
    render() {

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr auto',
                overflow: 'auto',
                height: '95%',
            }}>

                <FilterHeader style={{ gridColumn: 'span 1' }}>Title <div className={'fa ' + this.state.titleFilter + ' pointer'} onClick={this.sortTitle}/></FilterHeader>
                <FilterHeader style={{ gridColumn: '2/3' }}>Year <div className={'fa ' + this.state.yearFilter + ' pointer'} onClick={this.sortYear}/></FilterHeader>
                <FilterHeader style={{ gridColumn: '3/4' }}>Rating <div className={'fa '+ this.state.ratingFilter +' pointer'} onClick={this.sortRating}/></FilterHeader>
                <ul style={{ gridColumn: 'span 4', listStyleType: 'none', padding: '0'}}>
                    {
                        this.props.movies.length > 0 ? (
                        this.props.movies.map((movie, index) => {
                            return <MovieRow props={movie} key={index} addToFavourites={(this.addFav)} />
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

const FilterHeader = styled.div`
    font-weight: bold;
    font-size: large;
`

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