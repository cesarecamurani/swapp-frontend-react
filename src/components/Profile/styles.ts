import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  page: {
    paddingLeft: '30px',
    margin: '130px'
  },
  p: {
    fontSize: '18px'
  },
  welcomeMessage: {
    fontSize: '50px',
    color: `${Nord.aurora3}`,
  },
  error: {
    color: `${Nord.aurora0}`,
    margin: '6px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  textLink: {
    color: `${Nord.aurora3}`,
    textDecoration: 'inherit',
    '&:hover': {
      color: `${Nord.frost2}`,
      textDecoration: 'underline'
    }
  },
  box: {
    position: 'inherit',
    background: `${Nord.polarNight3}`,
    maxWidth: '1200px',
    width: '1200px',
    padding: '40px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`
  },
}))
