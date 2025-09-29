import React from "react";

function SetBackgroundImage({path}){
    return(
    <div className="backgroundImage hideOnMobile"> 
        <img src={path}></img>
    </div>
    )
}

export default SetBackgroundImage;