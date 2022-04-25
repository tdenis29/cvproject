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
      }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState(prevState => {
      console.log(e.target)
      return {
        ...prevState,
        [e.target.name] : e.target.value
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
