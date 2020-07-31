import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  footer: {
    height: '40px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: `${Nord.polarNight0}`,
    color: `${Nord.snowStorm0}`,
    textAlign: 'center',
    fontSize: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    boxSizing: 'border-box',
    zIndex: 90
  }
}))
