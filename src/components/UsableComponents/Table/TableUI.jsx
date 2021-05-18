import React, { useState, useEffect } from 'react';
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
import RequestService from '../../../config';

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
    color: '#00bac7',
  },
  view: {
    color: '#f01473',
  },
  delete: {
    color: '#97979e',
  },
});

const TableUI = ({ value1, value2, value3, value4, value5 }) => {
  const classes = useStyles();

  const [user, setUsers] = useState([]);

  const getUser = async () => {
    const { data } = await RequestService.get('/user');
    const { users } = data;
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, ['algo']);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell}>{value1}</TableCell>
            <TableCell align='center' className={classes.cell}>{value2}</TableCell>
            <TableCell align='center' className={classes.cell}>{value3}</TableCell>
            <TableCell align='center' className={classes.cell}>{value4}</TableCell>
            <TableCell align='center' className={classes.cell}>{value5}</TableCell>
            <TableCell align='center' className={classes.cell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.firstName}
              </TableCell>
              <TableCell align='center'>{row.identificactionNumber}</TableCell>
              <TableCell align='center'>{row.phone}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
              <TableCell align='center'>{row.isActive}</TableCell>
              <TableCell align='center'>
                <Link to='EditClienteProveedor'><EditIcon className={classes.edit} /></Link>
                <Link to='VerClienteProveedor'><VisibilityIcon className={classes.view} /></Link>
                <DeleteForeverIcon className={classes.delete} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUI;
