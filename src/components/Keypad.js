import React from "react";


function Keypad (){
    function handleChangeEvent(){
        console.log('Entering password...');
    }

    return (

        <div>
            <input type="password" onChange={handleChangeEvent}></input>
        </div>
    )
}

export default Keypad;