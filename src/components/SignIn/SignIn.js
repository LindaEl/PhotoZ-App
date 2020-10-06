import React, { useState } from "react"
import { Button, Container, Form } from 'reactstrap'

function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email set to ${email} and password set to ${password}`)
    }

    return(
        <Container className="SignInForm" onSubmit={handleSubmit}>
            <Form> 
                <h1>Sign In</h1>
                <h2>Email</h2>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)
                }/>
                <br />
                <h2>Password</h2>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)
                }/>
                <br />
                <a href="url">Forgot password</a>
                <br />
                <Button>Sign in</Button>
                <br />
                <a href="/SignUp">Sign Up</a>
            </Form>
        </Container>
    )
}

export default SignIn