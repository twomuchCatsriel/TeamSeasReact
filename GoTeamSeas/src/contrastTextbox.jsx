import React from "react";
import CustomButton from "./buttons";

function ContrastTextbox({subheaderText, headerText, infoText, buttonvariant1, buttonvariant2}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                padding:"10px",
                borderRadius:"10px",

            }}>

                <p style={{
                    color:"white",
                    fontSize:"20px",
                }}>{subheaderText}</p>

                <h1 style={{
                    color:"white",
                }}>{headerText}</h1>

                <p style={{
                    color: "white",
                    fontSize: "20px"
                }}>{infoText}</p>

                <div id="buttonsContainer">
                    <CustomButton variant={buttonvariant1} buttonText="Mer Om Oss" linkDestination="https://youtube.com"></CustomButton>
                    <CustomButton variant={buttonvariant2} buttonText="Støtt oss" linkDestination="https://youtube.com"></CustomButton>
                </div>
            </div>
        </div>)
}

export default ContrastTextbox