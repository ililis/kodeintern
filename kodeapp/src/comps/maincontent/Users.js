import User from './User';
import './Users.css';

const Users = (props) => {

    return (
      <div>
        {props.users.items != null ? props.users.items.map(curuser => (
          <User key={curuser.id} user={curuser}/>
        )) : ""
        }
      </div>
    );
  }

export default Users;