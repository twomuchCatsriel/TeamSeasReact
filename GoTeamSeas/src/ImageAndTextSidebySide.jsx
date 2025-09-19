import React from "react";

function ImageAndText({variant, imagePath, headerText, paragraphText}){
    if(variant == "imageLeft"){
        return(
            <div className="containerDiv" style={{
                display:"flex",
                justifyContent:"center",
                marginTop: "2%",
                gap:"20px"

            }}>
                <img src={imagePath} className="sidebyside"></img>

                <div className="textDiv" style={{
                    width:"40%",
                }}>
                    <h1 style={{
                        fontWeight: "bold",
                        color:"#006098",
                        textAlign:"center"
                    }}>{headerText}</h1>

                    <p style={{
                        color:"black"
                    }}>{paragraphText}</p>
                </div>
            </div>
        )
    }
}

export default ImageAndText;