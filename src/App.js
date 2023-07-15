

import React, { useContext } from 'react';
import UserEntry from './UserEntry';
import { UserStateContext, UserStateReducerContext } from './userContext';

const App = () => {

  const users = useContext(UserStateContext)
  const dispatch = useContext(UserStateReducerContext);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      "type": "insert",
      "name": e.target.elements.name.value,
      "college": e.target.elements.college.value
    })
  }

  const getUserListHtml = () => {
    return users.map(elem => 
      <UserEntry name={elem.Name} college={elem.College} grad_year={2020}/>
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
