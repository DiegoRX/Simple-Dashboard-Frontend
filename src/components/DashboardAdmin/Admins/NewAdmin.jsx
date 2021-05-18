import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const NewAdmin = ({ onClick }) => {

  const [body, setValues] = useState({
	 'rol': 'SUPER_ADMIN',
    'email': '',
    'firstName': '',
    'password': 'asdg',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    console.log(body);
    event.preventDefault();
    const res = await RequestService.post('/user', body);
    if (res.status === 201) {
      success('Nuevo Administrador Creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVO ADMINISTRADOR' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <>
            <div className='new__LineContainer'>
              <p>Nombre</p>
              <input
                name='firstName'
                className='input90'
                placeholder='Nombre'
                onChange={handleChange}
              />
            </div>
            <div className='new__LineContainer'>
              <p>Email</p>
              <input
                name='email'
                type='email'
                className='input90'
                placeholder='Introducir Email'
                onChange={handleChange}
              />
            </div>
          </>
          <div className='new__ButtonContainer'>
            <button type='submit' className='button-save'>Guardar</button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>

    </>

  );
};

export default NewAdmin;
