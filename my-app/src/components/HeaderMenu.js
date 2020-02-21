import React from 'react'
import {Link} from 'react-router-dom'
export default function HeaderMenu(props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'cyan'
        }}>
        <Link to='/home'><img src='https://www.freelogodesign.org/file/app/client/thumb/bb77988b-36da-446a-ac63-f7c46c3a75f3_200x200.png?1582322592506' title="logo" alt="logo" style={{float: 'left', height: '95px'}} /></Link>
            <button onClick={props.openModal} style={{ marginLeft: 'auto', height: 'fit-content' }}>About</button>
        </div>
    )
}
