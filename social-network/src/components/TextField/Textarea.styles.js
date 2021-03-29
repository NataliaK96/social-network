import { makeStyles } from '@material-ui/core/styles';
import '../../assets/colors.scss'

export const styleTextarea = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        },
      },
  }));
  