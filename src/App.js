// App.js:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const Hello = ({match: {params: {name}}}) => <h1>Witaj, {name}</h1>

class App extends Component {
    render() {
        const PageNotFound = () => <h1>404 Not Found</h1>;
        
        return (
            <Router>
                <Navigation>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/hello/:name' component={Hello} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Navigation>
            </Router>
        )
    }
}

const Navigation = props => (
    <div>
       <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        {props.children}
    </div>
);

export default App