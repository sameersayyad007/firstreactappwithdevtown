import logo from './logo.svg';
import './App.css';
import Wishes from './Wishes';
import Profile from './Profile';
import ClassComp1 from './ClassComp1';

function App() {
  return (
    <div className="App">
      <Wishes name='Sameer' game='Football' ></Wishes>
      <Wishes name='Ashish' game='Hockey' ></Wishes>
      <Wishes name='Dipak' game='Cricket' ></Wishes>
      <Profile></Profile>
      <ClassComp1></ClassComp1>
      
    </div>  
  );
}

export default App;
