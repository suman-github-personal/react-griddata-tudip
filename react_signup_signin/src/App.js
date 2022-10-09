import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import {Routes, Route, Router} from "react-router-dom"
import { Login } from './components/Login';
import Details from './components/Details';

function App() {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}>
    
    </Route>
    <Route path='/details' element={<Details />}>
    
    </Route>
   </Routes>
   
   </>
  );
}

export default App;
