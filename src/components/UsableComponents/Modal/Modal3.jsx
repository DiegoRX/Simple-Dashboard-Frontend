import React, { Component, children, onClick } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalDisplay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:999;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const ModalContainer = styled.div`
    position: relative;
    top: 10rem;
    background-color: #ffffff;
    padding: 1rem;
    width: 400px;
    @media (max-width: 420px){
      width: 320px;
    }
  `;

const ModalCloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    background-color: #F5F5F5;
    padding: 0.5rem1rem;
  `;

class Modal3 extends Component {

  render() {
    return ReactDom.createPortal(
      <ModalDisplay onClick={this.props.onClick}>
        <ModalContainer>
          <ModalCloseButton />
          {this.props.children}
        </ModalContainer>
      </ModalDisplay>,
      document.getElementById('modal'),
    );
  }
}

export default Modal3;
