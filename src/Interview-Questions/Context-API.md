### What is Context in React?

In React, **Context** is a way to share data (like global variables) between components without having to pass props manually at every level. It is often used for themes, user authentication, or settings.

---

### Key Concepts:
1. **Create Context**: Use `React.createContext` to create a context.
2. **Provider**: The `Provider` component makes the context value available to all its descendants.
3. **Consumer**: Components that need the data can access it using `useContext` or `Context.Consumer`.

---

### Simple Example: Theme Context
#### ThemeContext.js
```javascript
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### App.js
```javascript
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
```

---

### How It Works:
1. **Context Creation**: `ThemeContext` is created with `createContext`.
2. **Providing Data**: `ThemeProvider` wraps the component tree, passing `theme` and `toggleTheme` to the context.
3. **Consuming Data**: `useContext(ThemeContext)` is used in `ThemedComponent` to access the `theme` and `toggleTheme` values.

---

### Benefits:
- Avoids "prop drilling" (passing props through multiple layers).
- Simplifies state sharing across deeply nested components.