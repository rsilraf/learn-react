import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MoneyCtrl from './MoneyCtrl.jsx';


let accountControll = {
  income:{
    salary: [
      { date: '2016-01-01', value: 2000.00, desc: 'Job', received: true },
      { date: '2016-01-15', value: 200.00, desc: 'Freela', received: true }
    ],
    others: [
      { date: '2016-01-26', value: 100.00, desc: 'Present', received: true }
    ]
  },
  expenses: {
    light: [
      { date: '2016-01-10', value: 80.00, desc: 'Light', paid: false}
    ],
    internet: [
      { date: '2016-01-08', value: 50.00, desc: 'Internet', paid: true }
    ],
    creditCard: [
      { date: '2016-01-14', value: 354.62, desc: 'MasterCard', paid: false }
    ]
  },
  credit: {
    MasterCard: [
      { date: '2016-01-08', value: 50.00, desc: 'Internet', closed: false }
    ]
  },
  investments: {
    'savings account':[
      { date: '2016-01-30', value: 550.00, desc: 'Saving Account', done: true }
    ]
  }
};


ReactDOM.render(<MoneyCtrl account={accountControll}></MoneyCtrl>, document.getElementById('app'));
