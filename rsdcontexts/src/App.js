
import './App.css';
/*
import React from 'react';
//import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ChildComponent name={"You"} />;
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <GrandChildComponent name={this.props.name} />;
  }
}

class GrandChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <GreatGrandChildComponent name={this.props.name} />;
  }
}

class GreatGrandChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1> Hello {this.props.name} </h1>;
  }
}
*/

/*
In order to use context API in class components, you go through the following steps

Create an instance of context using React.createContext
Wrap children components of provider (component which dispatches data ) inside context.Provider
Pass data via value attribute of context.Provider component
Access data passed from context.Provider from any descendant of parent component via context.Consumer

In class components, you can use createContext to create an instance of context. createContext takes context as an argument and returns an instance of the context. Context is an object whose value property holds the data you want to pass. You can also create an instance of context without passing context(data) to createContext. In that case you will pass data via value attribute of context.Provider as explained in the subsequent sections.

You can import createContext or use React.createContext()

A call to createContext returns an object which in the case above is assigned to the variable myContext. You can give a meaningful name to instance of createContext instead of calling it myContext One of the properties of myContext object is Provider.

Wrap children of parent component (provider of data) inside context.Provider:
myContext has a Provider property which can be used inside component which provides data by wrapping siblings of the parent component in it. To illustrate this, let us go back to the previous example. If you want to pass data from App component down the component tree to any of the descendant components, then App is the provider of the data and is a parent to the components below it in the component tree. Simply wrap children of App inside context.Provider.

Pass data via value attribute of context.Provider component
myContext.Provider has an attribute called value which is used for passing data.
In the code above, notice how React.createContext has been invoked. Its invocation returns a context object which is stored in myContext. In the render method of the component (in this case App) which provides the data to be passed down the component tree , you wrap the child component in myContext.Provider and pass the data via value attribute of myContext.Provider. This way, any component which is a descendant of App can access the data as explained below.

Access data passed from context.Provider from any descendant of parent component (App) via context.Consumer
In the sections above, we looked at how to create context and pass data down the component tree via context.Provider. Let us look at how descendants of App in the component tree can access the data passed. myContext, context object returned by createContext has a property called Consumer which you can use to access the data. In the code below we assume GrandChildComponent wants to use data which we passed from App.

Notice the child of myContext.Consumer is a function. The function takes the context (in this case myContext) as argument and returns JSX which renders the data passed. This can be done in any component which is a descendant of component from which data was passed. This helps to avoid prop drilling. Though context API solves problem of drilling components to pass data around, it introduces complexity in myContext.Consumer because a function has to be passed as its child. If you want to avoid this complexity, you can use useContext. It should be noted that useContext is a hook, therefore its use is restricted to functional components.

In functional components, useContext takes the place of the tag.  
*/

/*
import React from "react";
const myContext = React.createContext();
*/

import React, { createContext } from "react";
const myContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "You" };
  }
  render() {
    return (
      <myContext.Provider value={{ ...this.state }}>
        <DescendantComponent />
      </myContext.Provider>
    );
  }
}






class DescendantComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <myContext.Consumer>
        {context => <h1> {context.name} </h1>}
      </myContext.Consumer>
    );
  }
}
export default App;
