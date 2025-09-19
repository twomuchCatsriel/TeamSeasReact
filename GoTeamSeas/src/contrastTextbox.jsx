import React from "react";
import CustomButton from "./buttons";

function ContrastTextbox({subheaderText, headerText, infoText}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                padding:"10px",
                borderRadius:"10px",

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

                <div id="buttonsContainer">
                    <CustomButton variant="blue" buttonText="Mer Om Oss" linkDestination="https://youtube.com"></CustomButton>
                    <CustomButton variant="orange" buttonText="Støtt oss" linkDestination="https://youtube.com"></CustomButton>
                </div>
            </div>
        </div>)
}

export default ContrastTextbox