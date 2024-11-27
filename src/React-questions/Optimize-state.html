In React or other state management libraries like Redux, verifying the **previous state** when a new action is triggered is essential to ensure that updates to the state are correctly made based on the current state. There are a few common approaches to do this.

### 1. **Using React’s `useState` Hook**:
In functional components, you can verify and update the previous state inside the `setState` function by providing a callback that has access to the current state.

#### Example:
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Using a function inside setState to access previous state
    setCount(prevCount => {
      console.log('Previous state:', prevCount); // Logging previous state
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```
In this example, the `setCount` function takes the previous state (`prevCount`) as an argument, allowing you to verify it before updating it.

### 2. **Using Redux**:
In Redux, actions trigger reducers, which are responsible for updating the state. You can verify the previous state inside the reducer before updating it.

#### Example:
```js
// Action
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  };
};

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Previous state:', state.count); // Logging previous state
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// Dispatching action
store.dispatch(incrementAction());
```
In this Redux example, the `counterReducer` logs the previous state before updating it. Each time an action is dispatched, the current state is passed to the reducer, allowing you to verify and use the previous state.

### 3. **Middleware in Redux**:
You can also verify the previous state when an action is dispatched by using middleware. Middleware can intercept actions before they reach the reducer.

#### Example with Redux Middleware:
```js
const loggerMiddleware = store => next => action => {
  const prevState = store.getState();
  console.log('Previous state:', prevState);
  const result = next(action); // Dispatch action
  const nextState = store.getState();
  console.log('Next state:', nextState);
  return result;
};

// Apply middleware
import { createStore, applyMiddleware } from 'redux';
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));

// Dispatch action
store.dispatch(incrementAction());
```
In this case, the `loggerMiddleware` logs the previous state and the next state when an action is dispatched.

### 4. **ComponentDidUpdate in Class Components**:
If you are using class components, you can compare the previous state with the new state using the `componentDidUpdate` lifecycle method.

#### Example:
```js
class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('Previous state:', prevState.count);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
`componentDidUpdate` gives you access to the previous state, which allows you to compare it with the current state after a re-render.

### 5. **Using `useEffect` Hook** (in Functional Components):
In functional components, you can use the `useEffect` hook to compare the previous state after it has been updated.

#### Example:
```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed, new value:', count);
  }, [count]); // Only runs when 'count' changes

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
In this example, `useEffect` monitors the `count` state and logs the new value whenever it changes. Although this happens after the state has been updated, it still allows you to react to state changes.

### Conclusion:
To verify the previous state when a new action is triggered or called:
- In React with `useState`, use a callback inside the `setState` function.
- In Redux, check the previous state in the reducer or middleware.
- In class components, use `componentDidUpdate`.
- In functional components, you can also use `useEffect` to track state changes.

Let me know if you'd like more details on any of these approaches!