import React from "react";  
import NavBar from "../navigationBar";
import SetBackgroundImage from "../backgroundImage";
import Footerbar from "../footerbar";
import { Form } from "react-router";
import BasicTextComponent from "../basicTextComponent";

function LoginPage(){
    return(
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./VolunteerImage.jpg"></SetBackgroundImage>

            <div className="outerPasswordBox">
                <BasicTextComponent variant={"header"} text="Logg Inn"></BasicTextComponent>

                <form>
                    <label>Brukernavn:</label>
                    <input type="text" placeholder="Brukernavn" id="userSubmit"></input>
                    <label>Passord:</label>
                    <input type="password" placeholder="Passord" id="passwordSubmit"></input>

                    <div className="submitButtons">
                    <input type="submit" className="custombuttons" id="submitButton" value="Submit"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;