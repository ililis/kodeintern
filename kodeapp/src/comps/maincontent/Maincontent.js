import './Maincontent.css';
import React, {useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { UsersContext } from '../../context';
import Users from './Users';
import LoadingUsers from './LoadingUsers';

const Maincontent = (props) => {

  const [users, setUsers] = useState([{}]);
  const [fetchUsers, isLoading, error] = useFetching( async () => {
    const response = await PostService.getUsersByDepartment(props.dep)
    console.log(response);
    setUsers(response);
  })
  // since React 18 useEffect always running twice :/
  useEffect ( () => {
    console.log("useEffect workin");
    fetchUsers()
  }, [props.dep])

  return (
    // <UsersContext.Provider value={{
    //   users,
    //   setUsers
    // }}>
    <div className="maincontent">
      {isLoading
        ? <LoadingUsers quantity={5}/>
        : <div>
            <Users users={users}/>
            {/* <LoadingUsers quantity={5}/> */}
          </div>
      }
      { error && <h3>Ошибка</h3> }
    </div>
  // </UsersContext.Provider>
  );
}

export default Maincontent;