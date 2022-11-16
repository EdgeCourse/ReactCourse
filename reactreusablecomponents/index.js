import React from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/FormInput.js";
import CustomSelect from "./components/CustomSelect.js";
import ToggleSwitch from "./components/ToggleSwitch.js";
import Button from "./components/Button.js";
//import Modal from "./components/Modal.js";
import "./index.css";

/*
Maintain the appearance of the input throughout the application. Determine what type of input component should be rendered and what attributes it has by passing it a prop.

Render reusable components from a parent component and pass the relevant data to them. 

*/



function App() {
  const data = [
    {
      id: "1",
      name: "One"
    },
    {
      id: "2",
      name: "Two"
    },
    {
      id: "3",
      name: "Three"
    },
    {
      id: "4",
      name: "Four"
    }
  ];
  
   const articles = [
    {
      id: "0",
      name: "First Article"
    },
    {
      id: "1",
      name: "Second Article"
    },
    {
      id: "2",
      name: "Third Article"
    },
    {
      id: "3",
      name: "Fourth Article"
    }
  ];
  
  function handleChange(event) {
    console.log(event.target.value);
  }
  function onSelectChange(event) {
    console.log(event.target.value);
  }
  function onToggleChange(event) {
    console.log(event.target.checked);
  }
  return (
    <div className="App">
      <form>
	  {/*<Modal show={true} message={"Hello"}>
          <p>THIS IS A MODAL</p>
	  </Modal>*/}
        <FormInput type={"password"} placeholder={"Your Name"} onChange={handleChange} />
        <FormInput type={"email"} value = {"me@aol.com"} onChange={handleChange} />
        <div>
          <CustomSelect data={data} onSelectChange={onSelectChange} />
        </div>
		  <div>
          <CustomSelect data={articles} onSelectChange={onSelectChange} />
        </div>
        <div>
          <ToggleSwitch
            id="id"
            defaultChecked={false}
            disabled={true}
            Text={["Yes", "No"]}
            onToggleChange={onToggleChange}
          />
        </div>
		
        {/*<Button variant="danger" size={"sm"} >Small Button</Button>
        <Button variant="primary" size={"lg"} >Smaller Button</Button>*/}
        <Button variant="warning" size={"xs"} >Big Button</Button>
      </form>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);