
import React, {useState} from 'react';
import {Axios} from "axios";

function PostApi() {
    const url='https://localhost:8000/stator'
    const [data,setData]=useState({
        name:'',
        date:'',
        iduser:'',
    })
    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            date:data.date,
            iduser:data.iduser
        })
            .then(res=>{
                console.log(res.data)
            })

    }

        return (
            <div>
                <form onSubmit={(e)=>submit(e)}>
                    <input type='number' onChange={(e)=>handle(e)} id='name' placeholder='' /><br/>
                    <input onChange={(e)=>handle(e)} id='dob' placeholder='' type='number'/><br/>
                    <input onChange={(e)=>handle(e)} id='name' placeholder='' type='number'/><br/>
                    <button>Submit</button>
                </form>

            </div>
        );

}

export default PostApi;