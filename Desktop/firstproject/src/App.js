import React from 'react';
import logo from './logo.svg';
import './App.css';
import { defaultCoreCipherList } from 'constants';

 function App(props)
 {  
   return (<div>
   <h1>{props.msg[0]}</h1>
  <h1>{props.msg[1]}</h1>
    </div>)
}
function OtherComponent(props)
{ const msg=1;
  if(msg)
  return (<p className={props.cName}> message </p>)
  else
  return (
  <p className={props.cName}> no message to show</p>
  ) }
  function Listdemo(props) {
  
    var arr=[];
    for(let i=0;i<props.name.length;i++)
    { {arr.push(<li className="list-group-item">{props.name[i]}</li>)} 
  }
  return <ul className="list-group">{arr}</ul>
  }
function Parent()
{ return (
  <div>
  <App msg={["First Message","Second Message"]}></App>
  <OtherComponent cName="styled" ></OtherComponent>
  <Listdemo name={["Item1","Item2","Item3","Item4"]} ></Listdemo>
</div>
)
} 

export default Parent;
