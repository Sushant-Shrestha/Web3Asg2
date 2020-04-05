import React from "react";
import Modal from 'react-modal';

const PortraitModal = (props) => {

    return (
        <Modal
            style={{
                overlay: {
                },

                content: {
                    backgroundColor: props.colourImage,

                }
            }}
            isOpen={props.isOpen}
        >

            <button onClick={props.closeModal} className='fa fa-close' style={{ float: "right" }}></button>
            <div style={{
                display: 'table',
                margin: '0 auto'
            }}>
                <h2 style={{
                    color: props.colourText, width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>{props.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w342/" + props.portrait} style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }} />
            </div>
        </Modal>

    );
}

export default PortraitModal;