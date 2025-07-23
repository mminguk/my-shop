import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Item from './component/Item';
import ItemList from './component/ItemList';
import Home from './component/Home';
import Login from './component/Login';
import List from './component/List';
import UserInfo from './component/UserInfo';
import ItemInfo from './component/ItemInfo';
import Register from './component/Register';
import Welcome from './component/Welcome';
import UserHome from './component/UserHome';
import Create from './crud/Create';

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path='/user_info' element={<UserInfo />} />
          <Route path="/shopping_list" element={<List />}/>
          <Route path="/item_info" element={<ItemInfo />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/user_home" element={<UserHome />} />
          <Route path="/create" element={<Create />}/>
        </Routes>
      </div>
    </>
  );
}


