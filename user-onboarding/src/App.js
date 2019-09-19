import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Users from './Components/Users';
import {UserForm} from './Components/Form';

const usersAPI = "https://reqres.in/api/users";

function App() {
  const [userList, setUserList] = useState([]);
  const [serverError, setServerError] = useState('');

  const addUser = (values, actions) => {
    axios.post(usersAPI, {
      name: values.name,
      email: values.name,
      password: values.password,
      terms: values.terms
    })
      .then(res => {
        setUserList(userList.concat(res.data));
        actions.resetForm();
      })
      .catch(error => {
        setServerError(serverError + error.message);
      })
  };

  return (
    <div className="App">
      {serverError}
      <UserForm onSubmit={addUser}/>
      <Users userList={userList}/>
    </div>
  );
};
































export default App;
