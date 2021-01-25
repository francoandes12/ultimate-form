import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Permanent Marker',
    textAlign: 'center',
    fontSize: '40px',
    color: 'deeppink',
    textShadow: '1px 1px darkmagenta'
  }
}))
const Header = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.root} variant='h1'>
      the ultimate form challenge
    </Typography>
  )
}

export default Header
