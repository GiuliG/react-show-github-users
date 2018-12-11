import React, { Component } from 'react';


const Userform = (props) => {
return (
    <form style={{marginTop:"20px"}} onSubmit = {props.getUser}>
        <input type="text" name="username"/>
        <button>Submit</button>

    </form>
    )
}

export default Userform
