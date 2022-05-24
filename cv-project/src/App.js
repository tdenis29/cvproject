import { Component } from "react";
import Cv from "./components/Cv";
import Form from "./components/Form";
import {nanoid} from "./utils/nanoid"


class App extends Component {
  constructor(){
    super()
    this.state = {
        step: 1,
        edit: false,
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
        },
      }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.addToArray = this.addToArray.bind(this)
    this.clearNewObject = this.clearNewObject.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleInitEdit = this.handleInitEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
 
  }

  handleChange(e){
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
   e.preventDefault()
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step === 3 ? prevState.step = 1 : prevState.step+1
     }
   })
 }

 handleBack(){
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
  //  console.log(this.state.newEduExperience)
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
 handleMouseOver(e){
  if(e.target.parentNode.nodeName === "LI"){
    e.target.parentNode.lastChild.classList.add("show")
  }
 }
 handleMouseLeave(e){
   if(e.target.parentNode.nodeName === "LI"){
     e.target.parentNode.lastChild.classList.remove("show")
   }
 }
 handleInitEdit(e){
  let li = e.target.parentNode.parentNode
  let id = li.id
  if(li.classList.contains("educationblock")){
    let getObjToEdit = this.state.eduExperience.filter(item => item.id === id)
    let objToEdit = getObjToEdit[0]
    this.setState(prevState => {
      return {
        ...prevState,
        step: 2,
        newEduExperience: {
          id: objToEdit.id,
          degreeTitle: objToEdit.degreeTitle,
          school: objToEdit.school,
          from: objToEdit.from,
          to: objToEdit.to
        },
        edit: !prevState.edit
      }
    })
  } else if (li.classList.contains('workblock')){
    let getObjToEdit = this.state.workExperience.filter(item => item.id === id)
    let objToEdit = getObjToEdit[0]
    this.setState(prevState => {
      return {
        ...prevState,
        step: 3,
        newWorkExperience: {
          id: objToEdit.id,
          jobTitle: objToEdit.jobTitle,
          companyName: objToEdit.companyName,
          from: objToEdit.from,
          to: objToEdit.to,
          summary: objToEdit.summary
        },
        edit: !prevState.edit
      }
    })
  }
 }
 handleEdit(e){
  if(this.state.step === 2){
    e.preventDefault()
    const { newEduExperience } = this.state;
    this.setState(prevState => {
      return {
        ...prevState,
        eduExperience: prevState.eduExperience.map(item => item.id === newEduExperience.id ? newEduExperience : item),
        edit: !prevState.edit
      }
    },this.clearNewObject())
  } else if(this.state.step === 3){
    e.preventDefault()
    const { newWorkExperience } = this.state;
    this.setState(prevState => {
      return {
        ...prevState,
        workExperience: prevState.workExperience.map(item => item.id === newWorkExperience.id ? newWorkExperience : item),
        edit: !prevState.edit
      }
    },this.clearNewObject())
  }}

  render(){
    return (
      <>     
      <Form
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}
        handleSubmit={this.handleSubmit}
        handleBack={this.handleBack}
        handleEdit={this.handleEdit}
        state={this.state} 
      />
      <Cv 
        state={this.state}
        handleMouseOver={(e) => this.handleMouseOver(e)}
        handleMouseLeave={(e) => this.handleMouseLeave(e)}
        handleInitEdit={(e) => this.handleInitEdit(e)}
      />
    </>

    )
  }
}

export default App;
