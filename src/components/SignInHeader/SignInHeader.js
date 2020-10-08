import React from "react"
import logo from "../../images/AppIcon.svg"
import "./SignInHeader.scss"

function SignInHeader(){
    return(
        <body className="SignInHeader">
        <div>
            <img src={logo} alt="PhotoZ-Logo"/>
            <h1 className="PhotoZHeader">PhotoZ</h1>
        </div>
        </body>
    )    
}

export default SignInHeader