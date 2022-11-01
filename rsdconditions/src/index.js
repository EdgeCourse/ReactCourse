import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Goal from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Goal isGoal={false} />
	</React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
