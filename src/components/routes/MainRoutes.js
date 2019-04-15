import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../common/Home';
import CashPayment from '../payment/CashPayment';
import PaymentRequest from '../payment/PaymentRequest';
import ChequePayment from '../payment/ChequePayment';


class MainRoutes extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path="/payment/cash" exact component={CashPayment} />
            <Route path="/payment/cheque" exact component={ChequePayment} />
            <Route path="/payment/request" exact component={PaymentRequest} />
            <Route path="/*" exact component={Home} />
          </Switch>
        </div>
    )
  }
}

export default MainRoutes;