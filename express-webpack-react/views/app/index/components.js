import React from 'react';

class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'CaptainZhao'
			}
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.stopPropagation();
		event.preventDefault();
		this.setState(prevState => ({
			user: {
				name: prevState.user.name == 'CaptainZhao' ? 'CaptainSmart' : 'CaptainZhao'
			}
		}))
	}

	render() {
		return (
			<div>
				<h1>欢迎<span className="username">{this.state.user.name}({this.props.userage})</span><a href="http://www.baidu.com" onClick={this.handleClick}>切换</a></h1>
			</div>
		);
	}
}

export { IndexComponent };