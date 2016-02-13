import React from 'react';


export default class NewButton extends React.Component {
  static propTypes() {
    txt: React.PropTypes.string
  }
  render() {
    return <button type="button">{this.props.txt}</button>;
  }
}
