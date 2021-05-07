import React, { useState } from 'react';
import ReactDOM from 'react-dom';

let Button = (props) => {
	let { text, clicky } = props
	return <button onClick={clicky}> {text}!!!</button>
}

let Counter = () => {

	let [count, setCount] = useState(0)
    let [error, setError] = useState(false)

	let add = () => {
		setCount(count+1)
	}

	let subs = () => {
        if (count > 0) {
    		setCount(count-1)
        } else {
           setError(true) 
        }

	}

	return (
	<div>
		{count} <br/>
		<Button text="add" clicky={add}/>
		<Button text="subs" clicky={subs}/>
        { error && (
            <div> Stop!
            <Button text="Ok" clicky = {
                () => { setError(false) }
            } />
            </div>)
        }
	</div>
	)
}

ReactDOM.render(
  <div><Counter /></div>,
  document.getElementById('root')
);

