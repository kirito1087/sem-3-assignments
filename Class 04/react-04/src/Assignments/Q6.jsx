import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Child() {
  const theme = useContext(ThemeContext);

  return <h2>Current theme: {theme}</h2>;
}

function Middle() {
  return <Child />;
}

function Q6() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Middle />
    </ThemeContext.Provider>
  );
}

export default Q6;