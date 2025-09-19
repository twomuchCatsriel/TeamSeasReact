import React from "react";
import CustomButton from "./buttons";

function ContrastTextbox({subheaderText, headerText, infoText}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                padding:"10px",
                borderRadius:"10px 5px",

            }}>

                <p style={{
                    color:"white",
                    fontSize:"large",
                }}>{subheaderText}</p>

                <h1 style={{
                    color:"white",
                }}>{headerText}</h1>

                <p style={{
                    color: "white",
                    fontSize: "large"
                }}>{infoText}</p>

                <CustomButton variant="blue" buttonText="hello world"></CustomButton>
            </div>
        </div>)
}

export default ContrastTextbox