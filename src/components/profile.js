import React, { Component } from 'react'
import Avatar from "../assets/avatar.jpg";
 class Profile extends Component {
    state= {
        person:{  
            fullName:" Wassim Zid",
            bio:"Remplissez votre vie d'expériences afin d'avoir toujours une belle histoire à raconter", 
            imgSrc: <img src={Avatar} alt="Avatar"  className="PhotoProfile"/>, 
            profession:"Ingenieur Mécanique",
                },
        count:0,
 }
    componentDidMount(){
        // if (this.state.count !== prevProps.count){
        setInterval(() => {
            this.setState({
                count:this.state.count+1
            })

        //   this.setState  this.count=this.state.count;            
        }, 1000);
    //}
    }
    render() {
        return (
            < div className="profile">
                <div className="person">
                    {this.state.person.imgSrc}
                    <br/>
                    <br/>
                    <h5>FullName: </h5> 
                    <h6>{this.state.person.fullName}</h6> 
                    <br/>
                        <h5> Bio:  </h5> 
                    <h6> {this.state.person.bio}</h6>
                    <br/>
                    <h5> Profession:  </h5>
                    <h6> {this.state.person.profession}</h6> 
                </div>
                <div>
                    {this.state.count}
                </div>
            </div>
        )
    }
}
export default Profile
