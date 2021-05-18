import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import DropDown from '../../UsableComponents/Input/DropDown';

const NewComercio = () => {
  return (
    <>
      <Title title='Crear Comercio' />
      <InfoModal>
        <form className='new_FormContainer'>
          <div className='new_LineContainer'>
            <p>Tipo</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Tipo de identificación</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Número de identificación</p>
            <div className='new_LineContainer2'>
              <input className='input80' />
              <input className='input10' />
            </div>
          </div>
          <div className='new_LineContainer'>
            <p>Nombre o razón social</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Segundo nombre</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Apellidos</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>País</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Departamento</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Ciudad</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Dirección</p>
            <input className='input45' />
          </div>
        </form>
        <form className='new_FormContainer'>
          <div className='new_LineContainer'>
            <p>Celular</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Email</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Teléfono fijo</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Página web</p>
            <input className='input45' />
          </div>
          <div className='new_LineContainer'>
            <p>Régimen</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Asesor</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Lista de precios</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Forma de pago</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_LineContainer'>
            <p>Es proveedor</p>
            <DropDown className='inputDrop' />
          </div>
          <div className='new_ButtonContainer'>
            <button type='submit' className='button-1'>Guardar</button>
            <button type='submit' className='button-1'>Cancelar</button>
          </div>
        </form>
      </InfoModal>
    </>

  );
};

export default NewComercio;

// 'rol': 'SUPER_ADMIN',
// 'email': '',
// 'password': '',
// 'identificactionType': '',
// 'identificactionNumber': '',
// 'firstName': '',
// 'lastName': '',
// 'phoneNumber': '',

{ /* <>
<LineContainer>
  <p>Nombre</p>
  <input
    name='firstName'
    className='input90'
    placeholder='Nombre'
    onChange={handleChange}
  />
</LineContainer>
<LineContainer>
  <p>Apellido</p>
  <input
    name='lastName'
    className='input90'
    placeholder='Apellido'
    onChange={handleChange}
  />
</LineContainer>
<LineContainer>
  <p>Email</p>
  <input
    name='email'
    className='input90'
    placeholder='Introducir Email'
    onChange={handleChange}
  />
</LineContainer>
<LineContainer>
  <p>Contraseña</p>
  <input
    name='password'
    type='password'
    className='input90'
    placeholder='Introducir Contraseña'
    onChange={handleChange}
  />
</LineContainer>
<LineContainer>
  <p>Numero de Teléfono</p>
  <input
    name=''
    className='input90'
    placeholder='Numero de Teléfono'
    onChange={handleChange}
  />
</LineContainer>
</>
)
} */ }
