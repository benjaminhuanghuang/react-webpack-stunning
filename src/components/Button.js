import React from 'react';
//
import { classify } from '../utils';

//import './button.scss';

export default class Button extends React.Component {
  render() {
    const tag = this.props.href? 'a':'button';
    const className = classify('btn', this.props.className);

    return (
      <tag {...this.props} className={className}>
        Discover
      </tag>
    );
  }
}