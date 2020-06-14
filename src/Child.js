import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props) => {
    let counterValue = useContext(counterContext);
    console.log(counterValue)
    return (
        <div>
            <h3>My name is {props.name}</h3>
            <h1>FIRST CHILD USING <mark>Context API</mark></h1>
            <h4>Value is {counterValue[0]}</h4>

            <button onClick={() => {counterValue[1](++counterValue[0]) }}>
            Increment
            </button>
        </div>
    )
}

export default Child;