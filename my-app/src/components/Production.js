import React from 'react'
import styled from 'styled-components';

export default class Production extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            cast: this.props.cast
        }
    }

    view = (id) => {
        this.props.setViewCast(id);
    }
    render() {
        return (
            <div style={{
                backgroundColor: 'teal',
                padding: '10px',
                marginBottom: '5px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridColumn: 'span 1'

            }}>
                {this.state.cast.map((c, index) => {
                    return (
                        <div>

                            <Column> <div>{c.cast.name}</div></Column>
                            <Column><div>{c.cast.character}</div></Column>
                            <Column>
                                <div>

                                    <button onClick={this.view(c.cast.id)}> View</button>
                                </div>
                            </Column></div>)
                })}
                {/* <Column> <div>{prop.cast.name}</div></Column>
        <Column><div>{prop.cast.character}</div></Column>
        <Column>
            <div>

                <button onClick={() => view(prop.cast.id)}> View</button>
            </div>
        </Column> */}

            </div>
        )
    }


}

const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    grid-column: span 1;
`