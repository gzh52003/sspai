import React, { Suspense, lazy, useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import './css/App.scss';
import './css/iconfont/iconfont.css'

import Home from './views/Home'
const Mine = lazy(() => import('./views/Mine'))
const Login = lazy(() => import('./views/Login'))

@withRouter

class App extends React.PureComponent {
  render() {
    return (
      <div className="App" >
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path='/mine' component={Mine}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Home} exact></Route>
            <Route path='/notfound' render={() => <div>404</div>}></Route>
            <Redirect to='/notfound'></Redirect>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default App;
