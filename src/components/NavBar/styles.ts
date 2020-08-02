import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  navbar: {
    height: '75px',
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
  textLink: {
    color: 'inherit',
    textDecoration: 'inherit',
  }
}))
