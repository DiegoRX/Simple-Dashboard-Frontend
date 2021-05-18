import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

class Modal extends Component {

  render() {
    return ReactDom.createPortal(
      <div className='ModalDisplay'>
        <div className={this.props.className}>
          {this.props.children}
        </div>
      </div>,
      document.getElementById('modal'),
    );
  }
}

export default Modal;
