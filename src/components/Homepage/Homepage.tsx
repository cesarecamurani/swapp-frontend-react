import React from 'react';
// import UserService from '../../services/user.service';
import useStyles from './styles';

export default function Homepage(props: any) {
  const classes = useStyles();
  // const [content, setContent] = useState('');

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.welcomeMessage}> Welcome to the Homepage! </div>
      </div>
    </div>
  );
};
