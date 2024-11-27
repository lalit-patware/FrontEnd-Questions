To create a basic setup with Redux and Redux middleware (like `redux-thunk`), you need the following components: actions, reducers, middleware, and store. Let's walk through the steps.

### 1. Install Dependencies

Make sure you have the necessary libraries installed:

```bash
npm install redux react-redux redux-thunk
```

### 2. Setup Redux

#### a. **Actions (Action Creators)**

Define actions for your application. An action creator is a function that returns an action, which is simply an object with a `type` and sometimes a `payload`.

```js
// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creator with redux-thunk for async operations
export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        }
    };
};
```

#### b. **Reducer**

Reducers are pure functions that take the current state and an action and return the new state.

```js
// reducer.js
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
```

#### c. **Store Configuration with Middleware**

Now you need to configure the store with middleware, such as `redux-thunk`, which allows you to write async logic that interacts with the store.

```js
// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const store = createStore(
    dataReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
```

#### d. **Connecting Redux to React**

Use the `Provider` component from `react-redux` to wrap your React app with the Redux store.

```js
// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import { Provider } from 'react-redux';
import store from './store';

const DataComponent = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const App = () => (
    <Provider store={store}>
        <DataComponent />
    </Provider>
);

export default App;
```

### How It Works:

1. The `fetchData` action creator dispatches an action when the API call starts and handles success or failure.
2. The reducer updates the store based on these dispatched actions.
3. The `DataComponent` is connected to the Redux store using `useSelector` and `useDispatch`, allowing the component to render the data or show loading/error states.

This is a basic Redux setup with middleware (`redux-thunk`) to handle async actions in React.