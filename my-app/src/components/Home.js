import React from "react";
import { Link } from 'react-router-dom';
import { LeftDiv } from './StyledComponents';

class Home extends React.Component {

    handleChange = (userInput) => {
        this.props.searchHandler(userInput.currentTarget.value);
    }

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80";
        return (
            <LeftDiv className="banner"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    height: '100%',
                    width: "1920px",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
                }}>
                <div
                    style={{
                        backgroundColor: "var(--card-color)",
                        padding: "2em",
                        gridColumn: '4/6',
                        gridRow: '4/5'
                    }}
                >
                    <h1>Movie Browser</h1>
                    <form>
                        <label style={{ paddingRight: "2em" }}>Title</label>
                        <input type="text" onChange={this.handleChange} />
                        <p>
                            <Link to='/MovieList'>
                                <button>Show Matching Movies</button>
                            </Link>
                            <Link to='/MovieList'>
                                <button>Show All Movies</button>
                            </Link>
                        </p>
                    </form>
                </div>
                {/* <div style={{gridColumn:'1/9'}}></div> */}
                <div
                    style={{
                        backgroundColor: "var(--card-color)",
                        height: '25',
                        gridColumn: '1/9',
                        gridRow: '7/8'
                    }}>
                    <h3>Banner Credit</h3>
                    <p>@woolyart</p>
                    <a href='https://unsplash.com/photos/HAl6CKxM3xU'>train on railway at daytime</a>
                </div>

            </LeftDiv>

        );
    }
}

export default Home;