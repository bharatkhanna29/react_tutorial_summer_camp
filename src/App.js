

import React, { useContext, useEffect } from 'react';
import UserEntry from './UserEntry';
import { UserStateContext, UserStateReducerContext } from './userContext';
import { addUser, getAllUsers } from './UserClient';

const App = () => {

  const users = useContext(UserStateContext)
  const dispatch = useContext(UserStateReducerContext);

  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch])

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(e.target.elements.name.value, e.target.elements.college.value, dispatch)
  }

  const getUserListHtml = () => {
    return users.map(elem => 
      <UserEntry key={elem.id} id={elem.id} name={elem.name} college={elem.college} grad_year={2020}/>
    );
  }

  const getAddUserForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name"/>
        <label>College</label>
        <input type="text" name="college"/>
        <button>Add User</button>
      </form>
    )
  }

  return (
    <ul>
      {getAddUserForm()}
      {getUserListHtml()}
    </ul>
  );
}

export default App;
