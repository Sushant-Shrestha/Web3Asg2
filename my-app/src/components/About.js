import React from "react";
import { Link } from 'react-router-dom';
import { RightDiv } from './StyledComponents';

class About extends React.Component {

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80";
        return (
            <RightDiv>
                <div>
                    <h1>About</h1>
                    <form>
                        <p>
                            The animation effects were created through blood, sweat, and tears. Also using the following sources to force my idea into reality: 
                            <ul>
                                <li>Using switch & Route render location: https://stackoverflow.com/questions/56434144/react-transition-group-not-working-with-react-router</li>
                                <li>Separating styled divs into other files: https://blog.cloudboost.io/separate-your-code-with-styled-components-ec4fd1ee3ef8</li>
                                <li>Keyframes: https://styled-components.com/docs/basics#animations</li>
                            </ul>
                        </p>
                    </form>
                </div>
            </RightDiv>

        );
    }
}

export default About;