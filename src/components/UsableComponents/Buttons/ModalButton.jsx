import React from 'react';
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
    zIndex: 1,
    '&:hover': {
      backgroundColor: '#ff1683',
      cursor: 'pointer',
    },
  },
  text: {
    backgroundColor: 'transparent',
    top: 20,
    textAlign: 'center',
  },
});

const ModalButton = ({ onClick }) => {

  const classes = useStyles();

  return (
    <>
      <Fab
        className={classes.button}
        role='button'
        tabIndex='0'
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </>

  );
};

export default ModalButton;

