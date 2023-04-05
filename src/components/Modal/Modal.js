import React, { Component } from "react";
import { createPortal } from "react-dom";
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component { 

    componentDidMount() { 
        // console.log('Modal  componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    }

    // очищаємо події при розмонтуванні
    componentWillUnmount() { 
        // console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown)


    }

    handleKeyDown = event => {
            // console.log(event.code);
            if (event.code==='Escape') { 
                // console.log('Нажали ESC, потрібно закрити модалку');
                this.props.onClose();
            }
    }

    handleBackdroupClick = event => { 
        // console.log('Kлікнули в БекДроп');
        // this.props.onClose();
        // console.log('currentTarget',event.currentTarget);
        // console.log('target', event.target);
        
        if (event.currentTarget === event.target) { 
            this.props.onClose();

        }
    }
    
    render() { 

        return createPortal(

            <div className="Modal__backdrop" onClick={this.handleBackdroupClick}>

                <div className="Modal__content">{this.props.children}</div>

            </div>,modalRoot,);
        // (
            
        // );
        }
}

