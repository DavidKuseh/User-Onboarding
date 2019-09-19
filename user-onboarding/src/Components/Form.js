import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Provide a name'),
    email: yup.string().required('Provide an email'),
    password: yup.string().required('Provide a password'),
    terms: yup.boolean().required('Please agree to the terms of service'),
  });

  const initialUserForm = {
    name: '',
    email: '',
    password: '',
    terms: false,
  }

  function UserForm( props ) {
    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialUserForm}
        onSubmit={props.onSubmit}
        render={() => {
          return (
            <Form>
              <div>
                <label>
                <label htmlFor='name'>Name: </label>
                  <Field name='name' type='text' placeholder='Name' />
                  <ErrorMessage name='name' component='div' />
                </label>
              </div>
              <div>
                <label>
                <label htmlFor='email'>Email: </label>
                  <Field name='email' type='text' placeholder='Email' />
                  <ErrorMessage name='email' component='div' />
                </label>
              </div>
              <div>
              <label htmlFor='password'>Password: </label>
                  <Field name='password' type='text' placeholder='Password' />
                  <ErrorMessage name='password' component='div' />
              </div>
              <label>
                <Field name='terms' type='checkbox'  />
                <label htmlFor='terms'>Agree to Terms of Service</label>
              </label>
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      />
    );
  }
  

export {UserForm};