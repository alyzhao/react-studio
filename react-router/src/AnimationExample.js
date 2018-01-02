import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import './animation.css';

const styles = {};
styles.fill = {
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0	
};
styles.content = {
	...styles.fill,
	top: '40px',
	textAlign: 'center'
}
styles.nav = {
	padding: 0,
	margin: 0,
	position: 'absolute',
	top: 0,
	height: '40px',
	width: '100%',
	display: 'flex'
}
styles.navItem = {
	textAlign: 'center',
	flex: 1,
	listStyleType: 'none',
	padding: '10px'
}

styles.hsl  = {
	...styles.fill,
	color: 'white',
	paddingTop: '20px',
	fontSize: '30px'
}

const AnimationExample = () => {
	return (
		<Router>
			<Route render={({ location }) => {
				return (
					<div style={styles.fill}>
						<Route exact path="/" render={() => (
							<Redirect to="/10/90/50" />
						)}/>
							
						<ul style={styles.nav}>
							<NavLink to="/10/90/50">Red</NavLink>
							<NavLink to="/50/100/50">Yello</NavLink>
							<NavLink to="/200/100/50">Blue</NavLink>
							<NavLink to="/310/100/50">Pink</NavLink>
						</ul>

						<div style={styles.content}>
							<CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
								<Route location={location} key={location.key} path="/:h/:s/:l" component={HSL}/>
							</CSSTransitionGroup>
						</div>
					</div>
				)
			}}/>
		</Router>
	)
}

const NavLink = (props) => (
	<li style={styles.navItem}>
		<Link {...props} style={{color: 'inherit'}}/>
	</li>
)

const HSL = ({ match: { params } }) => (
	<div style={{
		...styles.fill,
		...styles.hsl,
		background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
	}}>
		hsl({params.h}, {params.s}%, {params.l}%)
	</div>
)

export default AnimationExample
