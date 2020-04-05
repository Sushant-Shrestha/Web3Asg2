import React, { Component } from 'react'
import FavouriteItem from './FavouriteItem';
import Button from '@material-ui/core/Button';

export default class Favourites extends Component {

    render() {
        return (
            <div className="favorites" style={{
                gridColumn: 'span 3',
            }}>
                <div>
                    <p>Favourites</p>
                    <Button variant={'outlined'} onClick={this.props.toggleFavouriteView}>Hide</Button>
                </div>
                {
                    this.props.favs.map(f => <FavouriteItem movie={f} key={f.id} removeFavourite={this.props.removeFavourite}/>)
                }

            </div>
        )
    }
}
