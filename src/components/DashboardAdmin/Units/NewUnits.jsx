import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const NewUnits = ({ onClick }) => {

  const [body, setValues] = useState({
    name: '',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/unit', body);
    if (res.status === 201) {
      success('Unidad Creada');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVA UNIDAD' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <>
              <p>Nombre:</p>
              <select
                name='name'
                className='inputDrop90'
                onChange={(e) => handleChange(e)}
              >
                <option value='X'>Seleccione el tipo de unidad</option>
                <option value='UNIDAD'>Unidad</option>
                <option value='METRO_CUADRADO'>Metro Cuadrado</option>
                <option value='METRO_LINEAL'>Metro Lineal</option>
              </select>
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

export default NewUnits;
