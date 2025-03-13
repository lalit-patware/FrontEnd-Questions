import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



// App.jsx

// import { ThemeProvider } from "./ThemeContext";
// import ThemedComponent from "./ThemedComponent";

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedComponent />
//     </ThemeProvider>
//   );
// }

// export default App;

