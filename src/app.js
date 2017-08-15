import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
import Button from './components/Button';
import Jumbotron from './components/Jumbotron';

import './sass/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='app' transitionAppear={true}
        transitionAppearTimeout={500}>
        <Jumbotron className='-fluid custom' containerFluid={true}>
          <h1> Build React.js UI </h1>
          <p> with Bootstrap and SASS </p>
          <p>
            <Button className="-primary" href="www.google.com" target="_blank">
              Other Way
          </Button>
            <Button className="-outline-danger -sm" label="Use label property">
            </Button>
          </p>
          <Button className="-outline-success -lg -block" label="Discover things and stuff">
          </Button>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    );
  }
}
