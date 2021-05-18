import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CircularProgress from '@material-ui/core/CircularProgress';
import Switch from '../../../UsableComponents/Buttons/ToogleSwitch';
import VerComercio from '../VerComercio';
import Modal from '../../../UsableComponents/Modal/Modal';
import RequestService from '../../../../config';
import useStyles from '../../../../styles/TableStyles';
import { confirmationAlert, success } from '../../../../functions/SweetAlert/Alerts';

const TableComercios = ({ isOpen, viewModal, activation, user = [] }) => {
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});

  const _openModal = (row) => {
    viewModal();
    setUserInfo(row);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.length > 0) {
      setLoading(false);
    }
  }, [user]);

  const Activate = async (row) => {
    const res = await RequestService.delete(`/user/${row.id}`);
    const { data } = await RequestService.get('/user');
    activation(data);
    if (res.status === 200) {
      success('Comercio Activado');
    };
  };

  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/user/${row.id}`);
    const { data } = await RequestService.get('/user');
    activation(data);
    if (res.status === 200) {
      success('Comercio Inactivado');
    };
  };

  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar este Comercio?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bac7',
        cancelButtonColor: '#f01473',
        confirmButtonText: 'Activar',
        allowOutsideClick: true,
        buttonsStyling: false,
        // showClass: {
        //   popup: 'animate__animated animate__fadeInDown',
        // },
        // hideClass: {
        //   popup: 'animate__animated animate__fadeOutUp',
        // },
        customClass: {
          popup: 'popup',
          container: 'container-alert',
          title: 'title-alert',
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
        title: '¿Desea desactivar este Comercio?',
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
    <>
      {/* {loading ? (
        <div className='center'>
          <CircularProgress color='secondary' />
        </div>
      ) :
        ( */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align='center' className={classes.cellHead}>Nombre</TableCell>
              <TableCell align='center' className={classes.cellHead}>NIT</TableCell>
              <TableCell align='center' className={classes.cellHead}>Teléfono</TableCell>
              <TableCell align='center' className={classes.cellHead}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='center' component='th' scope='row'>
                  {row.firstName}
                </TableCell>
                <TableCell align='center'>{row.identificactionNumber}</TableCell>
                <TableCell align='center'>{row.phoneNumber}</TableCell>
                <TableCell align='center' className={classes.actions}>
                  <VisibilityIcon
                    onClick={() => _openModal(row)}
                    className={classes.view}
                  />
                  <Switch className='switchTable' initialState={row.isActive} onChange={() => _toggle(row)} />
                </TableCell>
                {isOpen && (
                  <Modal className='ModalContainer2'>
                    <VerComercio row={userInfo} onClick={viewModal} />
                  </Modal>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* )} */}
    </>
  );
};

export default TableComercios;
