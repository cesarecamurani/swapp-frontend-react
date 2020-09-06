import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  searchBar: {
    fontFamily: 'Arcon',
    outline: 0,
    color: `${Nord.snowStorm0}`,
    background: `${Nord.polarNight3}`,
    width: '27em',
    border: 0,
    padding: '10px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`,
    fontSize: '18px'
  }
}))
