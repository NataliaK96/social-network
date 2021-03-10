import { makeStyles } from '@material-ui/core/styles';
import '../../assets/colors.scss'

export const useStyles = makeStyles((theme) => ({
  delete: {
    backgroundColor: '#ce8e82bd',
  },
  upload: {
    backgroundColor: '#579979',
    color: '#ffffff'
  },
  save: {
    backgroundColor: '#579979',
    color: '#ffffff'
  },
  send: {
    backgroundColor: '#6fc79cab',
  },
  default: {
    backgroundColor: '#6fc79cab',
  }
}));
