import React, { Component } from 'react';

class Line extends Component {
 render() {
   let values = this.props.values.map(v=>{
     return <li key={v.id}>{v.date.slice(0,10)} - {v.desc} - R$ {v.value}</li>
   });
   return <div><h3>{this.props.name} - R$ {this.props.total}</h3>
            Mais informações:
            <ul>
              {values}
            </ul>
          </div>;
  }
}
export default Line;
