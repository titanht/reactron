import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="media-body">
              <strong><Link to="/">Home</Link></strong>
            </div>
          </li>
          <li className="list-group-item">
            <div className="media-body">
              <strong><Link to="/payment/request">Payment Request</Link></strong>
            </div>
          </li>
          <li className="list-group-item">
            <div className="media-body">
              <strong><Link to="/payment/cheque">Payment by Cheque</Link></strong>
            </div>
          </li>
          <li className="list-group-item">
            <div className="media-body">
              <strong><Link to="/payment/cash">Payment by Cash</Link></strong>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
