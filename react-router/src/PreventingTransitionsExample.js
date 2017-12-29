import React from 'react';
import {
	BrowserRouter as Router, 
	Route,
	Link,
	Prompt
} from 'react-router-dom';

const PreventingTransitionsExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Form</Link></li>
				<li><Link to="/one">One</Link></li>
				<li><Link to="/two">Two</Link></li>
			</ul>
			<Route path="/" exact component={Form}/>
			<Route path="/one" render={() => <h3>One</h3>}/>
			<Route path="/two" render={() => <h3>Two</h3>}/>
		</div>
	</Router>
)

