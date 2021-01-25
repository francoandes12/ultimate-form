import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))
const MainContainer = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.root}
      component='main'
      maxWidth='xs'
      {...props}
    >
      {children}
    </Container>
  )
}

export default MainContainer
