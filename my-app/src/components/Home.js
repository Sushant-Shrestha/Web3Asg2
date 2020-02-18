import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

    handleChange = (userInput) => {
        this.props.searchHandler(userInput.currentTarget.value);
    }

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80";
        return (
            <div className="banner"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    height: '800px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div
                    style={{
                        backgroundColor: "var(--card-color)",
                        padding: "2em"
                    }}
                >
                    <h1>Movie Browser</h1>
                    <form>
                        <label style={{paddingRight: "2em"}}>Title</label>
                        <input type="text" onChange={this.handleChange}/>
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
            </div>

        );
    }
}

export default Home;