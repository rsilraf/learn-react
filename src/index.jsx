import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MoneyCtrl from './MoneyCtrl';


let accountControll =
{
  "incomes": [
    {
      "id": "1",
      "name": "Salário",
      "values": [
        {
          "id": "1",
          "desc": "NET",
          "value": 2000,
          "date": "2016-01-01T00:00:00.000Z"
        },
        {
          "id": "2",
          "desc": "Freela",
          "value": 150,
          "date": "2016-01-15T00:00:00.000Z"
        }
      ]
    },
    {
      "id": "2",
      "name": "Outros",
      "values": [
        {
          "id": "1",
          "desc": "Presente",
          "value": 100,
          "date": "2016-01-26T00:00:00.000Z"
        }
      ]
    }
  ],
  "expenses": [
    {
      "id": "1",
      "name": "Conta de Luz",
      "values": [
        {
          "id": "1",
          "desc": "Eletropaulo",
          "value": 120,
          "date": "2016-01-10T00:00:00.000Z"
        }
      ]
    },
    {
      "id": "2",
      "name": "Internet",
      "values": [
        {
          "id": "1",
          "desc": "TIM",
          "value": 60,
          "date": "2016-01-08T00:00:00.000Z"
        }
      ]
    },
    {
      "id": "3",
      "name": "Cartão de Crédito",
      "values": [
        {
          "id": "1",
          "desc": "MasterCard",
          "value": 354.62,
          "date": "2015-12-08T00:00:00.000Z"
        },
        {
          "id": "2",
          "desc": "MasterCard",
          "value": 126,
          "date": "2016-01-08T00:00:00.000Z"
        }
      ]
    }
  ],
  "investments": [
    {
      "id": "1",
      "name": "Poupança",
      "values": [
        {
          "id": "1",
          "desc": "Economia",
          "value": 500,
          "date": "2016-01-20T00:00:00.000Z"
        }
      ]
    }
  ]
};

ReactDOM.render(<MoneyCtrl account={accountControll}></MoneyCtrl>, document.getElementById('app'));
