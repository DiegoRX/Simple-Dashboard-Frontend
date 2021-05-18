import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const EditRegimen = ({ onClick, row }) => {

  const [regime, setRegime] = useState({});

  useEffect(() => {
    setRegime(row);
  }, [row]);

  const [body, setValues] = useState({
    name: row.name,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/regime/${regime.id}`, body);
    if (res.status === 201) {
      success('Régimen Editado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };
  return (
    <>
      <Title title='EDITAR RÉGIMEN' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='edit__LineContainer'>
            <p>Nombre del Régimen</p>
            <input
              name='name'
              className='input90'
              value={body.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='edit__ButtonContainer'>
            <button type='submit' className='button-save'>Guardar</button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>
    </>
  );
};

export default EditRegimen;
