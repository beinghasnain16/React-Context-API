import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);
    return (
    <div>
        <h1>SECOND CHILD USING <mark>useReducer Hook</mark></h1>
        <h3>Value of reducer state is {state}</h3>
        <button onClick= {() => dispatch("INCREMENT")}>Increment Reducer</button>
    </div>
    )
}
export default Child2;