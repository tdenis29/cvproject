import { Component } from "react";
import Cv from "./components/Cv";
import Form from "./components/Form";
import {nanoid} from "./utils/nanoid"


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
    this.state = {
        step: 1,
        firstName: "",
        lastName : "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        province: "",
        objective: "",
        workExperience: [
  
        ],
        newWorkExperience: {
          degreeTitle: "",
          school: "",
          from: "",
          to: "",
        },

      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e){
    console.log(e)
    if(this.state.step === 1){
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.name] : e.target.value
      }
    })
  } else if (this.state.step === 2){
    this.setState(prevState => {
      return {
        ...prevState,
       newWorkExperience: {
         ...prevState.newWorkExperience,
         [e.target.name]: e.target.value,
         
       }
      }
    })
  }
}


  //   this.setState(prevState => {
  //     return {
  //       ...prevState,
  //       workExperience: [...prevState.workExperience, obj]
  //     }
  //   })
  // }

 handleSubmit(e){
   console.log(e)   
   e.preventDefault()
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step + 1
     }
   })
 }
 handleBack(e){
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step-1
     }
   })
 }
// addId(){
//  const workExperienceUpdate = this.state.workExperience.forEach(item => {
//       item.id = nanoid()
//  })
//  this.setState(prevState => {
//    return {
//      ...prevState,
//      workExperience: workExperienceUpdate
//    }
//  })
// }

 handleAdd(e){
  e.preventDefault()
  this.setState(prevState => {
    return {
      ...prevState,
      workExperience: 
      [...prevState.workExperience, this.state.newWorkExperience]
    }
  })
  this.addId()
  console.log(this.state)
 }
  render(){
    return (
      <>     
       <Form
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}
        handleSubmit={this.handleSubmit}
        state={this.state} 
      />
      <Cv 
        state={this.state}
      />
    </>

    )
  }
}

export default App;
