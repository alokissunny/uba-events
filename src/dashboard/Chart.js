import React , { useState }from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Select from '../components/select';
import fire from '../fire';
import {store} from '../store/store';
import {initEvents} from '../store/actions'

export default function Chart() {
  var events = [];
  var  list = [];
  const [data , setData] = useState([])
  var fullData = [];
  var hack = true;
  var eventRef= fire.database().ref('/Events')
  eventRef.once('value')
  .then(snapShot => {
    if( snapShot.val()){
      console.log('hack is '+ hack)
      fullData = snapShot.val();
      
      fullData.forEach(element => {
        if(events.indexOf(element.event) == -1) {
          events.push(element.event);
        }
      });
    
    // // console.log(events);
   
    events.forEach(element => {
      let obj = {};
      obj.label = element;
      obj.value = element;
      list.push(obj);

    })
      store.dispatch(initEvents(fullData));
      setData(list);
  }
  })
  return (
    <React.Fragment>
      <Title>Select Event</Title>
      <Select data={data}/>
     
    </React.Fragment>
  );
}
