import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

class Cast extends Component {
    constructor (props){
        
    }
    render() {
        return (
            <div style={{backgroundColor: "cyan", height: "100px", width: "100px"}}>
                <HeaderMenu/>
                <Link to='/movie'>
                                <button>Show All Movies</button>
                            </Link>
            </div>
        )
    }
}

export default Cast;