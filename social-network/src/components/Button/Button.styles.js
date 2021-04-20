import { makeStyles } from '@material-ui/core/styles';
import '../../assets/colors.scss'

export const useStyles = makeStyles((theme) => ({
  delete: {
    backgroundColor: '#f9796091',
  },
  cancel: {
    width: '98px',
    backgroundColor: '#f9796091',
  },
  close: {
    width: '30px',
    cursor: 'pointer'
  },
  add: {
    backgroundColor: '#579979',
    width: '98px',
    color: '#ffffff',
  },
  save: {
    backgroundColor: '#579979',
    color: '#ffffff'
  },
  send: {
    backgroundColor: '#84deb2ab',
    height: '42px',
    width: '100px',
  },
  login: {
    backgroundColor: '#20d665',
    color: '#ffffff',
    width: '200px'
  },
  default: {
    backgroundColor: '#84deb2ab',
  }
}));
