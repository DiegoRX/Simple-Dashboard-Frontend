import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const EditPermission = ({ onClick, row }) => {

  const [permission, setPermission] = useState({});

  useEffect(() => {
    setPermission(row);
  }, [row]);

  const [body, setValues] = useState({
    description: `${row.description}`,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/permission/${permission.id}`, body);
    if (res.status === 201) {
      success('Permiso Editado!');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='EDITAR PERMISOS' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='edit__LineContainer'>
            <p>Nombre del permiso</p>
            <input
              name='description'
              className='input90'
              value={body.description}
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
              type='submit'
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

export default EditPermission;
