import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"

function App(){
  return(
    <Router>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
        </Switch>
    </Router>
  )
}

export default App