import React from "react";

function SetBackgroundImage({path}){
    return(
    <div className="backgroundImage"> 
        <img src={path}></img>
    </div>
    )
}

export default SetBackgroundImage;