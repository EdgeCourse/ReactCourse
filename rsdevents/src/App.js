import React from 'react';
import ReactDOM from 'react-dom/client';


function AssociationFootball() {
  const shoot = (a) => {
    alert(a); //argument
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}


/*
function AssociationFootball() {
  const shoot = (b, a) => {
    alert(b.type + " " + a);
		
		//'b' represents the React event that triggered the function. In this case, the 'click' event
		//order unimportant
  }

  return (
    <button onMouseOver={(e) => shoot(e, "Goal")}>Take the shot!</button>
  );
}
*/

export default AssociationFootball;


