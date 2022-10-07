import React, {useEffect} from "react";

export default function Game({open, lvl, onClose}) {

    //log
    useEffect(()=>{
        console.log('open', open)
        console.log('lvl', lvl)
        console.log('onClose', onClose)
    }, [open, lvl, onClose])

    return (
        'Jeux'
    )
}