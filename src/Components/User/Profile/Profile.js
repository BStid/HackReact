import React, { Component } from 'react';
import {
    OuterContainer,
    MainContainer,
    Button,
    Card
  } from "../../resources/styles/masterStyles";
  import {connect} from "react-redux";
import {getUser} from '../../../ducks/userReducer';
import Nav from "../../Layout/Nav/Nav"
import Edit from './Edit';



 class Profile extends Component {
   constructor(){
     super();
     this.state={
       editable: false,
       editName: false
     }
   }

  componentDidMount(){
    this.props.getUser() 
  }

  showEdit = () => {
    this.setState({
      editable: !this.state.editable,
      editName: !this.state.editName})
      this.props.getUser()
      }
    
  


    render(){

      const user = this.props.state.user.user

      const userMapped = user.map((e,i) => {
        return (
          <div key={i}>
          {e.first_name + " "} 
          {e.last_name + " "} 
          Rating:{e.rating}
          </div>
        )
      })

      const tylersMug = user.map((e,i) => {
        return(
          <div key={i}>
          <Card height="11vw"width="11vw" borderRadius="50%" objectFit="fill" >
          <img src={e.image_url} />
          </Card>
          </div>
        )
      })


      const userAbout = user.map((e,i) => {
        return(
          <div key={i}>
          {e.about_user}
          </div>
        )
      })


        return (

          <OuterContainer 
          justifyContent="flex-start" 
       
          backgroundColor="black" height='100vh'
          backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)" >
          {this.state.editable ? (
          <Edit user_id={this.props.state.user.user.user_id}/> ) : null }
        
          <Nav/>

          <MainContainer>

          <MainContainer margin="3% 0 0 0"width="100vw">
          <MainContainer width="30vw" flexDirection="column">
         
          {tylersMug}
          
          <Card height="5vh" width="5vw" boxShadow="null" borderRadius="null">
            {userMapped}
          </Card>
            <Button height="25px" width="100px" onClick={() => this.showEdit()}>{this.state.editName ?  "Finish":  "Edit"}</Button>
          </MainContainer>

                     <Card alignItem="flex-start" backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="29vw">{userAbout}</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Streak</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Time </Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw"> Completed Lessons</Card>

          </MainContainer>
          </MainContainer>
          </OuterContainer>
        )
    }
}

function mapStatetoProps(state){
  return {state};
}

export default connect(
  mapStatetoProps, 
  { getUser }
  )(Profile);
  