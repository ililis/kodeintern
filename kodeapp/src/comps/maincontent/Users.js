import { useContext } from 'react';
import { SortUsersContext } from '../../context';
import KodeLibrary from '../../functions/KodeLibrary';
import User from './User';
import './Users.css';

const Users = (props) => {
  // const isSortByBorn = useContext(SortUsersContext).sortType === "byborn";

  if ( useContext(SortUsersContext).sortType === "byborn" ) {
    const convD = KodeLibrary.convertDate;
    const todayFullDate = new Date()
    const today = convD(todayFullDate);

    return (
      <div className='users_container'>
        { props.users != null ? props.users.map(curuser => (
          convD(curuser.birthday) > today && <User key={curuser.id} user={curuser} showBirth={true}/>
        )) : "" }
        <div className='year_divider'>
          <div className='year_divider_line'><hr/></div>
            <p>{ todayFullDate.getFullYear() + 1 }</p>
          <div className='year_divider_line'><hr/></div>
        </div>
        { props.users != null ? props.users.map(curuser => (
          convD(curuser.birthday) < today && <User key={curuser.id} user={curuser} showBirth={true}/>
        )) : "" }
      </div>
    )
  }

  return (
    <div className='users_container'>
      { props.users != null ? props.users.map(curuser => (
        <User key={curuser.id} user={curuser} />
      )) : "" }
    </div>
  );
}

export default Users;