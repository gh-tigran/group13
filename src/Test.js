import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Test extends Component {
  static propTypes = {
    navigator: PropsTypes.object.isRequired,
  };

  componentDidMount() {
    console.log(1);
  }

  render() {
    const { navigator } = this.props;
    console.log(navigator);
    return (
      <div />
    );
  }
}

export default Test;
