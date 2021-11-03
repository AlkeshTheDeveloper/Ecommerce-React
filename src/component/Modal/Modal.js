import React from 'react';
import { Fragment } from 'react';


import classes from "./Modal.module.css"

const Backdrop = (props) => {
    return(
    <div className={classes.backdrop}></div>)
}

const Overlay = (props) => {
    return (<><div className={classes.overlay}>
        <div className="classes.innerSection">
hi im new fddgdgdgd</div>
    </div>
    
    </>)
}

const Modal = (props) => {
    return (<Fragment>
        <Backdrop />
        <Overlay />
   </Fragment>) 
}

export default Modal;