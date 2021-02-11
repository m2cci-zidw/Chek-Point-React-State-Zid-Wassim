import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
class Timer extends Component {
    state = {
            count: 0,
            show: false,
        };
      HundleClickstart = () =>{
        // this.clearInterval();
            this.interval= setInterval(() => {
            this.setState({ count: this.state.count+1,}) ;
            }, 1000);   
            this.setState({ show: !this.state.show})   
      }
      
     hundleClickReset = () => {
          clearInterval(this.interval)
          this.setState  ({
          count : 0,
          })
        }
       hundleClickStop = () => {
        clearInterval(this.interval)
        
    }
     
     
    render() {
        return (
            <div>
                 {this.state.count}
                 <br/>
                 <Button variant="light" onClick={this.HundleClickstart} >Start</Button>
                 <Button variant="light" onClick={this.hundleClickStop} > Stop</Button>
                 <Button variant="light" onClick={this.hundleClickReset}>Reset</Button>
            </div>
        )
    }
}
export default Timer