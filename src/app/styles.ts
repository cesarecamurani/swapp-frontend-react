import { makeStyles } from '@material-ui/core/styles';
import * as Nord from '../utils/nordPalette';

export default makeStyles(() => ({
  app: {
    textAlign: 'center',
    backgroundColor: `${Nord.polarNight2}`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: `calc(20px + 2vmin)`,
    fontFamily: 'Voltaire',
    fontWeight: 'lighter',
    color: `${Nord.snowStorm0}`,
  }
}))
