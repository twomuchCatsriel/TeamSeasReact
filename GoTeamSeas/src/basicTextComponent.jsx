import React from "react";

function BasicTextComponent({variant, text}){
    if(variant == "blue"){
        return <p className="blueTitle">{text}</p>
    } 
    else
    {
        return <p className="paragraphText">{text}</p>
    } 
}
export default BasicTextComponent;