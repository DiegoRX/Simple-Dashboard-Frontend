import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { rejected, success } from '../../../functions/SweetAlert/Alerts';

const NewImpuesto = ({ onClick }) => {

  const [body, setValues] = useState({
    name: '',
    value: '',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/tax', body);
    if (res.status === 201) {
      success('Medio de Pago Creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVO IMPUESTO' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>

            <p>Nombre</p>
            <input
              name='name'
              className='input90'
              placeholder='Introducir Nombre'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='new__LineContainer'>
            <p>Porcentaje</p>
            <input
              name='value'
              type='text'
              // pattern='[0-9]*'
              // min='0'
              // max='100'
              className='input90'
              placeholder='Introducir porcentaje'
              onChange={(e) => handleChange(e)}
            />
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

export default NewImpuesto;
