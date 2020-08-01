import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  page: {
    padding: '0 0 0 0',
    margin: '100px'
  },
  p: {
    fontSize: '16px'
  },
  welcomeMessage: {
    fontSize: '50px'
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
    position: 'inherit',
    alignContent:' center',
    zIndex: 1,
    background: `${Nord.polarNight3}`,
    maxWidth: '300px',
    padding: '40px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`
  },
  formInput: {
    fontFamily: 'lorenza',
    outline: 0,
    background: `${Nord.snowStorm0}`,
    width: '96.5%',
    border: 0,
    margin: '0 0 15px',
    padding: '10px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '15px',
    '&:hover': {
      background: `${Nord.aurora3}`
    }
  }
}))
