import React, { useState } from "react"
import { Button, Container, Form } from 'reactstrap'
import { Link } from "react-router-dom"

function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email set to ${email} and password set to ${password}, and username set to ${username}`)
    }

    return(
        <Container className="SignInForm" onSubmit={handleSubmit}>
            <Form> 
                <h1>Sign Up</h1>
                <h2>Username</h2>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)
                }/>
                <br />
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
                {/*<input type="submit" value="Submit" />*/}
                <Button>Sign up</Button>
            </Form>
            <br />
            <div>
                <Link to="/SignIn">Sign In</Link>
            </div>
        </Container>
    )
}

export default SignUp