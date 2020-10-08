import React, { useState } from "react"
import { Button, Container, Form } from 'reactstrap'
import { Link } from "react-router-dom"
import "./SignUp.scss"
import SignInHeader from "../SignInHeader/SignInHeader"

function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email set to ${email} and password set to ${password}, and username set to ${username}`)
    }

    return(
        <div>
        <SignInHeader />
        <Container onSubmit={handleSubmit}>
            <Form className="SignUpForm"> 
                <h1>Sign Up</h1>
                <h2 className="UsernameText">Username</h2>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)
                }/>
                <br />
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
                <Button>Sign up</Button>
            </Form>
            <div className="SignInLink">
                <Link to="/SignIn" >Sign In</Link>
            </div>
        </Container>
        </div>
    )
}

export default SignUp