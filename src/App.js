// App.js:
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>

class App extends Component {
 render() {
   return (
     const PageNotFound = () => <h1>404 Not Found</h1>;
     <Router history={hashHistory}>
         <Route path="/" component={Navigation}>
                 <IndexRoute component={Home} />
                 <Route path='/contact' component={Contact} />
         <Route path='/hello/:name' component={Hello} />
         <Route path='*' component={PageNotFound}>
         </Route>
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