import React, { useState } from 'react';
import Button from '../Ui/Button';

import Card from '../Ui/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {

const[enterUsername,setEnterUsername]=useState('');
const[enterAge,setEnterAge]=useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterUsername,enterAge);
    setEnterAge('');
    setEnterUsername('');
  };

  const usernameChangeHandler=(event)=>{
    setEnterUsername(event.target.value);

  }

  const ageChangeHandler=(event)=>{
    setEnterAge(event.target.value);

  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enterUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enterAge} onChange={ageChangeHandler} />
        <Button type="submit" >Add User</Button>
    
      </form>
    </Card>
  );
};

export default AddUser;
