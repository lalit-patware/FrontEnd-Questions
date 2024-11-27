An **Error Boundary** in React is a special component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole application. Error boundaries are only available in class components, but they can be used to catch errors in both class and functional components.

### How Error Boundaries Work
- **Error boundaries** catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
- They do **not** catch errors:
  - Inside event handlers.
  - In asynchronous code (e.g., `setTimeout` or `requestAnimationFrame` callbacks).
  - In server-side rendering.
  - In the Error Boundary itself.

### Lifecycle Methods for Error Boundaries
Error boundaries use two lifecycle methods:

1. **`static getDerivedStateFromError(error)`**:
   This method is invoked after an error has been thrown by a descendant component. It allows you to update the state so the next render shows a fallback UI.
   
   ```jsx
   static getDerivedStateFromError(error) {
     // Update state so the next render shows a fallback UI.
     return { hasError: true };
   }
   ```

2. **`componentDidCatch(error, info)`**:
   This method is called after an error is caught, allowing you to log error information (e.g., send it to an error reporting service).

   ```jsx
   componentDidCatch(error, info) {
     // Log the error to an external service
     logErrorToMyService(error, info);
   }
   ```

### Example of an Error Boundary

```jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI on the next render.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an external service.
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // If no error, render children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Using the Error Boundary

Wrap any part of the component tree that might throw an error with the `ErrorBoundary`. If any error occurs within that subtree, the `ErrorBoundary` will catch it and show the fallback UI.

```jsx
function App() {
  return (
    <div>
      <ErrorBoundary>
        <SomeComponentThatMayFail />
      </ErrorBoundary>
    </div>
  );
}
```

### Important Notes:
- **Error boundaries do not catch errors in event handlers.** You need to use try-catch blocks in event handlers for this.
  
  ```jsx
  <button onClick={() => {
    try {
      // Some code that might throw an error
    } catch (error) {
      // Handle the error
    }
  }}>
    Click Me
  </button>
  ```

- **Error boundaries are class components.** You cannot make functional components error boundaries directly. However, you can create a higher-order component or use libraries like `react-error-boundary` to integrate error boundaries into functional components.

### Custom Fallback UI Example:
You can customize the fallback UI to show a more user-friendly message or even a button to retry loading the component.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Third-Party Libraries for Error Boundaries
For functional components, a popular solution is using libraries such as:
- **`react-error-boundary`**: It provides a declarative way to handle errors with functional components, offering hooks and components to manage error boundaries.

Example with `react-error-boundary`:

```jsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ComponentThatMayThrow />
    </ErrorBoundary>
  );
}
```

### When to Use Error Boundaries
- Use error boundaries at higher levels of your component hierarchy to prevent the entire app from crashing due to small errors in specific components.
- Ideal places for error boundaries include wrapping major sections of your app, like individual pages, forms, or feature-rich components (e.g., widgets, graphs).