import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Home(props) {
	<div>
		<h2>Home</h2>
	</div>
}

function Category(props) {
	<div>
		<h2>Category</h2>
	</div>
}

function Products(props) {
	<div>
		<h2>Products</h2>
	</div>
}

class App extends React.component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">
						<li><Link to="/">Homes</Link></li>
			            <li><Link to="/category">Category</Link></li>
			            <li><Link to="/products">Products</Link></li>
					</ul>
				</nav>
				<Route path="/" component={Home}/>
				<Route path="/category" component={Category}/>
				<Route path="/products" component={Products}/>
			</div>
		);
	}
}

