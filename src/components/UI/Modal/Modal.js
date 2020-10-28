import React, { Component,Fragment } from 'react';
import Backdrop from '../Backdrop/Backrop';
import classes from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show)
    }

    componentDidUpdate() {
        console.log('Modal componentDidUpdate ')
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;