import React from 'react';
import './User.css';

const UserInput=(props)=>{
return (
    <div className="User">
    <div className="UserInput">
       <input type="text" onChange={props.changed} value={props.username}></input>
    </div>
    </div>
    )
}

const UserOutput=(props)=>{
    return (
        <div className="User">
        <div className="UserOutput">
        <p onClick={props.click}>I am {props.username}</p>
       <p>{props.children}</p>
        </div>
        </div>
        )
    }
    export { UserInput, UserOutput };

