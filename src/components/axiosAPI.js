import React, {useState} from "react";
import {Axios} from "axios";
import '../App.css';

function AxiosAPI(){
    const [data,setData]=useState('')
    const getData=()=>{
        Axios.get('https://localhost:8000/stator').then((response)=>{
            console.log(response);
            setData(response.data.setup+ "..."+ response.data.coreLength)

        });
    }
    return(
        <div>
            Please click here<button onClick={getData}>Click me</button>
        </div>
    )
}
export default AxiosAPI;