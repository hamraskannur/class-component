import { Component } from 'react';
import UsersContext from '../store/users-context';
import User from './User';

import classes from './Users.module.css';



class Users extends Component {
  static contextType=UsersContext
  constructor() {
    super()
    this.State = {
      showUsers: true
    };
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    })
  }

  render() {
    const usersList = (
      <ul>

        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>

        <button onClick={this.toggleUsersHandler}>
          {this.State.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.State.showUsers && usersList}
      </div>
    )
  }
}

export default Users;
