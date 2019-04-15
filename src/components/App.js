import React, { Component } from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Sidebar from './layout/Sidebar';
import MainRoutes from './routes/MainRoutes';

export class App extends Component {
  
  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <Sidebar />
            </div>
            <div className="pane">
              <MainRoutes />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
