import './App.css'
import { Outlet } from 'react-router-dom'
import TabBarPage from './pages/tabBarPage';
function App() {
  return (
    <div className="App">
      <div className="bodyContent">
        <Outlet></Outlet>
      </div>
      <TabBarPage className="bottomTabBar"></TabBarPage>
    </div>
  );
}

export default App;
