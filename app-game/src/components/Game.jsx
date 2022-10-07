import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";

export default function Game({open, lvl, onClose}) {
    const [numb1, setNumb1] = useState(0);
    const [numb2, setNumb2] = useState(0);
    const [result, setResult] = useState(0);
    const [labelOperator, setLabelOperator] = useState("");

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
    //log
    useEffect(()=>{
        console.log('open', open)
        console.log('lvl', lvl)
        console.log('onClose', onClose)
        console.log('Numb1', numb1)
        console.log('numb2', numb2)
        console.log('Operator', labelOperator)
        console.log('Result', result)
    }, [open, lvl, onClose, numb1, numb2, result, labelOperator])

    return (
        <Dialog open={open} onClose={onClose} maxWidth={"lg"} fullWidth>
            <DialogTitle>Level : {lvl}</DialogTitle>
            <DialogContent>
                <Typography alignItems={"center"} variant={"h2"}>{numb1} {labelOperator} {numb2}</Typography>

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