import logo from './logo.svg';
import './App.css';
import Wishes from './Wishes';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Wishes name='Sameer' game='Football' ></Wishes>
      <Wishes name='Ashish' game='Hockey' ></Wishes>
      <Wishes name='Dipak' game='Cricket' ></Wishes>
      <Profile></Profile>
      
    </div>
  );
}

export default App;
