import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';

import DropDown from '../../UsableComponents/Input/DropDown';

const EditComercio = () => {
  return (
    <>
      <Title title='Editar Comercio' />
      <InfoContainer>
        <form className='edit__FormContainer'>
          <div className='edit__LineContainer'>
            <p>Tipo</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Tipo de identificación</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Número de identificación</p>
            <div className='edit__LineContainer2'>
              <input className='input80' />
              <input className='input10' />
            </div>
          </div>
          <div className='edit__LineContainer'>
            <p>Nombre o razón social</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Segundo nombre</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Apellidos</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>País</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Departamento</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Ciudad</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Dirección</p>
            <input className='input45' />
          </div>
        </form>
        <form className='edit__FormContainer'>
          <div className='edit__LineContainer'>
            <p>Celular</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Email</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Teléfono fijo</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Página web</p>
            <input className='input45' />
          </div>
          <div className='edit__LineContainer'>
            <p>Régimen</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Asesor</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Lista de precios</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Forma de pago</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__LineContainer'>
            <p>Es proveedor</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='edit__ButtonContainer'>
            <button type='submit' className='button-1'>Guardar</button>
            <button type='submit' className='button-1'>Cancelar</button>
          </div>
        </form>
      </InfoContainer>
    </>
  );
};

export default EditComercio;
