import React, {useState} from 'react'
import ReactDOM from 'react-dom'

let Button = (props) => {
	let { text, fish} = props
	return <Button onClick={fish}> {text}!!!</Button>
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
	<div>test</div>,
	document.getElementById('root'))
