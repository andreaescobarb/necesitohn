import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Content from './Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body={children} />
      </div>
    );
  }

}

export default App;
