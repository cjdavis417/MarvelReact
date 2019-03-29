import React from 'react';
import { observable, action, decorate } from 'mobx';
import classNames from 'classnames';


class Modal extends React.PureComponent {

    

    isOpen = false;
    
    open = (e) => {
        if (e) { e.preventDefault(); }
        this.isOpen = true;
    }

    close = (e) => {
        if (e) { e.preventDefault(); }
        this.isOpen = false;
    }

    render() {
        const overlayClasses = classNames({ open: this.isOpen});

        return (
            <div id='modal' className={overlayClasses}>
            
            </div>
        )
    }
}

export default Modal;

//https://mobx.js.org/best/decorators.html
decorate(Modal, {
    isOpen: observable,
    open: action,
    close: action,

})