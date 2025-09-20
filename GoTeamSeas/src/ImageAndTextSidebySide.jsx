import React from "react";

function ImageAndText({variant, imagePath, headerText, paragraphText, paragraphText2}){
    if(variant == "imageLeft"){
        return(
            <div className="containerDiv" style={{
                gap:"5%"

            }}>
                <img src={imagePath} className="sidebyside"></img>

                <div className="textDiv">
                    <p className="blueTitle">{headerText}</p>

                    <p className="paragraphText">{paragraphText}</p>

                    <p className="paragraphText linebreak">{paragraphText2}</p>
                </div>
            </div>
        )
    } else if(variant == "imageRight"){
        return(
            <div className="containerDiv flipped" style={{
                gap: "5%"
            }}>
                <div className="textDiv">
                    <p className="blueTitle">{headerText}</p>

                    <p className="paragraphText">{paragraphText}</p>

                    <p className="paragraphText linebreak">{paragraphText2}</p>
                </div>

                <img src={imagePath} className="sidebyside"></img>
            </div>
        )
    }
}

export default ImageAndText;