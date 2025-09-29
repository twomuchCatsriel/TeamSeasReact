import React from "react";
import CustomButton from "./buttons";

function ContrastTextbox({subheaderText, headerText, infoText, buttonvariant1, buttonvariant2, alignment, button1_text, button2_text, button1_destination, button2_destination}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                padding:"10px",
                borderRadius:"10px",
                width:"90%",
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
                    <CustomButton variant={buttonvariant1} buttonText={button1_text} linkDestination={button1_destination}></CustomButton>
                    <CustomButton variant={buttonvariant2} buttonText={button2_text} linkDestination={button2_destination}></CustomButton>
                </div>
            </div>
        </div>)
}

export default ContrastTextbox