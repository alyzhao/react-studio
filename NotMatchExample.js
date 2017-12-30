import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Swicth,
	Redirect
} from 'react-router-dom';


const NotMatchExample = () => (
	<Router>
		<div>
			<ul>
				<Link to="/">Home</Link>
				<Link to="/old-match">Old Match, to be redirected</Link>
				<Link to="/will-match">Will Match</Link>
				<Link to="/will-not-match">Will Not Match</Link>
				<Link to="/will/not/match">Also Will Not Match</Link>
			</ul>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Redirect from="/old-match" to="/will-match" component={Home}/>
				<Route path="/will-match" component={WillMatch}/>
				<Route component={NotMatch}/>
			</Switch>
		</div>
	</Router>
)

const Home = () => (
	<p>
		A <code>&lt;Switch></code> renders the
	    first child <code>&lt;Route></code> that
	    matches. A <code>&lt;Route></code> with
	    no <code>path</code> always matches.
	</p>
)

const WillMatch = () => (
	<h3>Matched!</h3>
)

const NotMatch = ({ location }) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)

export default NotMatchExample;