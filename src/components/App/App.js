import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import "../../styles/main.scss"

function App(){
  return(
    <body>
    <Router>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
        </Switch>
    </Router>
    </body>
  )
}

export default App