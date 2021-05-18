import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../../../../styles/TableStyles';
import Switch from '../../../UsableComponents/Buttons/ToogleSwitch';
import Modal from '../../../UsableComponents/Modal/Modal';
import EditPaymentMethod from '../EditPaymentMethod';
import InitialCapital from '../../../../functions/InitialCapital';
import RequestService from '../../../../config';
import { success } from '../../../../functions/SweetAlert/Alerts';

const TableMethods = ({ isOpen, viewModal, activation, paymentMethod = [] }) => {
  const classes = useStyles();

  const [paymentMethodInfo, setPaymentMethodInfo] = useState({});

  const _openModal = (row) => {
    viewModal();
    setPaymentMethodInfo(row);
  };

  const [loading, setLoading] = useState(true);

  const [noData, setNoData] = useState('');

  useEffect(() => {
    console.log(paymentMethod.length);
    if (paymentMethod.length === 0) {
      setLoading(false);
    }
  }, [paymentMethod]);

  const Activate = async (row) => {
    const res = await RequestService.delete(`/payment-methods/${row.id}`);
    const { data } = await RequestService.get('/payment-methods');
    activation(data);
    if (res.status === 201) {
      success('Medio de Pago Activado');
    };
  };
  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/payment-methods/${row.id}`);
    const { data } = await RequestService.get('/payment-methods');
    activation(data);
    if (res.status === 201) {
      success('Medio de Pago Inactivado');
    };
  };

  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar este Medio de Pago?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bac7',
        cancelButtonColor: '#f01473',
        confirmButtonText: 'Activar',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'confirm-button-class',
          cancelButton: 'cancel-button-class',
        },
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        // showClass: {
        //   popup: 'swal2-noanimation',
        //   backdrop: 'swal2-noanimation',
        // },
      }).then((result) => {
        if (result.isConfirmed) {
          Activate(row);
        }
      });
    } else {
      Swal.fire({
        title: '¿Desea desactivar este Medio de Pago?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bac7',
        cancelButtonColor: '#f01473',
        confirmButtonText: 'Desactivar',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'confirm-button-class',
          cancelButton: 'cancel-button-class',
        },
        showClass: {
          popup: 'swal2-noanimation',
          backdrop: 'swal2-noanimation',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Desactivate(row);
        }
      });
    }
  };

  const _toggle = (row) => {
    confirmation(row);
  };

  const setTexto = () => {
    console.log('Hola0');
    setLoading(false);
    setNoData('No hay datos :(');
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align='center' className={classes.cell}>Nombre</TableCell>
              <TableCell align='center' className={classes.cell}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentMethod.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='center' component='th' scope='row'>
                  {InitialCapital(row.name)}
                </TableCell>
                <TableCell align='center' className={classes.actions}>
                  <EditIcon
                    onClick={() => _openModal(row)}
                    className={classes.edit}
                  />
                  <Switch className='switchTable' initialState={row.isActive} onChange={() => _toggle(row)} />
                </TableCell>
                {isOpen && (
                  <Modal className='ModalContainer'>
                    <EditPaymentMethod row={paymentMethodInfo} onClick={viewModal} />
                  </Modal>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    </>
  );
};

export default TableMethods;
