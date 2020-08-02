import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  navbarButton: {
    textAlign: 'center',
    backgroundColor: `${Nord.frost3}`,
    color: `${Nord.snowStorm0}`,
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: '18px',
    fontWeight: 500,
    padding: '8px',
    paddingTop: '4px',
    paddingBottom: '4px',
    margin: '30px 5px 30px 5px',
    borderRadius: '4px',
    '&:hover': {
      background: `${Nord.aurora3}`,
      color: `${Nord.polarNight2}`,
    }
  }
}))
