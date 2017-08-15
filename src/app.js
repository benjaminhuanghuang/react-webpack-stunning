import React from 'react';
//
import Button from './components/Button';
import Jumbotron from './components/Jumbotron';

import './sass/app.scss';

export default ()=>{
  return(
    <Jumbotron className = '-fluid custom'>
      <h1> Build React.js UI </h1>   
      <p> with Bootstrap and SASS </p>
      <p>
        <Button className="-primary" href="www.google.com" target="_blank"></Button>
        <Button className="-danger-outline -sm" disabled></Button>
      </p>
      <Button className="-primary-outline -lg -block" disabled/>
    </Jumbotron>
  );
}
