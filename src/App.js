import React, { useState, useContext } from "react";
import "./App.css";

const ThemeContext = React.createContext(null);

const View = () => {
  const [themes, setThemes] = useState(true);
  return (
    <ThemeContext.Provider value={themes ? "light" : "dark"}>
      <App>
        <button onClick={() => setThemes(!themes)}>Switch Themes</button>
      </App>
    </ThemeContext.Provider>
  );
};

const App = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      {children}
      <p>
          Switch between dark and light theme
      </p>
    </div>
  );
};

export default View;
