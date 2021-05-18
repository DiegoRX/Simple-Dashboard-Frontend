import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { rejected, success } from '../../../functions/SweetAlert/Alerts';

const EditTax = ({ onClick, row }) => {

  const [tax, setTax] = useState({});

  useEffect(() => {
    setTax(row);
  }, [row]);

  const [body, setValues] = useState({
    name: row.name,
    value: row.value,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/tax/${tax.id}`, body);
    console.log(res);
    if (res.status === 201) {
      success('Impuesto Editado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='EDITAR IMPUESTO' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='edit__LineContainer'>
            <p>Nombre</p>
            <input
              name='name'
              className='input90'
              value={body.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='edit__LineContainer'>
            <p>Porcentaje</p>
            <input
              name='value'
              className='input90'
              value={body.value}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='edit__ButtonContainer'>
            <button
              type='submit'
              className='button-save'
            >
              Guardar
            </button>
            <button
              type='button'
              className='button-cancel'
              onClick={onClick}
            >
              Cancelar
            </button>
          </div>
        </form>
      </InfoModal>

    </>
  );
};

export default EditTax;
