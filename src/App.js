import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppRouter from "./Routers/AppRouter";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#25A6D9",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#3E3F40",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
