// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import SideBar from './components/SideBar/SideBar';
import UserGreed from './components/UsreGreed/UserGreed';

function App() {
  return (
    <div className="content">
  
  <SideBar place='left'/>
  <SideBar place='right'/>
  </div>
  );
}

export default App;
