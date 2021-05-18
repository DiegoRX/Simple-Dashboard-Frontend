import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';
import TextInput from '../../../UsableComponents/Input/TextInput';
import DropDown from '../../../UsableComponents/Input/DropDown';

const FormContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    background-color: white;
    padding: 15px;
    @media (max-width: 900px){
    width: 90%;
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
`;

const LineContainer2 = styled.div`
    display: flex;
    width: 50%;
    height: 30px;
`;

const NewClienteProveedor = () => {
  return (
    <>
      <Title title='Editar Cliente / Proveedor' />
      <InfoContainer>
        <FormContainer>
          <LineContainer>
            <p>Tipo</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Tipo de identificación</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Número de identificación</p>
            <LineContainer2>
              <TextInput classN='input80' />
              <TextInput classN='input10' />
            </LineContainer2>
          </LineContainer>
          <LineContainer>
            <p>Nombre o razón social</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Segundo nombre</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Apellidos</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>País</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Departamento</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Ciudad</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Dirección</p>
            <TextInput classN='input45' />
          </LineContainer>
        </FormContainer>
        <FormContainer>
          <LineContainer>
            <p>Celular</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Email</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Teléfono fijo</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Página web</p>
            <TextInput classN='input45' />
          </LineContainer>
          <LineContainer>
            <p>Régimen</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Asesor</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Lista de precios</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Forma de pago</p>
            <DropDown classN='inputDrop' />
          </LineContainer>
          <LineContainer>
            <p>Es proveedor</p>
            <DropDown classN='inputDrop' />
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

export default NewClienteProveedor;
