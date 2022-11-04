import React from 'react';
import Greeter from './Greeter'

export default class GreeterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      greeter: new Greeter(),
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      greeter: new Greeter(props.userName)
    };
  }

  render() {
    return <div id='greet'>Message: {this.state.greeter.getGreeting()}</div>
  }
}