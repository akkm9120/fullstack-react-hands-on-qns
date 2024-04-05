import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff' }}>My component</div>;
}