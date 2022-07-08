import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from '../pages/tabBarPage/home'
import Todo from '../pages/tabBarPage/todo'
import Message from '../pages/tabBarPage/message'
import PersonalCenter from '../pages/tabBarPage/personalCenter'
import Detail from '../pages/detail';
function RouterCom() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<App />}>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='todo' element={<Todo />}></Route>
            <Route exact path='message' element={<Message />}></Route>
            <Route exact path='personalCenter' element={<PersonalCenter />}></Route>
            <Route path='*' element={<div>404</div>}></Route>
          </Route>
          <Route exact path='/detail' element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default RouterCom;