import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions"


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
 
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {/* { isLogged ? <h3>Valuable info I shouldnt see</h3> : ""} */}
    </div>
  );
}

export default App;
