import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      width: '30em',
    },
  })
);
