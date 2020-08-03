import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  page: {
    padding: '0 0 0 0',
    margin: '130px'
  },
  p: {
    fontSize: '18px'
  },
  error: {
    color: `${Nord.aurora0}`,
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
  inputContainer: {
    width: '100%'
  },
  form: {
    position: 'inherit',
    alignContent:' center',
    zIndex: 1,
    background: `${Nord.polarNight3}`,
    maxWidth: '410px',
    width: '410px',
    padding: '40px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`
  },
  formInput: {
    fontFamily: 'Arcon',
    outline: 0,
    background: `${Nord.snowStorm0}`,
    width: '96.5%',
    border: 0,
    padding: '10px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '18px',
    '&:hover': {
      background: `${Nord.aurora3}`
    }
  }
}))
