import React from "react";

function CustomButton({variant, buttonText, linkDestination}){
    if(variant == "blue"){
        return(
            <a className="custombuttons" style={{
                backgroundColor:"#006098",
            }} href={linkDestination}>
                {buttonText}
            </a>
        )
    } 
    else if(variant == "orange"){
        return(
            <a className="custombuttons" style={{
                backgroundColor:"#ef7517",
            }} href={linkDestination}>
                {buttonText}
            </a>
        )
    }
    else if(variant == "none"){
        return(
            <a className="custombuttons" style={{
                display:"none"
            }} href={linkDestination}>{buttonText}</a>
        )
    }
}

export default CustomButton;