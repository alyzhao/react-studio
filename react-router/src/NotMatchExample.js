import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';

const NotMatchExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/old-match">Old Match, to be redirected</Link></li>
				<li><Link to="/will-match">Will Match</Link></li>
				<li><Link to="/will-not-match">Will Not Match</Link></li>
				<li><Link to="/will/not/match">Also Will Not Match</Link></li>
			</ul>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Redirect from="/old-match" to="/will-match" component={Home}/>
				<Route path="/will-match" component={WillMatch}/>
				<Route path="/will/not" component={WillMatch}/>
				<Route path="/will" component={WillMatch}/>							
				<Route component={NotMatch}/>
			</Switch>
		</div>
	</Router>
)

const Home = () => (
	<p>
		A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code> that matches. A <code>&lt;Route></code> with no <code>path</code> always matches.
	</p>
)

const WillMatch = ({match}) => (
	<h3>Matched! {match.path}</h3>
)

const NotMatch = ({ location }) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)

export default NotMatchExample;