import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2/src/sweetalert2';
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
import EditPermission from '../EditPermission';
import RequestService from '../../../../config';
import '../../../../styles/App.scss';
import { confirmationAlert, success } from '../../../../functions/SweetAlert/Alerts';

const TablePermissions = ({ isOpen, viewModal, activation, permission = [] }) => {
  const classes = useStyles();

  const [permissionInfo, setPermissionInfo] = useState([]);

  const _openModal = (row) => {
    viewModal();
    setPermissionInfo(row);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (permission.length > 0) {
      setLoading(false);
    }
  }, [permission]);

  const Activate = async (row) => {
    const res = await RequestService.delete(`/permission/${row.id}`);
    const { data } = await RequestService.get('/permission');
    activation(data);
    if (res.status === 201) {
      success('Forma de Pago Activada');
    };
  };
  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/permission/${row.id}`);
    const { data } = await RequestService.get('/permission');
    activation(data);
    if (res.status === 201) {
      success('Forma de Pago Activada');
    };
  };

  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar este Permiso?',
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
        title: '¿Desea desactivar este Permiso?',
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
                  <TableCell align='center' className={classes.cellHead}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permission.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align='center' component='th' scope='row'>
                      {row.description}
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
                        <EditPermission row={permissionInfo} onClick={viewModal} />
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

export default TablePermissions;
