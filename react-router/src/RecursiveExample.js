import React from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';

const PEEPS = [
	{ id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
	{ id: 1, name: 'Sean', friends: [ 0, 3 ] },
	{ id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
	{ id: 3, name: 'David', friends: [ 1, 2 ] }
]

const find = (id) => PEEPS.find(item => item.id == id)

const RecursiveExample = () => (
	<Router>
		<Person match={{ params: {id: 0}, url: '' }} />
	</Router>
)

const Person = ({ match }) => {
	const person = find(match.params.id);

	return (
		<div>
			<h3>{person.name}'s friends</h3>
			<ul>
				{person.friends.map(id => (
					<li key={id}>
						<Link to={`${match.url}/${id}`}>{find(id).name}</Link>
					</li>
				))}
			</ul>
			<Route path={`${match.url}/:id`} component={Person}/>
		</div>
	)
}

// 递归就是渲染的组件当中还有路由, 并且路由匹配之后渲染的还是这个组件 
export default RecursiveExample;
