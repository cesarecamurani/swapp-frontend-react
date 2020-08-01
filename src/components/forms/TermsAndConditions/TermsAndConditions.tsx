import React from 'react';
import useStyles from '../styles';
import { Link } from 'react-router-dom';
import { REGISTER_PATH } from '../../../utils/paths';

export default function TermsAndConditions(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      Terms and Conditions:
      <div className={classes.form}>
        <p className={classes.p}>
          1. Close the WC top at all times. <br/><br/>
          2. Never squeeze the toothpaste from the middle. <br/><br/>
          3. Eat all your vegetables. <br/><br/>
          4. Don't accept candies from strangers. <br/><br/>
          5. Don't cry over spilled milk. <br/><br/>
          6. Don’t put off until tomorrow what you can do today. <br/><br/>
          7. There’s more than one way to skin a cat. <br/><br/>
          8. Make hay while the sun shines. <br/><br/>
          9. Two heads are better than one. <br/>
        </p>  
      </div>
      <p className={classes.p}>  
        <Link className={classes.textLink} to={REGISTER_PATH}> 
          Back to Register form
        </Link>
      </p>
    </div>
  );
}
