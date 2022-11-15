import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

/*
Attach an onChange event handler to the input element and also value attribute is connected to the this.state.name.so that the value attribute is always synced with this.state.name property.

When the user changes an input in the view, it triggers the onChange event handler then it calls the this.setState method and updates the this.state.name property value at final the UserInput component is re-rendered with the updated changes.

This is a controlled component because the value of an input element is controlled by React.
*/


class App extends React.Component{

  state = {
      name:"Hi"
  }
  handleChange = (e) =>{
    this.setState({
        name: e.target.value
    })
  }

   render(){
    return(
      <div>
       <h1>{this.state.name}</h1>
       <input type="text"
         onChange={this.handleChange}
         value={this.state.name} />
      </div>
      )
   }
}


//two-way binding with React hooks
//note: Angular, in contrast, has built-in syntax: "banana in a box" [(here)] 

/*
function App(){
   const [name,setName] = useState('Hi');

  const handleChange = (e)=>{
     setName(e.target.value);
  }

 return (
   <div>
     <h1>{name}</h1>
     <input onChange={handleChange} value={name} />
   </div>
 )
}
*/

export default App;






