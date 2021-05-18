import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const FormContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    background-color: white;
    padding: 15px;
    @media (max-width: 700px){
        width: auto;
    }
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

const VerClienteProveedor = () => {
  return (
    <>
      <Title title='Ver Cliente / Proveedor' />
      <InfoContainer>
        <FormContainer>
          <LineContainer>
            <p className='Bold'>Tipo</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Tipo de identificación</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Número de identificación</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Nombre o razón social</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Segundo nombre</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Apellidos</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>País</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Departamento</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Ciudad</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Dirección</p>
            <p>?</p>
          </LineContainer>
        </FormContainer>
        <FormContainer>
          <LineContainer>
            <p className='Bold'>Celular</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Email</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Teléfono fijo</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Página web</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Régimen</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Asesor</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Lista de precios</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Forma de pago</p>
            <p>?</p>
          </LineContainer>
          <LineContainer>
            <p className='Bold'>Es proveedor</p>
            <p>?</p>
          </LineContainer>
        </FormContainer>
      </InfoContainer>
      <ButtonContainer>
        <button type='submit' className='button-1'>Guardar</button>
        <Link to='Clientes-Proveedores'><button type='submit' className='button-1'>Cancelar</button></Link>
      </ButtonContainer>
    </>
  );
};

export default VerClienteProveedor;
