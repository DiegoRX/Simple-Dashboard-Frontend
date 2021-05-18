import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Simple from '../container/App/Simple';
import AppContainer from '../container/App/AppContainer';
import UserContainer from '../container/App/UserContainer';
import Login from '../container/UserLog/Login';
import Registro from '../container/UserLog/Registro';
import RememberPassword from '../container/UserLog/RememberPassword';
import UpdatePassword from '../container/UserLog/UpdatePassword';
import '../styles/App.scss';
import '../styles/AppContainer.scss';
import '../styles/Aside.scss';
import '../styles/Buttons.scss';
import '../styles/Dashboard.scss';
import '../styles/Header.scss';
import '../styles/Input.scss';
import '../styles/Login.scss';
import '../styles/Media.scss';
import '../styles/EditScreens.scss';
import '../styles/NewScreens.scss';
import '../styles/Membership.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Simple} />
    <Route exact path='/app/Comercios' component={AppContainer} />
    <Route exact path='/app/Administradores' component={AppContainer} />
    <Route exact path='/app/Permisos' component={AppContainer} />
    <Route exact path='/app/Formatos' component={AppContainer} />
    <Route exact path='/app/Regimenes' component={AppContainer} />
    <Route exact path='/app/Paises' component={AppContainer} />
    <Route exact path='/app/Impuestos' component={AppContainer} />
    <Route exact path='/app/FormasDePago' component={AppContainer} />
    <Route exact path='/app/MediosDePago' component={AppContainer} />
    <Route exact path='/app/UnidadesdeMedida' component={AppContainer} />
    <Route exact path='/appComercio/home' component={UserContainer} />
    <Route exact path='/appComercio/Cotización' component={UserContainer} />
    <Route exact path='/appComercio/Factura' component={UserContainer} />
    <Route exact path='/appComercio/Remision' component={UserContainer} />
    <Route exact path='/appComercio/Cliente-Proveedor' component={UserContainer} />
    <Route exact path='/appComercio/AsesorComercial' component={UserContainer} />
    <Route exact path='/appComercio/Compra' component={UserContainer} />
    <Route exact path='/appComercio/OrdendeCompra' component={UserContainer} />
    <Route exact path='/appComercio/Gasto' component={UserContainer} />
    <Route exact path='/appComercio/Producto-Servicio' component={UserContainer} />
    <Route exact path='/appComercio/Producto-Servicio' component={UserContainer} />
    <Route exact path='/appComercio/Facturas' component={UserContainer} />
    <Route exact path='/appComercio/Cotizacion' component={UserContainer} />
    <Route exact path='/appComercio/Remisiones' component={UserContainer} />
    <Route exact path='/appComercio/Pagosafacturas' component={UserContainer} />
    <Route exact path='/appComercio/NotasCredito' component={UserContainer} />
    <Route exact path='/appComercio/Compras' component={UserContainer} />
    <Route exact path='/appComercio/NotasDebito' component={UserContainer} />
    <Route exact path='/appComercio/Compras' component={UserContainer} />
    <Route exact path='/appComercio/NotasDebito' component={UserContainer} />
    <Route exact path='/appComercio/PagosACompras' component={UserContainer} />
    <Route exact path='/appComercio/Gastos' component={UserContainer} />
    <Route exact path='/appComercio/Clientes-Proveedores' component={UserContainer} />
    <Route exact path='/appComercio/NewClienteProveedor' component={UserContainer} />
    <Route exact path='/appComercio/VerClienteProveedor' component={UserContainer} />
    <Route exact path='/appComercio/EditClienteProveedor' component={UserContainer} />
    <Route exact path='/appComercio/BancosyCajas' component={UserContainer} />
    <Route exact path='/appComercio/Usuarios-Asesores' component={UserContainer} />
    <Route exact path='/appComercio/Categorias' component={UserContainer} />
    <Route exact path='/appComercio/Productos-Servicios' component={UserContainer} />
    <Route exact path='/appComercio/Perfil' component={UserContainer} />
    <Route exact path='/appComercio/Impuestos' component={UserContainer} />
    <Route exact path='/appComercio/MetodosdePago' component={UserContainer} />
    <Route exact path='/appComercio/FormatosdeDocumentos' component={UserContainer} />
    <Route exact path='/appComercio/Resoluciones-Numeraciones' component={UserContainer} />
    <Route exact path='/appComercio/Membresia' component={UserContainer} />
    <Route exact path='/appComercio/Ventas' component={UserContainer} />
    <Route exact path='/appComercio/Compras-Gastos' component={UserContainer} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/registro' component={Registro} />
    <Route exact path='/RememberPassword/' component={RememberPassword} />
    <Route exact path='/UpdatePassword' component={UpdatePassword} />
  </BrowserRouter>
);

export default App;
