import React from 'react'

export const Users = (props)=>{

    console.log(props.user);
    return(

        <div>
            
            User Component
            <p>{props.payload}</p>
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
            
            <button onClick={props.test}>ClickMe 2</button>

        </div>




    )

}