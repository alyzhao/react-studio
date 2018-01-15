import * as React from 'react';
import { StaticRouter, Route } from 'react-router-dom';

const RouteStatus = (props) => (
	<Route render={({ staticContext }) => {
		if (staticContext) {
			staticContext.statusCode = props.statusCode
		}
		return (
			<div>
				{props.children}
			</div>
		)
	}} />
)

