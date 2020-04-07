import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function Production(prop) {
   

    const view = (id) => {
        prop.setViewCast(id);
        // console.log(prop);
        // console.log(prop.id);
    }

    return (
        <div className='movieRow' style={{
            backgroundColor: '#e6eeff',
            padding: '  10px',
            margin: '10px',
            borderRadius: '10px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridColumn: 'span 1'

        }}>
            <Column> <div>{prop.person.name}</div></Column>
            <Column><div> as {prop.person.character}</div></Column>
            <Column>
                <div>
                    
                    <Button variant={'contained'} color={'primary'} onClick={() => view(prop.person.id)}> View</Button>
                </div>
            </Column>

        </div>
    )

}

const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    grid-column: span 1;
`