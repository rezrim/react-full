import React from 'react'
import { Route } from 'react-router-dom'
import Index from './user/index'
import Admin from './admin/Index'
import Dashboard from './admin/Dashboard'

class App extends React.Component {
  
  constructor(){
    super()
  }

  render() {
    return (
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/Admin" component={Admin} />
          <Route path="/Admin/Dashboard" component={Dashboard} />
          <Route path="/Admin/Category" component={Dashboard} />
        </div>
    )
  }
}

export default App;