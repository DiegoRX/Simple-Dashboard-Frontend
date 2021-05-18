import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/UsableComponents/Header/Header';
import Aside from '../../components/UsableComponents/Aside/Aside';
import Comercios from '../../components/DashboardAdmin/Comercios/Comercios';
import VerComercio from '../../components/DashboardAdmin/Comercios/VerComercio';
import EditComercio from '../../components/DashboardAdmin/Comercios/EditComercio';
import NewComercio from '../../components/DashboardAdmin/Comercios/NewComercio';
import Admins from '../../components/DashboardAdmin/Admins/Admins';
import Permissions from '../../components/DashboardAdmin/Permissions/Permissions';
import Formatos from '../../components/DashboardAdmin/Formatos/Formatos';
import Regimenes from '../../components/DashboardAdmin/Regimenes/Regimenes';
import Countries from '../../components/DashboardAdmin/Countries/Countries';
import Taxes from '../../components/DashboardAdmin/Taxes/Taxes';
import PaymentsMethods from '../../components/DashboardAdmin/PaymentMethods/PaymentsMethods';
import Payments from '../../components/DashboardAdmin/Payments/Payments';
import Units from '../../components/DashboardAdmin/Units/Units';

const AppContainer = () => (
  <div className='app_container'>
    <BrowserRouter basename='/app'>
      <Header />
      <div className='Aside_block'>
        <Aside />
      </div>
      <div className='dashboard'>
        <div className='minDashboard'>
          <Switch>
            <Route exact path='/Comercios' component={Comercios} />
            <Route exact path='/NewComercio' component={NewComercio} />
            <Route exact path='/:comercioId/VerComercio' component={VerComercio} />
            <Route exact path='/EditComercio' component={EditComercio} />
            <Route exact path='/Administradores' component={Admins} />
            <Route exact path='/Permisos' component={Permissions} />
            <Route exact path='/Formatos' component={Formatos} />
            <Route exact path='/Regimenes' component={Regimenes} />
            <Route exact path='/Paises' component={Countries} />
            <Route exact path='/impuestos' component={Taxes} />
            <Route exact path='/FormasdePago' component={Payments} />
            <Route exact path='/MediosdePago' component={PaymentsMethods} />
            <Route exact path='/UnidadesdeMedida' component={Units} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>

);

export default AppContainer;
