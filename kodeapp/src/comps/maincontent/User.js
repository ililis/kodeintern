import './User.css';

const User = (props) => {
    return (
      <div>
        {props.user.firstName}
      </div>
    );
  }

export default User;