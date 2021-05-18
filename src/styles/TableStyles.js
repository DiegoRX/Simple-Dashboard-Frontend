import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '830px',
    margin: '0 auto',
    height: '55vh',
  },
  table: {
    minWidth: 450,
    position: 'relative',
  },
  head: {
    backgroundColor: '#00bac7',
    height: 100,
    position: 'sticky',
    top: 0, /* Don't forget this, required for the stickiness */
  },
  cellHead: {
    position: 'sticky',
    top: 0, /* Don't forget this, required for the stickiness */
    color: 'white',
    padding: '5px',
    width: '100px',
    backgroundColor: '#00bac7',
    zIndex: '999 !important',
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
  actions: {
    position: 'relative',
  },
});

export default useStyles;
