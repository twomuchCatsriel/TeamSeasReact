import React from "react";

function BasicTextComponent({variant, text}){
    if(variant == "blue"){
        return <p className="blueTitle">{text}</p>
    }
    else if(variant == "header"){
        return <h2 className="headerText">{text}</h2>
    }
    else if(variant == "white"){
        return <p className="whiteParagraph">{text}</p>
    }
    else
    {
        return <p className="paragraphText">{text}</p>
    } 
}
export default BasicTextComponent;