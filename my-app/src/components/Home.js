import React from "react";
import { Link } from 'react-router-dom';
import { LeftDiv } from './StyledComponents';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Home extends React.Component {

    handleChange = (userInput) => {
        this.props.searchHandler(userInput.currentTarget.value);
    }

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80";
        return (
            <div style={{
                margin: '0',
                height: '100%',
                width: '100%',
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                position: 'absolute'
            }}>
                <Paper style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '200px',
                    width: '30%'

                }}
                >
                    <h1>Movie Browser</h1>
                    <form>
                        <label style={{ paddingRight: "2em" }}>Title</label>
                        <input type="text" onChange={this.handleChange} />
                        <p>
                            <Link to='/MovieList'>
                                <Button style={{ margin: '1em' }} variant="outlined" color="primary">Show All Movies</Button>
                            </Link>
                            <Link to='/MovieList'>
                                <Button style={{ margin: '1em' }} variant="contained" color="primary">Show Matching Movies</Button>
                            </Link>
                        </p>
                    </form>
                </Paper>
                <Paper
                    style={{
                        backgroundColor: "var(--home-box-color)",
                        height: '100px',
                        width: '100%',
                        marginTop: '23.4%'
                    }}>
                    <h3>Banner Credit</h3>
                    <p>@woolyart</p>
                    <a href='https://unsplash.com/photos/HAl6CKxM3xU'>train on railway at daytime</a>
                </Paper>

            </div>

        );
    }
}

export default Home;