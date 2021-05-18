import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Swal from 'sweetalert2';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../../../../styles/TableStyles';
import Switch from '../../../UsableComponents/Buttons/ToogleSwitch';
import Modal from '../../../UsableComponents/Modal/Modal';
import RequestService from '../../../../config';
import EditUnits from '../EditUnits';
import InitialCapital from '../../../../functions/InitialCapital';

const TableUnits = ({ isOpen, viewModal, activation, unit = [] }) => {
  const classes = useStyles();

  const [unitInfo, setUnitInfo] = useState({});

  const _openModal = (row) => {
    viewModal();
    setUnitInfo(row);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (unit.length > 0) {
      setLoading(false);
    }
  }, [unit]);

  const [isActive, setIsActive] = useState({});

  const Activate = async (row) => {
    const res = await RequestService.delete(`/unit/${row.id}`);
    const { data } = await RequestService.get('/unit');
    activation(data);
    setIsActive(data);
    if (res.status === 201) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: '¡Unidad Activada!',
        width: '500px',
        padding: '0px',
        background: '#EDF7ED',
        toast: true,
        showConfirmButton: false,
        timer: 3500,
      });
      console.log(row.isActive);
    };
  };
  const Desactivate = async (row) => {
    const res = await RequestService.delete(`/unit/${row.id}`);
    const { data } = await RequestService.get('/unit');
    activation(data);
    setIsActive(data);
    if (res.status === 201) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: '¡Unidad Inactivada!',
        width: '500px',
        padding: '0px',
        background: '#EDF7ED',
        toast: true,
        showConfirmButton: false,
        timer: 3500,
      });
      console.log(row.isActive);
    };
  };
  const confirmation = (row) => {
    if (row.isActive === false) {
      Swal.fire({
        title: '¿Desea activar esta Unidad?',
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
        title: '¿Desea desactivar esta Unidad?',
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
    setIsActive(row);
    confirmation(row);
    console.log(isActive);
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
                {unit.map((row) => (
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
                        <EditUnits row={unitInfo} onClick={viewModal} />
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

export default TableUnits;
