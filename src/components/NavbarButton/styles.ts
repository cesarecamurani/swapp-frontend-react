import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../nordPalette'

export default makeStyles(() => ({
  navbarButton: {
    textAlign: 'center',
    backgroundColor: `${Nord.frost3}`,
    color: `${Nord.snowStorm0}`,
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: '16px',
    fontWeight: 500,
    padding: '4px',
    margin: '6px',
    borderRadius: '4px',
    '&:hover': {
      background: `${Nord.aurora3}`,
      color: `${Nord.polarNight2}`,
    }
  }
}))