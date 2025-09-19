import React from "react";

function ImageAndText({variant, imagePath, headerText, paragraphText, paragraphText2}){
    if(variant == "imageLeft"){
        return(
            <div className="containerDiv" style={{
                gap:"20px"

            }}>
                <img src={imagePath} className="sidebyside"></img>

                <div className="textDiv">
                    <p className="blueTitle">{headerText}</p>

                    <p className="paragraphText">{paragraphText}</p>

                    <p className="paragraphText linebreak">{paragraphText2}</p>
                </div>
            </div>
        )
    }
}

export default ImageAndText;