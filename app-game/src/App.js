import React, {useEffect, useState} from "react";
import {Button, CssBaseline, ThemeProvider, Typography, createTheme} from "@mui/material";
import Game from "./components/Game";



export default function App() {
  const [lvl, setLvl] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  //log !!!
  useEffect(()=>{
    console.log('Open : ', openDialog)
    console.log('lvl :', lvl)
  }, [openDialog, lvl])
  return (
  <ThemeProvider theme={themeDark} >
    <CssBaseline />
    <Typography>
      <Button
          variant={"contained"}
          onClick={() => {setOpenDialog(true); setLvl('easy')}}
      >
        Easy
      </Button>
    </Typography>
    <Typography>
      <Button
          variant={"contained"}
          onClick={() => {setOpenDialog(true); setLvl('medium')}}
      >
        Medium
      </Button>
    </Typography>
    <Typography>
      <Button
          variant={"contained"}
          onClick={() => {setOpenDialog(true); setLvl('expert')}}
      >Expert
      </Button>
      {openDialog && <Game open={true} onClose={() =>setOpenDialog(false)} lvl={lvl} />}
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
    },

  }
})

