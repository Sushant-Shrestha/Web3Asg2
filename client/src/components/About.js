import React from "react";
import Modal from 'react-modal';
import { Close } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const About = (props) => {

    const viewAPI = () => {
        console.log("view API");
    }

    return (
        <Modal
            style={{
                overlay: {
                    zIndex: '999999'
                },

                content: {
                    backgroundColor: 'var(--button)',
                    color: 'var(--card-p)',

                }
            }}
            isOpen={props.isOpen}
        >

            <button onClick={props.closeModal} style={{ float: "right" }}><Close /></button>
            <h1>About</h1>
            <ul className='aboutULOne'>
                <Paper className='aboutLI'>
                    <div className='aboutCard'>

                        <h3>Authors</h3>
                        <ul>
                            <li>Ralph Acusar</li>
                            <li>Peter Morrison</li>
                            <li>Sushant Shrestha</li>
                        </ul>
                    </div>
                </Paper>
                <Paper className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>Github Links</h3>
                        <ul>
                            <li><a href='https://github.com/PeterMorrison1/web3asg1'>https://github.com/PeterMorrison1/web3asg1</a></li>
                            <li><a href='https://youthful-blackwell-e2984b.netlify.com/'>Working site: https://youthful-blackwell-e2984b.netlify.com/</a></li>
                        </ul>
                    </div>
                </Paper>
                <Paper className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>Icons</h3>
                        <ul>
                            <li>Animated icons from <a href='https://www.npmjs.com/package/lottie-web'>Lottie</a></li>
                            <li>Static icons from <a href='https://fontawesome.com/icons?d=gallery'>Font Awesome</a></li>
                            <li>Asg2 Icons from Material UI Framework</li>
                        </ul>
                    </div>
                </Paper>
                <Paper className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>General npm Libraries</h3>
                        <ul>
                            <li><a href="https://material-ui.com/">Material-UI</a></li>
                            <li><a href='https://www.npmjs.com/package/react-modal'>react-modal</a></li>
                            <li><a href='https://www.npmjs.com/package/lodash'>lodash</a></li>
                            <li><a href='https://www.npmjs.com/package/node-vibrant'>node-vibrant; offshoot of Android palette class</a></li>
                            <li><a href="https://github.com/twobin/react-lazyload">react-lazyload</a></li>
                        </ul>
                    </div>
                </Paper>
                <Paper className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>View Animation</h3>
                        <ul>
                            <li>Render location usage from <a href="https://stackoverflow.com/questions/56434144/react-transition-group-not-working-with-react-router">good ol' stackoverflow</a></li>
                            <li>Styled div files: <a href="https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8">https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8</a></li>
                            <li>Keyframes: <a href="https://styled-components.com/docs/basics#animations">https://styled-components.com/docs/basics#animations</a></li>
                        </ul>
                    </div>
                </Paper>

                <Paper>
                    <div className='aboutCard'>
                        <h3>API</h3>
                        <ul>
                            <li>
                                <Link href="https://mysterious-reaches-90427.herokuapp.com/api/movies">
                                    Returns all movies in the data set
                                </Link>
                            </li>
                            <li>
                                <Link href="https://mysterious-reaches-90427.herokuapp.com/api/movies/${id}">
                                    Return single movie specified by the movie id
                                </Link>
                            </li>
                            <li>
                                <Link href="https://mysterious-reaches-90427.herokuapp.com/api/brief">
                                    Return a brief version of all the movies in the data set
                                </Link>
                            </li>
                            <li>
                                <Link href="https://mysterious-reaches-90427.herokuapp.com/api/find/title/${substring}">
                                    Return all the movies whose title contains substring
                                </Link>
                            </li>

                            <li>
                                <Link href="https://mysterious-reaches-90427.herokuapp.com/api//find/year/${start}${end}">
                                    Return all the movies whose year is between two years
                                </Link>
                            </li>

                        </ul>
                    </div>

                </Paper>
            </ul>
        </Modal>

    );
}

export default About;