import React from "react";
import CustomButton from "./buttons";

function ContrastTextbox({subheaderText, headerText, infoText, buttonvariant1, buttonvariant2, alignment, boxWidth}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                padding:"10px",
                borderRadius:"10px",

                width: {boxWidth}

            }}>

                <p style={{
                    color:"white",
                    fontSize:"20px",
                }}>{subheaderText}</p>

                <h1 style={{
                    color:"white",
                    textAlign: {alignment}
                }}>{headerText}</h1>

                <p style={{
                    color: "white",
                    fontSize: "20px"
                }}>{infoText}</p>

                <div id="buttonsContainer">
                    <CustomButton variant={buttonvariant1} buttonText="Mer Om Oss" linkDestination="/omoss"></CustomButton>
                    <CustomButton variant={buttonvariant2} buttonText="Støtt oss" linkDestination="https://youtube.com"></CustomButton>
                </div>
            </div>
        </div>)
}

export default ContrastTextbox