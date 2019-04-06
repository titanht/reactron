import React, { Component } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import ChatPane from './common/ChatPane';
import Welcome from './common/Welcome';

export class App extends Component {
  render() {
    const name = "Harry";
    return (
      <div className="window">
        <Header></Header>
        <div className="window-content">
        { name ?
            ( <ChatPane
                /> ) :
            ( <Welcome /> ) }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
