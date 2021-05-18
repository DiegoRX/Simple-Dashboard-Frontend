import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorageIcon from '@material-ui/icons/Storage';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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
          name='Crear Nuevo'
          items={['Factura', 'Cotización', 'Remisión',
            'Cliente-Proveedor', 'Compra', 'Orden de Compra',
            'Gasto', 'Asesor Comercial', 'Producto-Servicio']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <AddIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Ingresos / Ventas'
          items={['Facturas', 'Cotizaciones', 'Remisiones',
            'Pagos a Facturas', 'Notas Crédito']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <AttachMoneyIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Egresos / Compras / Gastos'
          items={['Compras', 'Gastos', 'Pagos a Compras', 'Notas Débito']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <ShoppingCartIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Bases de Datos'
          items={['Clientes-Proveedores', 'Usuarios-Asesores', 'Bancos y Cajas']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <StorageIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Inventarios'
          items={['Categorías', 'Productos-Servicios']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <TrendingUpIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Configuración'
          items={['Perfil', 'Impuestos', 'Métodos de Pago',
            'Formatos de Documentos', 'Resoluciones-Numeraciones',
            'Membresía']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <SettingsIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Gestionar Membresía'
          items={['Membresía']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <PeopleIcon />
        </Category>
        <hr className='Divider-root' />
        <Category
          name='Informes'
          items={['Ventas', 'Compras-Gastos', 'Impuestos']}
          visible={expandend}
          handleExpanded={handleExpanded}
        >
          <EqualizerIcon />
        </Category>
        <hr className='Divider-root' />
      </ul>

    </div>
  );
};

export default MenuSimple;
