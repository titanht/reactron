import React, { Component } from 'react';
const numToWords = require('num-to-words');

class ChequePayment extends Component {

  state = {
    chequeFigures: '',
    chequeWords: ''
  }

  componentDidMount() {
    console.log("Num to ", numToWords.numToWords(4));
  }

  handleFigureChange = (e) => {
    const amount = e.target.value;

    this.setState({
      chequeFigures: amount,
      chequeWords: numToWords.numToWords(parseFloat(amount))
    })

  }

  render() {
    return (
      <div className="container-fluid pt-1">
        <h2>Cheque Payment</h2>
        
        <form className="">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Payee</label>
            <div className="col-sm-10">
              <input type="test" className="form-control"
              placeholder="Payee Name" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Cheque Amount[In figures]</label>
            <div className="col-sm-8">
              <input 
              type="number" className="form-control"
              value={this.state.chequeFigures}
              onChange={this.handleFigureChange}
              placeholder="Enter cheque amount" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Cheque Amount[In Words]</label>
            <div className="col-sm-8">
              <textarea 
                readOnly
                value={this.state.chequeWords}
                type="email" className="form-control"
                placeholder="Cheques in words" />
            </div>
          </div>

          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default ChequePayment
