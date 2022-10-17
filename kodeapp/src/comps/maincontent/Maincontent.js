import './Maincontent.css';
import React, {useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { UsersContext } from '../../context';
import Users from './Users';
import LoadingUsers from './LoadingUsers';
import CrashPlug from './CrashPlug';

const Maincontent = (props) => {
  
  const [needUpdate, setNeedUpdate] = useState(false);
  const [users, setUsers] = useState([{}]);
  const [fetchUsers, isLoading, error] = useFetching( async () => {
    const response = await PostService.getUsersByDepartment(props.dep)
    console.log(response);
    setUsers(response);
  })
  // since React 18 useEffect always running twice :/
  useEffect ( () => {
    console.log("useEffect workin");
    fetchUsers();
    setNeedUpdate(false);
  }, [props.dep, needUpdate])

  const forceUpdate = () => {
    setNeedUpdate(true);
  }

  return (
    // <UsersContext.Provider value={{
    //   users,
    //   setUsers
    // }}>
    <div className="maincontent">
      {isLoading
        ? <LoadingUsers quantity={5}/>
        : <Users users={users}/>
      }
      { error && <CrashPlug update={forceUpdate}/> }
    </div>
  // </UsersContext.Provider>
  );
}

export default Maincontent;

