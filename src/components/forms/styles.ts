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
  eyeIcon: {
    fontSize: '25px',
    cursor: 'pointer'
  },
  error: {
    color: `${Nord.aurora0}`,
    margin: '6px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  welcomeMessage: {
    fontSize: '50px',
    color: `${Nord.aurora3}`,
  },
  textLink: {
    color: `${Nord.aurora3}`,
    textDecoration: 'inherit',
    '&:hover': {
      color: `${Nord.frost2}`,
      textDecoration: 'underline'
    }
  },
  form: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-300px',
    marginLeft: '-230px',
    background: `${Nord.polarNight3}`,
    maxWidth: '410px',
    width: '410px',
    padding: '30px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`
  },
  formInput: {
    fontFamily: 'Voltaire',
    color: `${Nord.polarNight0}`,
    outline: 0,
    background: `${Nord.snowStorm0}`,
    width: '99.5%',
    border: 0,
    padding: '8px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '18px',
    '&:hover': {
      background: `${Nord.aurora3}`
    }
  }
}))
