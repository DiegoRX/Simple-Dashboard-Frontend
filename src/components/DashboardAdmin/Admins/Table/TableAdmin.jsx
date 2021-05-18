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
import EditAdmin from '../EditAdmin';
import RequestService from '../../../../config';
import { confirmationAlert, success } from '../../../../functions/SweetAlert/Alerts';
// import { users } from '../../../../api/Users.json';

const TableComercios = ({ isOpen, viewModal, activation, user = [] }) => {
  const classes = useStyles();

  const [adminInfo, setAdminInfo] = useState({});

  const _openModal = (row) => {
    viewModal();
    setAdminInfo(row);
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
      success('Administrador Activado');
    };
  };
  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/user/${row.id}`);
    const { data } = await RequestService.get('/user');
    activation(data);
    if (res.status === 200) {
      success('Administrador Inactivado');
    };
  };

  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar este Administrador?',
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
        title: '¿Desea desactivar este Administrador?',
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
                  <TableCell align='center' className={classes.cellHead}>Correo</TableCell>
                  <TableCell align='center' className={classes.cellHead}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align='center' component='th' scope='row'>
                      {row.firstName}
                    </TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                    <TableCell align='center' className={classes.actions}>
                      <EditIcon
                        onClick={() => _openModal(row)}
                        className={classes.edit}
                      />
                      <Switch className='switchTable' initialState={row.isActive} onChange={() => _toggle(row)} />
                    </TableCell>
                    {isOpen && (
                      <Modal className='ModalContainer'>
                        <EditAdmin
                          onClick={viewModal}
                          row={adminInfo}
                        />
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

export default TableComercios;
