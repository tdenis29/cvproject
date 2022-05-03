import { Component } from "react";
import Cv from "./components/Cv";
import Form from "./components/Form";
import {nanoid} from "./utils/nanoid"


class App extends Component {
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
        eduExperience: [
  
        ],
        newEduExperience: {
          degreeTitle: "",
          school: "",
          from: "",
          to: "",
        },
        workExperience: [

        ],
        newWorkExperience: {
          companyName: "",
          jobTitle: "",
          from: "",
          to: "",
          summary: "",
        }


      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.addToArray = this.addToArray.bind(this)
    this.clearNewObject = this.clearNewObject.bind(this)
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
       newEduExperience: {
         ...prevState.newEduExperience,
         [e.target.name]: e.target.value,
       }
      }
    })
  } else if (this.state.step === 3){
    this.setState(prevState => {
      return {
        ...prevState,
        newWorkExperience: {
          ...prevState.newWorkExperience,
          [e.target.name]: e.target.value
        }
      }
    })
  }
}

 handleSubmit(e){
   console.log(e)   
   e.preventDefault()
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step === 3 ? prevState.step = 1 : prevState.step+1
     }
   })
 }

 handleBack(e){
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step === 1 ? prevState.step = 3 : prevState.step-1
     }
   })
 }

handleAdd(e) {
  if(this.state.step === 2){
    e.preventDefault()
    const { newEduExperience } = this.state;
    newEduExperience.id = nanoid()
    this.setState({ newEduExperience: newEduExperience }, () => {
      this.addToArray()
      this.clearNewObject()
    });
  } else if (this.state.step ===3){
    e.preventDefault()
    const { newWorkExperience } = this.state;
    newWorkExperience.id = nanoid()
    this.setState({ newWorkExperience: newWorkExperience }, () => {
      this.addToArray()
      this.clearNewObject()
    });
  }
  };

clearNewObject(){
  if(this.state.step === 2){
  this.setState(prevState => {
    return {
      ...prevState,
      newEduExperience: {
        degreeTitle: "",
        school: "",
        to: "",
        from: "",
      }
    }
  })
} else if (this.state.step === 3){
  this.setState(prevState => {
    return {
      ...prevState,
      newWorkExperience: {
        companyName: "",
        jobTitle: "",
        to: "",
        from: "",
      }
    }
  })
}
}


addToArray(){
  if(this.state.step === 2){
   console.log(this.state.newEduExperience)
   this.setState(prevState => {
     return {
       ...prevState,
       eduExperience: 
       [...prevState.eduExperience, this.state.newEduExperience]
     }
   })
  } else if (this.state.step === 3){
    this.setState(prevState => {
      return {
        ...prevState,
        workExperience: 
        [...prevState.workExperience, this.state.newWorkExperience]
      }
    })
  }
 }

  render(){
    return (
      <>     
       <Form
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}
        handleSubmit={this.handleSubmit}
        handleBack={this.handleBack}
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
