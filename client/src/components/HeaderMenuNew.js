import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Stars from '@material-ui/icons/Stars';
import FilterList from '@material-ui/icons/FilterList';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50,
    },
    logo: {
        flexGrow: 1,
        maxWidth: 150,
        maxHeight: theme.mixins.toolbar,
    },
    grow: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
}));


function ColourScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        // color: trigger ? "#Ffcfcf" : "#fff",
        // backgroundColor: trigger ? "#Fcfc" : "#fff",
        color: trigger ? "primary" : "transparent",
    });
    // style: trigger ? {backgroundColour: '#3B5E'} : {backgroundColour: '#fff'},

}

ColourScroll.propTypes = {
    children: PropTypes.element.isRequired
}


export default function HeaderMenuNew(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ColourScroll {...props}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Link to='/home'>
                            <img src='https://www.freelogodesign.org/file/app/client/thumb/bb77988b-36da-446a-ac63-f7c46c3a75f3_200x200.png?1582322592506'
                                title="logo" alt="logo" style={{ height: '95px' }} className={classes.logo} />
                        </Link>

                        <div className={classes.grow} />

                        <IconButton color="inherit" onClick={props.toggleFavouriteView}>
                            <Stars />
                        </IconButton>

                        <IconButton color="inherit" onClick={props.hideTheFilter}>
                            <FilterList />
                        </IconButton>


                        <Button color="inherit" onClick={props.openModal}>About</Button>

                        <Button color='inherit' onClick={() => {
                            window.location.href='https://mysterious-reaches-90427.herokuapp.com/logout';
                        }}>Logout</Button>


                    </Toolbar>
                </AppBar>
            </ColourScroll>

            <div className={classes.offset} />

        </div>

    )
}

const Header = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    grid-gap: 20px;
    height: 100px;
    padding: 0 10em;
`;

const Btn = styled.div`
    display: flex;
    justify-content: flex-end;    
    align-self: center;
`;