import React from 'react';
import * as cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const marks = [
    {
        value: 0,
        label: '0'
    }, {
        value: 5,
        label: '5'
    }, {
        value: 10,
        label: '10'
    },
];

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredList: [],
            belowValue: '',
            aboveValue: '',
            selectedYearOption: '',
            selectedRatingOption: ''
        };

        //Year
        this.beforeDate = React.createRef();
        this.afterDate = React.createRef();
        // this.fromDate = React.createRef();
        // this.toDate = React.createRef();

        //Ratings
        this.belowRating = React.createRef();
        this.aboveRating = React.createRef();
        // this.belowValue = React.createRef();
        // this.aboveValue = React.createRef();
    }

    render() {
        return (
            <div>
                <form className="filterForm" style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}>

                    <div>
                        <LabelTitle><label>Title</label></LabelTitle><br />
                        {/* <input type='text' name='title' onChange={this.titleFilter} /> <br /> <br /> */}
                        <TextField type='text' name='afterDate' onChange={this.titleFilter} label='Title' />
                    </div>

                    <div>
                        <LabelTitle><label>Year</label></LabelTitle><br />
                        <Label>
                            {/* <input type='radio' id='before' name='year' value='before' checked={this.state.selectedYearOption === 'before'} onChange={this.handleOptionChange} /> */}
                            {/* <label htmlFor='before'>Before</label> */}
                            <RadioGroup name='year' value={this.state.selectedYearOption} onChange={this.handleOptionChange}>
                                <FormControlLabel value='before' control={<Radio id='before' name='year' value='before' />} label='Before' />
                                <FormControlLabel value='after' control={<Radio id='after' name='year' value='after' />} label='After' />
                                <FormControlLabel value='yearBetween' control={<Radio id='yearBetween' name='year' value='yearBetween' />} label='Between' />
                            </RadioGroup>


                            {/* <input type='radio' id='after' name='year' value='after' checked={this.state.selectedYearOption === 'after'} onChange={this.handleOptionChange} /> */}
                            {/* <label htmlFor='after'>After</label> */}

                            {/* <input type='radio' id='yearBetween' name='year' value='yearBetween' checked={this.state.selectedYearOption === 'yearBetween'} onChange={this.handleOptionChange} /> */}
                            {/* <label htmlFor='yearBetween'>between</label> <br /> */}

                            <div>
                                <TextField style={{ marginRight: '5px' }} type='text' name='beforeDate' inputRef={input => (this.beforeDate = input)} label='Before' />
                                <TextField type='text' name='afterDate' inputRef={input => (this.afterDate = input)} label='After' />
                                {/* <input type='text' name='beforeDate' ref={this.beforeDate} placeholder='Before...' /> <br /> */}
                                {/* <input type='text' name='afterDate' ref={this.afterDate} placeholder='After...' /> <br /> */}
                                {/* <input type='text' name='fromDate' ref={this.fromDate} /><br />
                                <input type='text' name='toDate' ref={this.toDate} /> <br /><br /> */}
                            </div>
                        </Label>
                    </div>

                    <div>
                        <LabelTitle><label>Rating</label></LabelTitle><br />

                        <Label>
                            <RadioGroup name='rating' value={this.state.selectedRatingOption} onChange={this.handleOptionChange}>
                                <FormControlLabel value='below' control={<Radio id='below' name='rating' value='below' />} label='Below' />
                                <FormControlLabel value='above' control={<Radio id='above' name='rating' value='above' />} label='Above' />
                                <FormControlLabel value='ratingBetween' control={<Radio id='ratingBetween' name='rating' value='ratingBetween' />} label='Between' />
                            </RadioGroup>

                            {/* <input type='radio' id='below' name='rating' value='below' checked={this.state.selectedRatingOption === 'below'} onChange={this.handleOptionChange} />
                            <label htmlFor='below'>Below</label>

                            <input type='radio' id='above' name='rating' value='above' checked={this.state.selectedRatingOption === 'above'} onChange={this.handleOptionChange} />
                            <label htmlFor='above'>Above</label>

                            <input type='radio' id='ratingBetween' name='rating' value='ratingBetween' checked={this.state.selectedRatingOption === 'ratingBetween'} onChange={this.handleOptionChange} />
                            <label htmlFor='ratingBetween'>Between</label> <br /> */}

                            <div style={{display: 'flex'}}>

                                <div id='belowRating'>
                                    <Typography>Below</Typography>
                                    <Slider
                                        style={{width: '100px', marginRight: '10px'}}
                                        defaultValue={5}
                                        inputRef={input => (this.belowRating = input)}
                                        step={1}
                                        id="belowRating"
                                        max={10}
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        ref={this.belowRating}
                                        onChange={this.showRangeValueNew}
                                    />

                                </div>

                                <div id='belowRating'>
                                    <Typography>Above</Typography>
                                    <Slider
                                        style={{width: '100px'}}
                                        defaultValue={5}
                                        inputRef={input => (this.aboveRating = input)}
                                        step={1}
                                        id="aboveRating"
                                        max={10}
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        ref={this.aboveRating}
                                        onChange={this.showRangeValueNew}
                                    />

                                </div>
                            </div>

                            {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <span>{this.state.belowValue}</span><input type='range' name='belowRating' min='0' max='10' defaultValue='5' ref={this.belowRating} onChange={this.showRangeValue} /> <br />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <input type='range' name='aboveRating' min='0' max='10' defaultValue='5' ref={this.aboveRating} onChange={this.showRangeValue} /> <span>{this.state.aboveValue}</span><br />
                            </div> */}
                            {/* <input type='range' name='fromRating' min='0' max='10' defaultValue='5' ref={this.fromRating} /> <br />
                            <input type='range' name='toRating' min='0' max='10' defaultValue='5' ref={this.toRating} /> <br /> */}
                        </Label>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Button variant="outlined" color="primary" onClick={this.props.resetFilters}>Clear</Button>
                        <Button variant="contained" color="primary" onClick={this.filterTrigger}>Filter</Button>
                    </div>
                </form>
            </div>
        );
    }

    showRangeValue = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        if (e.target.name === 'belowRating') {
            this.setState({ belowValue: e.target.value });
        } else if (e.target.name === 'aboveRating') {
            this.setState({ aboveValue: e.target.value });
        }
    }

    showRangeValueNew = (e, newValue) => {
        console.log(e.target.parentElement.id);
        console.log(e.target);
        console.log(newValue);
        if (e.target.parentElement.id === 'belowRating') {
            this.setState({ belowValue: newValue });
        } else if (e.target.parentElement.id === 'aboveRating') {
            this.setState({ aboveValue: newValue });
        }
    }

    handleOptionChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        if (e.target.name === 'year') {
            this.setState({ selectedYearOption: e.target.value });
        } else if (e.target.name === 'rating') {
            this.setState({ selectedRatingOption: e.target.value });
        }
    }

    titleFilter = (e) => {

        this.props.titleChange(e.target.value);
    }

    filterTrigger = (e) => {
        //console.dir(this.state.filteredList);
        e.preventDefault();
        let list = cloneDeep(this.props.filteredList);
        console.dir(list);

        if (this.state.selectedYearOption !== '') {
            let tempList = [];

            if (this.state.selectedYearOption === 'before') {

                list.forEach((f) => {
                    if (f.release_date.split('-')[0] <= this.beforeDate.value) {
                        tempList.push(f);
                    }
                });
            } else if (this.state.selectedYearOption == 'after') {

                list.forEach((f) => {
                    if (f.release_date.split('-')[0] >= this.afterDate.value) {
                        tempList.push(f);
                    }
                });
            } else if (this.state.selectedYearOption == 'yearBetween') {

                list.forEach((f) => {
                    if ((f.release_date.split('-')[0] >= this.beforeDate.value) && (f.release_date.split('-')[0] <= this.afterDate.value)) {
                        tempList.push(f);
                    }
                });
            }

            // this.setState({filteredList: tempList});
            // console.dir(tempList);
            list = cloneDeep(tempList);
        }

        if (this.state.selectedRatingOption != '') {
            let tempList = [];

            if (this.state.selectedRatingOption === 'below') {

                list.forEach((f) => {
                    // if (f.ratings.average <= this.belowRating.value) {
                    if (f.ratings.average <= this.state.belowValue) {
                        tempList.push(f);
                    }
                });
            } else if (this.state.selectedRatingOption === 'above') {

                list.forEach((f) => {
                    // if (f.ratings.average >= this.aboveRating.value) {
                    if (f.ratings.average >= this.state.aboveValue) {
                        tempList.push(f);
                    }
                });
            } else if (this.state.selectedRatingOption === 'ratingBetween') {
                //console.log(this.fromRating.current.value + " " + this.toRating.current.value);
                list.forEach((f) => {
                    // if ((f.ratings.average >= this.belowRating.value) && (f.ratings.average <= this.aboveRating.value)) {
                    if ((f.ratings.average >= this.state.belowValue) && (f.ratings.average <= this.state.aboveValue)) {
                        tempList.push(f);
                    }
                });
            }

            list = cloneDeep(tempList);
        }

        this.props.filterTrigger(list);
    }

    clear = () => {
        this.setState({ filteredList: this.props.movieList });
    }

}


const LabelTitle = styled.label`
    font-size: 1em;
    font-weight: bold;
`;

const Label = styled.label`
    font-size: 1em
`;


export default Filter;