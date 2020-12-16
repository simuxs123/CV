import React from "react"
import {Navbar} from "./components/nav/Navbar"
import {Home} from "./components/Home"
import {MyProjects} from "./components/MyProjects"
import {AboutMe} from "./components/AboutMe"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
  
      <Router>
        <Navbar/>
          <Switch >
              <Route exact path="/" component={Home}/>
              <Route path="/myprojects" component={MyProjects}/>
              <Route path="/aboutme" component={AboutMe}/>
          </Switch> 
      </Router>   
      
  );
}

export default App;
