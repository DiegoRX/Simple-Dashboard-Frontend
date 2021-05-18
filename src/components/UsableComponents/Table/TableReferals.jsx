import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PrintIcon from '@material-ui/icons/Print';

// import { users } from '../../../../api/Users.json';

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
    color: '',
  },
  view: {
    color: '#f01473',
  },
  delete: {
    color: '#97979e',
  },
});

const TableQuotes = ({ user = [] }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align='center' className={classes.cell}>Número Remisión</TableCell>
            <TableCell align='center' className={classes.cell}>Fecha de Remisión</TableCell>
            <TableCell align='center' className={classes.cell}>Cliente/Empresa</TableCell>
            <TableCell align='center' className={classes.cell}>Valor Remisión</TableCell>
            <TableCell align='center' className={classes.cell}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center' component='th' scope='row'>
                {row.firstName}
              </TableCell>
              <TableCell align='center'>{row.identificactionNumber}</TableCell>
              <TableCell align='center'>{row.phone}</TableCell>
              <TableCell align='center'>{row.phone}</TableCell>
              <TableCell align='center'>
                <Link to='VerComercio'><DeleteForeverIcon className={classes.delete} /></Link>
                <Link to='VerComercio'><VisibilityIcon className={classes.view} /></Link>
                <Link to='VerComercio'><PrintIcon /></Link>
                <Link to='VerComercio'><EditIcon className={classes.edit} /></Link>
              </TableCell>
            </TableRow>
          ))}
          <TableRow key='2'>
            <TableCell align='center' component='th' scope='row'>
              Prueba out of backend
            </TableCell>
            <TableCell align='center'>45646514</TableCell>
            <TableCell align='center'>454546</TableCell>
            <TableCell align='center'>
              <Link to='VerComercio'><DeleteForeverIcon className={classes.view} /></Link>
              <Link to='VerComercio'><VisibilityIcon className={classes.view} /></Link>
              <Link to='VerComercio'><PrintIcon className={classes.view} /></Link>
              <Link to='VerComercio'><EditIcon className={classes.view} /></Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableQuotes;
