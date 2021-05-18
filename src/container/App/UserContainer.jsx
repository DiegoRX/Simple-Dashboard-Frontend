import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderUser from '../../components/UsableComponents/Header/HeaderUser';
import HomeUser from '../../components/DashboardUser/Home/Home';
import AsideUser from '../../components/UsableComponents/AsideUser/AsideUser';
import NewInvoice from '../../components/DashboardUser/CreateNew/NewInvoice/NewInvoice';
import NewExpense from '../../components/DashboardUser/CreateNew/NewExpense/NewExpense';
import NewCommercialAdvisor from '../../components/DashboardUser/CreateNew/NewCommercialAdvisor/NewComercialAdvisor';
import NewProductService from '../../components/DashboardUser/CreateNew/NewProductService/NewProductService';
import NewPurchaseOrder from '../../components/DashboardUser/CreateNew/NewPurchaseOrder/NewPurchaseOrder';
import NewQuote from '../../components/DashboardUser/CreateNew/NewQuote/NewQuote';
import NewRemission from '../../components/DashboardUser/CreateNew/NewRemission/NewRemission';
import NewClientProvider from '../../components/DashboardUser/CreateNew/NewClientProvider/NewClientProvider';
import NewPurchase from '../../components/DashboardUser/CreateNew/NewPurchase/NewPurchase';
import CreditNotes from '../../components/DashboardUser/Sales/CreditNotes/CreditNotes';
import InvoicePayments from '../../components/DashboardUser/Sales/InvoicePayments/InvoicePayments';
import Invoices from '../../components/DashboardUser/Sales/Invoices/Invoices';
import Quotes from '../../components/DashboardUser/Sales/Quotes/Quotes';
import Referals from '../../components/DashboardUser/Sales/Referals/Referals';
import DebitNotes from '../../components/DashboardUser/Purchases/DebitNotes/DebitNotes';
import Expenses from '../../components/DashboardUser/Purchases/Expenses/Expenses';
import PaymentsInPurchases from '../../components/DashboardUser/Purchases/PaymentsInPurchases/PaymentsInPurchases';
import Purchases from '../../components/DashboardUser/Purchases/Purchases/Purchases';
import ClientesProveedores from '../../components/DashboardUser/DataBase/ClientesProveedores/ClientesProveedores';
import NewClienteProveedor from '../../components/DashboardUser/DataBase/ClientesProveedores/NewClienteProveedor';
import VerClienteProveedor from '../../components/DashboardUser/DataBase/ClientesProveedores/VerClienteProveedor';
import EditClienteProveedor from '../../components/DashboardUser/DataBase/ClientesProveedores/EditClienteProveedor';
import BankCashbox from '../../components/DashboardUser/DataBase/BankCashbox/BankCashbox';
import UsersAsesors from '../../components/DashboardUser/DataBase/UsersAsesors/UsersAsesors';
import Categories from '../../components/DashboardUser/Inventories/Categories/Categories';
import ProductsServices from '../../components/DashboardUser/Inventories/ProductsServices/ProductsServices';
import Profile from '../../components/DashboardUser/Settings/Profile/Profile';
import Taxes from '../../components/DashboardUser/Settings/Taxes/Taxes';
import DocumentFormat from '../../components/DashboardUser/Settings/DocumentFormat/DocumentFormat';
import Membership from '../../components/DashboardUser/ManageMembership/Membership/Membership';
import NumberingResolution from '../../components/DashboardUser/Settings/NumberingResolution/NumberingResolution';
import PaymentMethods from '../../components/DashboardUser/Settings/PaymentMethods/PaymentMethods';
import PurchasesExpenses from '../../components/DashboardUser/Reports/PurchasesExpenses/PurchasesExpenses';
import Sales from '../../components/DashboardUser/Reports/Sales/Sales';

const UserContainer = () => (
  <div className='app_container'>
    <BrowserRouter>
      <HeaderUser />
      <div className='Aside_block'>
        <AsideUser />
      </div>
      <div className='dashboard'>
        <div className='minDashboard'>
          <Switch>
            <Route exact path='/appComercio/home' component={HomeUser} />
            <Route exact path='/appComercio/Cotización' component={NewQuote} />
            <Route exact path='/appComercio/Factura' component={NewInvoice} />
            <Route exact path='/appComercio/Remision' component={NewRemission} />
            <Route exact path='/appComercio/Cliente-Proveedor' component={NewClientProvider} />
            <Route exact path='/appComercio/Compra' component={NewPurchase} />
            <Route exact path='/appComercio/OrdendeCompra' component={NewPurchaseOrder} />
            <Route exact path='/appComercio/Gasto' component={NewExpense} />
            <Route exact path='/appComercio/Producto-Servicio' component={NewProductService} />
            <Route exact path='/appComercio/Producto-Servicio' component={NewProductService} />
            <Route exact path='/appComercio/Facturas' component={Invoices} />
            <Route exact path='/appComercio/Cotizacion' component={NewQuote} />
            <Route exact path='/appComercio/Remisiones' component={Referals} />
            <Route exact path='/appComercio/Pagosafacturas' component={InvoicePayments} />
            <Route exact path='/appComercio/NotasCredito' component={CreditNotes} />
            <Route exact path='/appComercio/Compras' component={Purchases} />
            <Route exact path='/appComercio/NotasDebito' component={DebitNotes} />
            <Route exact path='/appComercio/PagosACompras' component={PaymentsInPurchases} />
            <Route exact path='/appComercio/Gastos' component={Expenses} />
            <Route exact path='/appComercio/AsesorComercial' component={NewCommercialAdvisor} />
            <Route exact path='/appComercio/Producto-Servicio' component={NewProductService} />
            <Route exact path='/appComercio/Clientes-Proveedores' component={ClientesProveedores} />
            <Route exact path='/appComercio/Cliente-Proveedor' component={NewClienteProveedor} />
            <Route exact path='/appComercio/VerClienteProveedor' component={VerClienteProveedor} />
            <Route exact path='/appComercio/EditClienteProveedor' component={EditClienteProveedor} />
            <Route exact path='/appComercio/BancosyCajas' component={BankCashbox} />
            <Route exact path='/appComercio/Usuarios-Asesores' component={UsersAsesors} />
            <Route exact path='/appComercio/Categorias' component={Categories} />
            <Route exact path='/appComercio/Productos-Servicios' component={ProductsServices} />
            <Route exact path='/appComercio/Perfil' component={Profile} />
            <Route exact path='/appComercio/Impuestos' component={Taxes} />
            <Route exact path='/appComercio/MetodosdePago' component={PaymentMethods} />
            <Route exact path='/appComercio/FormatosdeDocumentos' component={DocumentFormat} />
            <Route exact path='/appComercio/Resoluciones-Numeraciones' component={NumberingResolution} />
            <Route exact path='/appComercio/Membresia' component={Membership} />
            <Route exact path='/appComercio/Ventas' component={Sales} />
            <Route exact path='/appComercio/Compras-Gastos' component={PurchasesExpenses} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>

);

export default UserContainer;
