import React from "react";
import {Button, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";


export default function App() {

  return (
  <ThemeProvider theme={themeDark} >
    <CssBaseline />
    <Typography>
      <Button variant={"contained"}>Easy</Button>
    </Typography>
    <Typography>
      <Button variant={"contained"}>Medium</Button>
    </Typography> <Typography>
      <Button variant={"contained"}>Expert</Button>
    </Typography>
  </ThemeProvider>
  );
}

const themeDark = createTheme({
  palette: {
    background: {
      paper: '#007be0',
      default: '#001e3c'
    },
    primary: {
      main: '#033a75',
    },
    secondary: {
      main: '#007be0'
    },
    text: {
      primary: "#fff"
    }
  }
})

