import React, {useState} from 'react';
import ReactDOM from 'react-dom';

let Button = (props) => {
	let { text, fish } = props
	return <button onClick={fish}> {text}!!!</button>
}

let Counter = () => {

	let [count, setCount] = useState(0)

	let add = () => {
		setCount(count+1)
	}

	let subs = () => {
		setCount(count-1)
	}

	return (
	<div>
		{count} <br/>
		<Button text="add" fish={add}/>
		<Button text="subs" fish={subs}/>
	</div>
	)
}

ReactDOM.render(
  <div><Counter /></div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
