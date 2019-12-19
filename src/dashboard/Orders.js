/* eslint-disable no-script-url */
import React , {useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {store} from '../store/store';
import { func } from 'prop-types';


export default class Orders extends React.Component {
  subscription;
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent : [],
      events : []
    }
    this.subscription = store.subscribe(() => {
    
      let state = store.getState()
      let sel = state.select || [];
      let evt = state.events || [];
      console.log('evt '+evt)
      console.log('sel'+sel);
      this.setState({
        selectedEvent : sel,
        events : evt
      })
  
    })
  }
  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  getDetailSchema(eventName){
    let schema = [];
    this.state.events.forEach(event => {
      let obj = {};
      if(event.event == eventName) {
        obj.attribute = event.attribute;
        obj.type = event.type;
        obj.mandatory = event.mandatory?'true': 'false';
        obj.pageName = event.pageName || 'NONE';
        schema.push(obj);
      }
    })
    return schema;
  }
  getTable(){
   
    console.log('table length is '+ this.state.selectedEvent.length)
    if(this.state.selectedEvent.length > 0) {
      // return this.state.selectedEvent.map((schema) => {
       
       return ( <Table size="small">
         <tr>
           <th>Attribute Name</th>
           <th>Type</th>
           <th> Mandatory</th>
           <th>Page Name</th>
         </tr>
         {this.getRows(this.props.schema.label)}
         
        
   
     
    </Table>
       )
      // })
    }
    return <div>NONE Table</div>
  }
  getRows(schema) {
     const attrlist = this.getDetailSchema(schema);
        const rows = attrlist.map((attr) => {
          debugger;
          const row = Object.keys(attr).map(key => <td>{attr[key]}</td>)
          return <tr>{row}</tr>
        });
        return rows
   
     }
  
  render() {
  return (
    <React.Fragment>
      <Title>{this.props.schema.label}</Title>
     {this.getTable()}
     
    </React.Fragment>
  );
  }
}
