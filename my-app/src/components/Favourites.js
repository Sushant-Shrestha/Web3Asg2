import React, { Component } from 'react'
import FavouriteItem from './FavouriteItem';

export default class Favourites extends Component {
    render() {
        return (
            <div className="favorites" style={{
                gridColumn: 'span 3',
            }}>
                <div>
                    <p>Favourites</p>
                    <button>Hide</button>
                </div>
                {
                    this.props.favs.map(f => <FavouriteItem movie={f} key={f.id} removeFavourite={this.props.removeFavourite}/>)
                }
            </div>
        )
    }
}
