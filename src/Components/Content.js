import React from 'react'
import { Users } from './Users'

export const Content = (props)=>{

    //JS


    var userData = {
        name : "##Royal##",
        age : 19
    }
    const test = ()=>{
        alert("test...");
    }
    return(

        <div>
            <h1>Content</h1>
            <button onClick = {test}>Click Me</button>
            <Users payload={props.payload} user = {userData} test={test}/>
        </div>

    )


}









