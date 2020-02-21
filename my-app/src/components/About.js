import React from "react";
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';
import Modal from 'react-modal';

const About = (props) => {

    let imgUrl = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80";
    return (
        <Modal
            style={{

            }}
            isOpen={props.isOpen}
        >

            <button onClick={props.closeModal} className='fa fa-close' style={{float: "right"}}></button>
            <h1>About</h1>
            <ul>
                <li>Created by: Ralph Acusar, Peter Morrison, and Sushant Shrestha</li>
                <li>Github link: <a href='https://github.com/PeterMorrison1/web3asg1'>https://github.com/PeterMorrison1/web3asg1</a></li>
                <li>The animation effects were created through blood, sweat, and tears. Also using the following sources to force my idea into reality:</li>
                <ul>
                    <li>Using switch & Route render location: <a href="https://stackoverflow.com/questions/56434144/react-transition-group-not-working-with-react-router">https://stackoverflow.com/questions/56434144/react-transition-group-not-working-with-react-router</a></li>
                    <li>Separating styled divs into other files: <a href="https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8">https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8</a></li>
                    <li>Keyframes: <a href="https://styled-components.com/docs/basics#animations">https://styled-components.com/docs/basics#animations</a></li>
                </ul>
                <li>Animation icons were created using lottie from: <a href='https://www.npmjs.com/package/lottie-web'>https://www.npmjs.com/package/lottie-web</a></li>
            </ul>
        </Modal>

    );
}

export default About;