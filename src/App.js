import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { getUsers } from './redux/Actions/userActions';
import SingleUser from './SingleUser';

function App() {
  const data = useSelector((state)=>state.user.users);
  console.log(data)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
  },[])
  return (
   <div>
     <h1>Data collection from JsonPlaceHolder using Redux</h1>
     {
       data.map((item,index)=>{
            return <SingleUser  items = {item} key={index}/>
       })
     }
   </div>
  );
}

export default App;
