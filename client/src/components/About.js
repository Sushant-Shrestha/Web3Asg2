import React from "react";
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';
import Modal from 'react-modal';

const About = (props) => {

    return (
        <Modal
            style={{
                overlay: {
                },

                content: {
                    backgroundColor: 'var(--button)',
                    color: 'var(--card-p)',

                }
            }}
            isOpen={props.isOpen}
        >

            <button onClick={props.closeModal} className='fa fa-close' style={{ float: "right" }}></button>
            <h1>About</h1>
            <ul className='aboutULOne'>
                <li className='aboutLI'>
                    <div className='aboutCard'>

                        <h3>Authors</h3>
                        <ul>
                            <li>Ralph Acusar</li>
                            <li>Peter Morrison</li>
                            <li>Sushant Shrestha</li>
                        </ul>
                    </div>
                </li>
                <li className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>Github Links</h3>
                        <ul>
                            <li><a href='https://github.com/PeterMorrison1/web3asg1'>https://github.com/PeterMorrison1/web3asg1</a></li>
                            <li><a href='https://youthful-blackwell-e2984b.netlify.com/'>Working site: https://youthful-blackwell-e2984b.netlify.com/</a></li>
                        </ul>
                    </div>
                </li>
                <li className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>Icons</h3>
                        <ul>
                            <li>Animated icons from <a href='https://www.npmjs.com/package/lottie-web'>Lottie</a></li>
                            <li>Static icons from <a href='https://fontawesome.com/icons?d=gallery'>Font Awesome</a></li>
                        </ul>
                    </div>
                </li>
                <li className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>General npm Libraries</h3>
                        <ul>
                            <li><a href='https://www.npmjs.com/package/react-modal'>react-modal</a></li>
                            <li><a href='https://www.npmjs.com/package/react-transition-group'>react-transition-group</a></li>
                            <li><a href='https://www.npmjs.com/package/lodash'>lodash</a></li>
                            <li><a href='https://www.npmjs.com/package/node-vibrant'>node-vibrant; offshoot of Android palette class</a></li>
                            <li><a href='https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react'>Font awesome icons with react</a></li>
                            <li>Other libs mentioned in Icons and View animation</li>
                        </ul>
                    </div>
                </li>
                <li className='aboutLI'>
                    <div className='aboutCard'>
                        <h3>View Animation</h3>
                        <ul>
                            <li>Render location usage from <a href="https://stackoverflow.com/questions/56434144/react-transition-group-not-working-with-react-router">good ol' stackoverflow</a></li>
                            <li>Styled div files: <a href="https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8">https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8</a></li>
                            <li>Keyframes: <a href="https://styled-components.com/docs/basics#animations">https://styled-components.com/docs/basics#animations</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </Modal>

    );
}

export default About;