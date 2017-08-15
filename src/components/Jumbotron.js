import React from 'react';
//
import { classify } from '../utils';
import Container from './Container';

//import './jumbotron.scss';

export default class Jumbotron extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    const containerFluid = props.containerFluid;
    
    return (
      <div {...props} >
        <Container fluid={containerFluid}>
          {this.props.children}
        </Container>
      </div>
    );
  } 
}
/*
className={classify('jumbotron', props.className)}
const CSS_NAME = 'jumbotron';
    const props = Object.assign({}, this.props);
    props.className = classify(CSS_NAME, props.className);
    const containerFluid = props.containerFluid;
    delete props.containerFluid;

    const body = props.className.includes(CSS_NAME + '-fluid') ?
      <Container>{this.props.children}</Container> :
      this.props.children;

    return (
      <div {...props}>
        {body}
      </div>
    );
*/