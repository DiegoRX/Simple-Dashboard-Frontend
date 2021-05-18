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
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import Modal2 from '../Modal/Modal2';
import EditFormatos from '../../DashboardAdmin/Formatos/EditFormatos';
// import { users } from '../../../../api/Users.json';

const useStyles = makeStyles({
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
    fontSize: '16px',
  },
  edit: {
    color: '#00bac7',
    cursor: 'pointer',
    fontSize: '30px',
  },
  view: {
    color: '#f01473',
  },
  delete: {
    color: '#97979e',
  },
  toogle: {
    color: '#3FAEDE',
  },
});

const TableUnit = ({ unit = [] }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const _openModal = () => setIsOpen(true);
  const _closeModal = () => setIsOpen(false);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align='center' className={classes.cell}>Nombre</TableCell>
            <TableCell align='center' className={classes.cell}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unit.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center' className={classes.cell} component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center'>
                <EditIcon
                  onClick={_openModal}
                  className={classes.edit}
                />
                <ToggleOnIcon className={classes.toogle} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isOpen && (
        <Modal2 onClose={_closeModal}>
          <EditFormatos onClick={_closeModal} />
        </Modal2>
      )}
    </TableContainer>
  );
};

export default TableUnit;
