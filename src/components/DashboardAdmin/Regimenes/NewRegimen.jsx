import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const NewRegimen = ({ onClick }) => {

  const [body, setValues] = useState({
    name: '',
    user: '5f3dc7467285b246cc4c980c',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/regime', body);
    if (res.status === 201) {
      success('Regimen creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVO RÉGIMEN' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <p>Nombre:</p>
            <input
              name='name'
              className='input90'
              placeholder='Introducir nombre del Régimen'
              onChange={handleChange}
            />
          </div>
          <div className='new__ButtonContainer'>
            <button
              type='submit'
              className='button-save'
            >
              Guardar
            </button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>

    </>
  );
};

export default NewRegimen;
