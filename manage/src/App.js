import React from 'react';
import Default from './views/default';
import {Provider} from './views/hook';
console.log(Provider,'sss')
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