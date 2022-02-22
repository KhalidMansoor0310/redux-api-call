import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { addUser } from './redux/reducers/userReducers';

function App() {
  const users = useSelector((state)=>state.user.users);
  const dispatch = useDispatch();
  const inputref = useRef('');
  const addNewUser = (e) =>{
      e.preventDefault();
      dispatch(addUser(inputref.current.value))
  }
  return (
    <form onSubmit={addNewUser}>
        <input type="text" ref={inputref} />  

        <button type='submit'>Add user</button>
    </form>
  );
}

export default App;
