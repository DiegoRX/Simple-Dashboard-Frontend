import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import Modal from '../../UsableComponents/Modal/Modal';

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    width: 100%;
    grid-column-gap: 30px;
    padding: 10px;
    @media (max-width: 1024px){
      grid-template-columns: 1fr;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: white;
    padding-bottom: 10px;
    margin: 0px 30px;
`;

const LineContainer = styled.div`
    display: inline-flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    border-bottom: 1px solid rgba(0, 186, 199, 0.3);
`;

const VerComercio = ({ onClick, row }) => {

  const [isOpen] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(row);
  }, [row]);

  return (
    <>
      <Title title='DETALLE COMERCIO' />
      <ImgContainer>
        <PersonIcon style={{ color: '#97979e', width: '15%', margin: 'auto', height: '3em' }} />
      </ImgContainer>
      <InfoModal>
        <FormContainer>
          <LineContainer>
            <p className='Bold'>Fecha de creación:</p>
            <p>{moment(user.created_at).format('YYYY-MM-DD')}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Nombre:</p>
            <p>{user.firstName}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Tipo de persona:</p>
            <p>{user.rol === 'COMERCIO' && 'Comercio'}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Régimen:</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Tipo de identificación:</p>
            <p>{user.identificactionType}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Identificación:</p>
            <p>{user.identificactionNumber}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Teléfono Fijo:</p>
            <p>{user.phone}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Teléfono Celular:</p>
            <p>{user.phoneNumber}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Email:</p>
            <p>{user.email}</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>País</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Ciudad:</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Dirección:</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Web:</p>
            <p>?</p>
          </LineContainer>
          <LineContainer />
        </FormContainer>
      </InfoModal>
      <ButtonContainer>
        <button type='submit' onClick={onClick} className='button-cancel'>Volver</button>
      </ButtonContainer>
      {isOpen && (
        <Modal className='ModalContainer2'>
          ¿seguro desea desactivar este usuario?
          <ButtonContainer>
            <Link to='verComercio'><button type='submit' className='button-1'>aceptar</button></Link>
            <Link to='verComercio'><button type='submit' className='button-2'>cancelar</button></Link>
          </ButtonContainer>
        </Modal>
      )}
    </>
  );
};

export default VerComercio;
