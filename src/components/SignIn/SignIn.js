import React, { useState } from "react"
import { Button, Container, Form } from 'reactstrap'
import { Link } from "react-router-dom"
import "./SignIn.scss"
import SignInHeader from "../SignInHeader/SignInHeader"

function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email set to ${email} and password set to ${password}`)
    }

    const handleClick = () => {
        window.open("/Main", "_self")
    }

    return(
        <div>
        <SignInHeader />
        <Container onSubmit={handleSubmit}>
            <Form className="SignInForm"> 
                <h1 className="SignInText">Sign In</h1>
                <h2 className="EmailText">Email</h2>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)
                }/>
                <br />
                <h2 className="PasswordText">Password</h2>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)
                }/>
                <br />
                <a href="url">Forgot password</a>
                <br />
                <Button onClick={handleClick}>Sign in</Button>
            </Form>
            <div className="SignUpLink">
                <Link to="/SignUp">Sign Up</Link>
            </div>
        </Container>
        </div>
    )
}

export default SignIn