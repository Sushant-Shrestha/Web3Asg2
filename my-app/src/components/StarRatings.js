import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import * as cloneDeep from 'lodash/cloneDeep'

class StarRatings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            average: '',
            starArray: []

        }
    }
    static getDerivedStateFromProps(props, state) {
        return { average: props.avg };
    }
    makeStars = () => {
        let tempArray = cloneDeep(this.state.starArray);
        const Whole = <FontAwesomeIcon icon={faStar} />
        const Half = <FontAwesomeIcon icon={faStarHalfAlt} />
        const Empty = <FontAwesomeIcon icon={faEmptyStar} />

        let numStars = Math.round(this.state.average);

        for (let n = 0; n < parseInt(this.state.average, 10); n++) {
            tempArray.push(Whole);
        }

        if (numStars > this.state.average) {
            tempArray.push(Half);

            for (let n = 0; n < 9 - numStars; n++) {
                tempArray.push(Empty);
            }
        } else {

            for (let n = 0; n < 10 - numStars; n++) {
                tempArray.push(Empty);
            }
        }

        this.setState({starArray: tempArray});
    }


    render() {
        return (

            <div>
                {this.makeStars()}
                {this.state.starArray.map((s, index) => {
                    return (s)
                })}

            </div>


        )
    }
}

export default StarRatings;