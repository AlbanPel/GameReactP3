import React, {useEffect, useState} from "react";
import {Card, CardMedia} from "@mui/material";

export default function ApiCat() {
    const [dataCat, setDataCat] = useState("");
    const fetchDataCat = () => {
        fetch("https://aws.random.cat/meow")
            .then((response) => response.json())
            .then((data) => setDataCat(data))
    }
    useEffect(()=>{
        fetchDataCat()
    }, [])

    //log
    useEffect(()=>{
        console.log("dataCat : ", dataCat)
    }, [dataCat])
    return (
        <div>
            <Card sx={{maxWidth: 300}}>
                <CardMedia
                    component={"img"}
                    image={dataCat.file}
                />
            </Card>
        </div>
    )
}