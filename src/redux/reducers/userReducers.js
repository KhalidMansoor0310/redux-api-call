import { createSlice } from '@reduxjs/toolkit'

export const  userReducers = createSlice({
  name: 'user',
  initialState:{
      users:[
          {id:1 , name:'khalid mansoor'},
          {id:2 , name:'Salman khan'}
      ]
  },
  reducers: {
      addUser:(state,action)=>{
         state.users = [...state.users,action.payload]
      }
  },
})
export const {addUser} = userReducers.actions;
export default userReducers.reducer