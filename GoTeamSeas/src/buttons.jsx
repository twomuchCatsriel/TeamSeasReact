import React from "react";

function CustomButton({variant, buttonText}){
    if(variant == "blue"){
        return(
            <button className="custombuttons" style={{
                backgroundColor:"#006098",
            }}>
                {buttonText}
            </button>
        )
    } 
    else if(variant == "orange"){
        return(
            <button className="custombuttons" style={{
                backgroundColor:"#ef7517",
            }}>
                {buttonText}   
            </button>
        )
    }
}

export default CustomButton;