import {React} from 'react'
import {Provider} from 'react-redux'
import store from './redux/store';
import './App.css';
import CakeContainer from './Component/CakeContainer'
import HookCakeContainer from './Component/HookCakeContainer';
import HookIceCreamContainer from './Component/HookIceCreamContainer';
import UserContainer from './Component/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
