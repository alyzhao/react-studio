import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

class MobileNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //  console.log(this.div_bar);
  //  let that = this;
  //  // setTimeout(function() {
  //    that.div_bar.style.height = '117px';
      
  //  // }, 300);
  // }

  // componentWillUnmount() {

  // }

  handleClick() {
    this.setState(prevState => ({
      onOpen: !prevState.onOpen
    }));
  }

  render() {
    return (
      <div className="mb-navbar">
          <div onClick={this.handleClick}>点击</div>
          <CSSTransitionGroup transitionName="mbnavbar" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { this.state.onOpen ? 
            <ul>
              <li><i className="fa fa-home"></i><a href="/">首页</a></li>
              <li><i className="fa fa-delicious"></i><a href="/archives/">归档</a></li>
              <li><i className="fa fa-coffee"></i><a href="/about/">关于</a></li>
            </ul> 
            : 
            '' 
          }
            
          </CSSTransitionGroup>
      </div>
    );
  }
}




export { TodoList, MobileNavbar };




 