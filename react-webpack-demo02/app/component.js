import React from 'react';

const MyComponents = {
	InputTest: class InputTest extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				value: 'come on baby! you will success!'
			}

			// 绑定事件
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange(event) {
			this.setState(prevState => ({
				value: event.value
			}));
		}

		render() {
			return (
				<h1>
					<input onChange={this.handleChange} value={this.state.value} placeholder="input some words111" />
				</h1>
			);
		}
	}
}

export {MyComponents};