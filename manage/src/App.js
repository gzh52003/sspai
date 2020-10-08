import React from 'react';removeEventListener
import Default from './views/default';
import {MyContext,Provider} from './myContext'
import store from './store'

class App extends React.Component {
  state = {

  }
  render(){
    return (
      <div className="default">
        
        <Default></Default>
  
      </div>
    )
  }
}
export default App;