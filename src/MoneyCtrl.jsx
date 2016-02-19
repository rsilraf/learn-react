import React, {Component} from 'react';
import Group from './Group';

export default class MoneyCtrl extends Component {
  render() {
    return <div className="app">
        <Group type="Receitas" values={this.props.account.incomes}></Group>
        <Group type="Despesas" values={this.props.account.expenses}></Group>
        <Group type="Investimentos" values={this.props.account.investments}></Group>
    </div>;
  }
}
