import React from "react";
import Main from "./component/Main";
import DataProvider from "./GlobalContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/Theme";

function App() {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
