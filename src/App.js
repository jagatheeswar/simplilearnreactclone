import React from "react";
import "./App.css"
import { BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './pages/homePage'

const App = ()=>(
        <Router>
            <Route path="/" exact  > 
            <HomePage />
            </Route>
        </Router>

);

export default App