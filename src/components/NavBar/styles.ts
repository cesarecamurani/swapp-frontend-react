import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  navbar: {
    height: '90px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: `${Nord.polarNight0}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 100px',
    boxSizing: 'border-box',
    zIndex: 90
  },
  title: {
    cursor: 'pointer'
  },
  homeLink: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  textLink: {
    fontSize: '23px',
    padding: '5px',
    color: `${Nord.snowStorm0}`,
    textDecoration: 'inherit',
    '&:hover': {
      color: `${Nord.frost2}`
    }
  }
}))
