import React, { useState, useEffect } from 'react';
import './App.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import uuid from 'uuid';

// import Form from './Components/Form';

const users = [
  {id: uuid(), name: 'James', email: 'james@gmail.com', password: 1234},
  {id: uuid(), name: 'Don', email: 'don@gmail.com', password: 1234},
  {id: uuid(), name: 'Lincoln', email: 'lincoln@gmail.com', password: 1234}
]

const initialUserForm = {
  name: '',
  email: '',
  password: ''
}

function App() {
  






  return (
    <div className="App">
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
