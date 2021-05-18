import React, { useState } from 'react';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import Category from './Category';

const MenuSimple = () => {

  const [expandend, setExpanded] = useState('');

  const handleExpanded = (pExpanded) => {
    setExpanded(pExpanded);
  };

  return (
    <div className='aside_container--menu'>
      <ul>
        <Category
          name='Usuarios'
          items={['Comercios', 'Administradores']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <StorageIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Configuración'
          items={['Permisos', 'Unidades de Medida', 'Formatos', 'Regimenes',
            'Paises', 'Impuestos', 'Formas de Pago', 'Medios de Pago']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <SettingsIcon />
        </Category>
        <hr className='Divider-root' />
      </ul>
    </div>
  );
};

export default MenuSimple;
