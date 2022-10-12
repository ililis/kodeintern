import './Maincontent.css';
import React, {useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { UsersContext } from '../../context';
import Users from './Users';

const Maincontent = (props) => {

  const [users, setUsers] = useState([{}]);
  const [fetchUsers, isLoading, error] = useFetching( async () => {
    const response = await PostService.getUsersByDepartment(props.dep)
    console.log(response);
    setUsers(response);
  })

  useEffect ( () => {
    fetchUsers()
  }, []) 

    return (
      <UsersContext.Provider value={{
        users,
        setUsers
      }}>
      <div className="Maincontent">
        {isLoading
          ? <span>Загрузка</span>
          : <div>
              <Users users={users}/>
            </div>
        }
        { error && <h3>Ошибка</h3> }
      </div>
    </UsersContext.Provider>
    );
  }

export default Maincontent;