import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    color: 'white',
    backgroundColor: '#F01473',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    position: 'inherit',
    marign: 'auto',
    '&:hover': {
      backgroundColor: '#dd1368',
      cursor: 'pointer',
    },
  },
  link: {
    backgroundColor: 'transparent',
  },
});

const AddButton = ({ url }) => {

  const classes = useStyles();

  return (
    <>
      <Link to={url} className={classes.link}>
        <Fab className={classes.button}>
          <AddIcon />
        </Fab>
      </Link>
    </>

  );
};

export default AddButton;

