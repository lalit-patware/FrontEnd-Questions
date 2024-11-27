import React, { useReducer } from 'react';

function Counter() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
const [state, dispatch] = useReducer(reducer, initialState);
state: The current state of the component.
dispatch: A function to send (or "dispatch") actions to the reducer.
reducer: A function that takes the current state and an action, and returns the new state.
initialState: The starting state.

Key Points:
State Management: useReducer is ideal for managing more complex state than useState since it centralizes state logic.
Action Dispatching: Actions are dispatched using the dispatch function. These actions typically have a type property to define the kind of state update required.
Immutability: The reducer function should return a new state object, not mutate the existing state.
useReducer is especially useful for applications with complex state transitions and helps in managing large-scale applications efficiently.