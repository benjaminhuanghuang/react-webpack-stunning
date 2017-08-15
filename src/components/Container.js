import React from 'react';
//
import { classify } from '../utils';

//import './jumbotron.scss';

export default class Container extends React.Component {
  render() {
    const cls =  `container${this.props.fluid?'-fluid':''}`;
    
    return (
      <div className={cls}>
        {this.props.children}
      </div>
    );
  }
}