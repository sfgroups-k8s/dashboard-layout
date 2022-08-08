import * as React from "react";

import UserComponent from './ui/UserComponent'
import CustomizedTimeline from "./ui/CustomizedTimeline"
import Hello from './ui/Hello'

let Logo ="https://www.sfgroups.com/logos/sfg.gif";
export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <CustomizedTimeline/>
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
          <img height="50" src={Logo}  alt="logo"/> 
        </div>
        <p>This component shows the Logrocket logo.</p>
        <p>For more info on Logrocket, please visit https://logrocket.com </p>
      
        <UserComponent name="John Doe" age={26} address="11 Rodeo Dr., Columbus, GA 02110" dob={new Date()} />

        <hr/>
        <Hello name="Rishi" enthusiasmLevel={2} />
      </div>
    );
  }
}