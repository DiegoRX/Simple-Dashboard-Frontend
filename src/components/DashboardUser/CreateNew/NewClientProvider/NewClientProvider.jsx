import React from 'react';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const NewClientProvider = () => {

  return (
    <>
      <Title title='NUEVO CLIENTE/PROVEEDOR' />
      <InfoContainer>
        <form className='new__FormContainer'>
          <div className='div2Columnas wrapCaja'>
            <div className='cajaUploadFoto'>
              <div className='upload-photo'>
                Agregar Imagen
              </div>
            </div>
          </div>
          <div className='new__GridContainer'>
            <div className='Form__Column'>
              <div className='new__LineContainer'>
                <p>Tipo*</p>
                <select className='inputDrop90'>
                  <option>Cliente</option>
                  <option>Proveedor</option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Empresa*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Nit/CC*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Nombre*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Dirección</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>País</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Ciudad</p>
                <input className='input90' />
              </div>
            </div>
            <div className='Form__Column'>
              <div className='new__LineContainer'>
                <p>Celular</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Telefono</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Proveedor</p>
                <input type='checkbox' />
              </div>
              <div className='new__LineContainer'>
                <p>Email</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Página web</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Régimen*</p>
                <select className='inputDrop90'>
                  <option>
                    Simplificado
                  </option>
                  <option>
                    Común
                  </option>
                  <option>
                    Especial
                  </option>
                  <option>
                    AUTORRETENEDOR
                  </option>
                  <option>
                    COLOMBIA
                  </option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Asesor*</p>
                <select className='inputDrop90'>
                  <option>
                    Seleccione
                  </option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Lista de precios*</p>
                <select className='inputDrop90'>
                  <option>
                    Lista 1
                  </option>
                  <option>
                    Lista 2
                  </option>
                  <option>
                    Lista 3
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className='new__ButtonContainer'>
            <div className='ButtonContainer'>
              <button type='submit' className='button-1'>Guardar</button>
            </div>
            <div className='ButtonContainer'>
              <button type='submit' className='button-1'>Cancelar</button>
            </div>
          </div>
        </form>
      </InfoContainer>
    </>
  );
};

export default NewClientProvider;
