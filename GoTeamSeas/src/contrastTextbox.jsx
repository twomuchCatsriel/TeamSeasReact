import React from "react";

function ContrastTextbox({subheaderText, headerText}){
    return (
        <div>
            <div className="contrastTextboxBackground" style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                width:"45%",
                height:"20%",
                padding:"10px",
                borderRadius:"10px 5px",
            }}>

                <p style={{
                    color:"white",
                    fontSize:"larger",
                }}>{subheaderText}</p>

                <h1 style={{
                    color:"white",
                }}>{headerText}</h1>
            </div>
        </div>)
}

export default ContrastTextbox