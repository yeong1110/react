import React from 'react';

const Modal = (props) => {
    return (
        <div style={{ position:'fixed',top:'0',left:'0',background:'rgb(0,0,0,0.3)',width:'100%',height:'100%' }} onClick={props.setModal}>
            <div className='modal' style={{backgroundColor:props.color,top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'300px',height:'auto',position:'relative'}}>
                <h4>{props.name[props.title]}</h4>
                <p>{props.date}</p>
            </div>
        </div>
    );
};

export default Modal;
