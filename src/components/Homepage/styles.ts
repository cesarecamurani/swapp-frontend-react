import { makeStyles } from '@material-ui/core/styles'
import * as Nord from '../../utils/nordPalette'

export default makeStyles(() => ({
  page: {
    paddingLeft: '30px',
    margin: '130px'
  },
  welcomeMessage: {
    fontSize: '50px',
    color: `${Nord.aurora3}`,
  },
  box: {
    position: 'inherit',
    background: `${Nord.polarNight3}`,
    maxWidth: '1200px',
    width: '1200px',
    padding: '40px',
    borderRadius: '6px',
    textAlign: 'center',
    boxShadow: `0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)`
  },
}))
