
import React from 'react'
import {Button} from 'react-bootstrap';
import Profile from "./components/profile";
import './App.css';
// import Timer from "./components/timer"
 
class App extends React.Component {
  state = {
    show: false
  }
  handleShow = () =>{
    this.setState({
      show: !this.state.show
    })
  }

  
  render (){ 

  return (

    <div className="App">

      <Button variant="success"  
      onClick={this.handleShow}>Profile</Button>
      {this.state.show && <Profile/>}
      

 
    </div>
  );
}
}

export default App;
