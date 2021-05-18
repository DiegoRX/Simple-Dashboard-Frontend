import React, { useState } from 'react';
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
// import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import Modal from '../../../UsableComponents/Modal/Modal';
// import RequestService from '../../../config';
import EditCountry from '../EditCountry';
// import { users } from '../../../../api/Users.json';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '830px',
    margin: '0 auto',
  },
  table: {
    minWidth: 450,

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
    fontSize: '30px',
  },
  toogle: {
    color: '#3FAEDE',
  },
});

const TableCountries = ({ handleOpen, user = [] }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const _openModal = () => setIsOpen(true);
  const _closeModal = () => setIsOpen(false);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align='center' className={classes.cell}>Nombre</TableCell>
            <TableCell align='center' className={classes.cell}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center' component='th' scope='row'>
              Colombia
            </TableCell>
            <TableCell align='center'>
              <EditIcon
                onClick={_openModal}
                className={classes.edit}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' component='th' scope='row'>
              Brazil
            </TableCell>
            <TableCell align='center'>
              <EditIcon
                onClick={_openModal}
                className={classes.edit}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' component='th' scope='row'>
              Argentina
            </TableCell>
            <TableCell align='center'>
              <EditIcon
                onClick={_openModal}
                className={classes.edit}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {isOpen && (
        <Modal className='ModalContainer'>
          <EditCountry onClick={_closeModal} />
        </Modal>
      )}
    </TableContainer>
  );
};

export default TableCountries;
