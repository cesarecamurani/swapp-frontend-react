import React from 'react';
import useStyles from '../styles';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { REGISTER_PATH } from '../../../utils/paths';

export default function TermsAndConditions(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div style={{ fontSize: 30, textDecoration: 'underline' }}>
          Terms and Conditions:
        </div>
        <p className={classes.p}>
          1. Eat all your vegetables. <br/><br/>
          2. Don't cry over spilled milk. <br/><br/>
          3. Two heads are better than one. <br/><br/>
          4. Make hay while the sun shines. <br/><br/>
          5. Close the WC top at all times. <br/><br/>   
          6. Don't accept candies from strangers. <br/><br/>
          7. There’s more than one way to skin a cat. <br/><br/>
          8. Never squeeze the toothpaste from the middle. <br/><br/>
          9. Don’t put off until tomorrow what you can do today. <br/><br/>
        </p>
        <p className={classes.p}>  
          <Link className={classes.textLink} to={REGISTER_PATH}> 
            <RiArrowGoBackLine/> Back to Register form
          </Link>
        </p>
      </div>
    </div>
  );
}
