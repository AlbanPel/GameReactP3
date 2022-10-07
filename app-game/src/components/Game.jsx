import React, {useEffect, useState} from "react";
import {Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";

export default function Game({open, lvl, onClose}) {
    const [numb1, setNumb1] = useState(0);
    const [numb2, setNumb2] = useState(0);
    const [result, setResult] = useState(0);
    const [labelOperator, setLabelOperator] = useState("");
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");
    const [viewAlert, setViewAlert] = useState(false);


    const randomMath = () => {
        setNumb1(Math.round(Math.random() * (1, 10)))
        setNumb2(Math.round(Math.random() * (1, 10)))
    }
    useEffect(()=>{
        randomMath()
    }, [])

    const calculate = () => {
        if (lvl === 'easy') {
            const _easy = numb1 + numb2;
            setResult(_easy)
            setLabelOperator("+")
        }
        if (lvl === 'medium') {
            const _medium = numb1 - numb2;
            setResult(_medium)
            setLabelOperator("-")
        }
        if (lvl === 'expert') {
            const _expert = numb1 * numb2;
            setResult(_expert)
            setLabelOperator( "*")
        }
    }
    useEffect(() => {
        calculate()
    }, [numb1, numb2])

    const handleControl = () => {
        if (userInput == result) {
            setViewAlert(false)
            setMessage('Bien joué !')
        }
        else {
            setViewAlert(true)
            setMessage('Try again !')
        }
    }

    //log
    useEffect(()=>{
        //console.log('open', open)
        //console.log('lvl', lvl)
        //console.log('onClose', onClose)
        //console.log('Numb1', numb1)
        //console.log('numb2', numb2)
        //console.log('Operator', labelOperator)
        console.log('Result', result)
        console.log('Input :', userInput)
        console.log('Message :', message)
    }, [open, lvl, onClose, numb1, numb2, result, labelOperator, userInput, message])

    return (
        <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth>
            <DialogTitle>Level : {lvl}</DialogTitle>
            <DialogContent>
                <Typography alignItems={"center"} variant={"h2"}>{numb1} {labelOperator} {numb2}</Typography>
                <Typography alignItems={"center"}>
                    <TextField
                        variant={"filled"}
                        required
                        type={"number"}
                        onChange={event => setUserInput(event.target.value)}

                    />
                </Typography>
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={handleControl}
                >
                Envoyer
                </Button>
                <div>
                    {viewAlert && <Alert severity={"warning"}>{message}</Alert>}
                </div>

            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                >
                 Fermer
                </Button>
            </DialogActions>
        </Dialog>
    )
}