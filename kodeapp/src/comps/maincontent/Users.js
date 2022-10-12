import User from './User';
import './Users.css';

const Users = (props) => {

  console.log(props.users.items);
    return (
      <div>
        {props.users.items != null ? props.users.items.map(curuser => (
          <User key={curuser.id} user={curuser}/>
        )) : "goodbye"
        }
      </div>
    );
  }

export default Users;