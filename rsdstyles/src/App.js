
import logo from './logo.svg';
import './App.css';
import styles from './style.module.css' //any name
import styled from 'styled-components'; //npm i styled-components

//have to use after assigned
//use comma and camelCase because this is JS styles!
//double curly braces because it's an object

/*
const Header = () => {
  return (
    <>
      <h1 style={{color: "red", backgroundColor: "lightblue"}}>Red Header!</h1>
      
    </>
  );
}
*/


/*
//https://blog.logrocket.com/benefits-using-styled-components-react/

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: navy;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!

const Header = () => {
  //commas between properties
  //style attribute takes precendence
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
	fontSize: "1.2em"
  };
  return (
    <>
      <h1 style={myStyle} className = "styles.bigFont">Hello Style!</h1>
      <p>Add a little style!</p>
	 
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

body       
       
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>

    </div>
  );
}

*/



export default App;


