import React, { useState, useEffect, Fragment, Component } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

import SubComponent from './pages/Sub1'

const ThemeContext = React.createContext('light');

class App extends Component {
  cb(msg) {
    console.log(msg)
  }
  render () {
    return (
      <div>
        <SubComponent title={'name'} callback={this.cb.bind(this)}/>
      </div>
    )
  }
}



export default App;
