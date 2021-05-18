import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { rejected, success } from '../../../functions/SweetAlert/Alerts';

const NewPermiso = ({ onClick }) => {

  const [body, setValues] = useState({
    description: '',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/permission', body);
    if (res.status === 201) {
      success('Permiso creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVO PERMISO' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <>
              <p>Nombre:</p>
              <input
                name='description'
                className='input90'
                placeholder='Introducir nombre del permiso'
                onChange={handleChange}
              />
            </>
          </div>
          <div className='new__ButtonContainer'>
            <button type='submit' className='button-save'>Guardar</button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>
    </>
  );
};

export default NewPermiso;
