import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount(){
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>; // "this", apenas numa classe deste genero!
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
