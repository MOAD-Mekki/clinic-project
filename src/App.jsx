import './App.css'
import Nav from './nav/Nav';
import Header from './header/Header';
import List from './list/List';
import { createContext, useState } from 'react';
export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={theme}>
          <Nav />
          <Header />
          <List />
        </div>
      </ThemeContext.Provider>
  );
}

export default App
