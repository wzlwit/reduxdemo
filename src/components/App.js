import React from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';


require('../style.css');

class App extends React.Component {
  render() {
    return (<div>
      <h1>Username List:</h1>
      <UserList />
      <hr />
      <h1>User Details:</h1>
      <UserDetail />
    </div >)
  };
}
export default App;
