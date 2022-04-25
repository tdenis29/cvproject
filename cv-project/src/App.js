import { Component } from "react";
import Cv from "./components/Cv";
import Form from "./components/Form";

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
        workExperience: [],

      }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e,obj){
    if(this.state.step === 1){
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.name] : e.target.value
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
   e.preventDefault()
   this.setState(prevState => {
     return {
       ...prevState,
       step: prevState.step + 1
     }
   })
 }
  render(){
    return (
      <div className="App">
      <Form
        handleChange={this.handleChange}
        state={this.state} 
      />
      <Cv 
        state={this.state}
      />
    </div>
    )
  }
}

export default App;
