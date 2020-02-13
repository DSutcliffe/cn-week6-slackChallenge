import React, { Component } from 'react'
import './css/App.css';

import Content from './components/Content.js'
import Navbar from './components/Navbar.js'
import ContentHeader from './components/ContentHeader.js'

class App extends Component {

  render() {

    return (
      <div className="container">
        <div>
          <h3>Nav Bar</h3>
          <Navbar />
        </div>
        <div>
          <ContentHeader />
          <Content />
          <input type='text'/>
        </div>
        
      </div>
    )
  }
}

export default App;