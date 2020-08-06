import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  defaultButton: {
    textAlign: 'center',
    backgroundColor: `${Nord.frost3}`,
    color: `${Nord.snowStorm0}`,
    outline: 'none',
    border: 'none',
    width: '265px',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: '18px',
    padding: '8px',
    paddingTop: '4px',
    margin: '30px 5px 30px 5px',
    borderRadius: '4px',
    '&:hover': {
      background: `${Nord.aurora3}`,
      color: `${Nord.polarNight2}`,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: `${Nord.aurora0}`,
      color: `${Nord.polarNight2}`,
    }
  }
}))
