import './Maincontent.css';
import React, {useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Users from './Users';
import LoadingUsers from './LoadingUsers';
import CrashPlug from '../UI/CrashPlug';
import { useContext } from 'react';
import { SortUsersContext } from '../../context';

const Maincontent = (props) => {
  let sortContext =  useContext(SortUsersContext);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [users, setUsers] = useState([]);
  const [fetchUsers, isLoading, error] = useFetching( async () => {
    const response = await PostService.getUsersByDepartment(props.dep, sortContext.sortType)
    console.log(response);
    setUsers(response);
  })

  const forceUpdate = () => {
    setNeedUpdate(true);
  }

  // since React 18 useEffect always running twice :/
  useEffect ( () => {
    console.log("useEffect workin");
    fetchUsers();
    setNeedUpdate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dep, needUpdate, sortContext])

  return (
    <div className="maincontent">
      {isLoading
        ? <LoadingUsers quantity={5}/>
        : <Users users={users}/>
      }
      { error && <CrashPlug update={forceUpdate}/> }
    </div>
  );
}

export default Maincontent;

