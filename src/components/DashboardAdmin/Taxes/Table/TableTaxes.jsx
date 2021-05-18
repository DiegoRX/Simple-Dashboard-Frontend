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
import EditTax from '../EditTax';
import RequestService from '../../../../config';
import { confirmation, success } from '../../../../functions/SweetAlert/Alerts';

const TableTaxes = ({ isOpen, viewModal, activation, tax = [] }) => {
  const classes = useStyles();

  const [taxInfo, setTaxInfo] = useState({});

  const _openModal = (row) => {
    viewModal();
    setTaxInfo(row);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tax.length > 0) {
      setLoading(false);
    }
  }, [tax]);

  const Activate = async (row) => {
    const res = await RequestService.delete(`/tax/${row.id}`);
    const { data } = await RequestService.get('/tax');
    activation(data);
    if (res.status === 201) {
      success('Impuesto Activado');
    };
  };
  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/tax/${row.id}`);
    const { data } = await RequestService.get('/tax');
    activation(data);
    if (res.status === 201) {
      success('Impuesto Inactivado');
    };
  };

  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar este Impuesto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bac7',
        cancelButtonColor: '#f01473',
        confirmButtonText: 'Activar',
        buttonsStyling: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        customClass: {
          confirmButton: 'confirm-button-class',
          cancelButton: 'cancel-button-class',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Activate(row);
        }
      });
    } else {
      Swal.fire({
        title: '¿Desea desactivar este Impuesto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bac7',
        cancelButtonColor: '#f01473',
        confirmButtonText: 'Desactivar',
        buttonsStyling: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        customClass: {
          confirmButton: 'confirm-button-class',
          cancelButton: 'cancel-button-class',
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

  return (
    // <>
    //   {loading ? (
    //     <div className='center'>
    //       <CircularProgress color='secondary' />
    //     </div>
    //   ) :
    //     (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align='center' className={classes.cellHead}>Nombre</TableCell>
            <TableCell align='center' className={classes.cellHead}>Porcentaje</TableCell>
            <TableCell align='center' className={classes.cellHead}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tax.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center' component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center' component='th' scope='row'>
                {row.value}
                %
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
                  <EditTax row={taxInfo} onClick={viewModal} />
                </Modal>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    //     )}
    // </>
  );
};

export default TableTaxes;
