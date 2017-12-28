import React, { PropTypes } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

/*
=> 自定义了一个 PrivateRoute 组件, 这也是 Route 组件的一种用法 wrapping/composing
    => 登录就渲染 Protected 组件
    => 否则的话跳转到 '/login' 路由, '/login' 路由匹配 Login 组件
=> 
*/

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton/>
            <ul>
                <li><Link to="/public">Public Page</Link></li>
                <li><Link to="/protected">Protected Page</Link></li>
            </ul>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>            
            <PrivateRoute path="/protected" todo="todo" component={Protected} />
        </div>
    </Router>
)

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

// history 是什么?
// Redirect 中的 to 的对象, state 就是在这边的传递里的 rest 就是属性中的对象

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={ props => (
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
        ) }/>
    )
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

// 定义组件现在还能这么用了?
class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        console.log(this.props.location);
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default AuthExample