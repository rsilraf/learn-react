import React, { Component } from 'react';
import Line from './Line';

class Group extends Component {
  render() {
    let lines = this.props.values.map((t)=>{
      let total = t.values.reduce((prev, v) => prev + v.value, 0);
      return <Line key={t.id} values={t.values} name={t.name} total={total}/>
    });

    return  <div className="{this.props.type}">
               <h1>{this.props.type}</h1>
               {lines}
            </div>;
  }
}
export default Group;
