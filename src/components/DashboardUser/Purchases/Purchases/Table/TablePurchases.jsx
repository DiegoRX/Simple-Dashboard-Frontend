import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
  head: {
    backgroundColor: '#00bac7',
    height: 100,
  },
  cell: {
    color: 'white',
    padding: '5px',
    width: '100px',
  },
  edit: {
    color: '#00bac7',
    cursor: 'pointer',
    fontSize: '30px',
  },
  view: {
    color: '#f01473',
    fontSize: '30px',
  },
  delete: {
    color: '#97979e',
  },
});

const TableComercios = (
  // { isOpen, viewModal, activation, user = [] }
) => {
  const classes = useStyles();

  //   const [adminInfo, setAdminInfo] = useState({});

  //   const _openModal = (row) => {
  //     viewModal();
  //     setAdminInfo(row);
  //   };

  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     if (user.length > 0) {
  //       setLoading(false);
  //     }
  //   }, [user]);

  return (
    <>
      {/* {loading ? (<div className='center'><CircularProgress color='secondary' /></div>) :
        ( */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align='center' className={classes.cell}>Número compra</TableCell>
              <TableCell align='center' className={classes.cell}>Fecha Compra</TableCell>
              <TableCell align='center' className={classes.cell}>Proveedor/Empresa</TableCell>
              <TableCell align='center' className={classes.cell}>Valor Compra</TableCell>
              <TableCell align='center' className={classes.cell}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {user.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='center' component='th' scope='row'>
                  {row.firstName}
                </TableCell>
                <TableCell align='center'>{row.email}</TableCell>
                <TableCell align='center'>
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
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      {/* )} */}
    </>
  );
};

export default TableComercios;
