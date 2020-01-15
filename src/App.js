import React from "react";
import { Menu } from './components'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Menu />
      </>
    </ThemeProvider>
  );
}

export default App;
