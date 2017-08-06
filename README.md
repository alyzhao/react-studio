# react-studio
## learn react 

## State-Lifecycle
	(1). this.state可能是异步更新, 所以要依靠上一次的值计算下一次的值必须在setState中传递一个回调函数, 该函数将接收先前的状态作为第一个参数, 将需要更新的值作为第二个参数：
	```javascript```
	this.setState((prevState, props) => ({
		counter: prevState.counter + props.increment
	}));
	```

## Handling Events
1. 在 React 不能使用返回 false 的方式阻止默认行为.必须明确的使用 preventDefault

2. 类的方法默认是不会绑定 this , 解决方法
	(1). 在constructor中bind(this)
	(2). 使用 property initializer syntax,
	```javascript ```
	handleClick = () => {
		console.log('this is:', this);
	}	
	```javascript```
	(3). 在回调函数中使用 箭头函数, 但是会影响性能
	```
	<button onClick={(e) => this.handleClick(e)}>
	```

