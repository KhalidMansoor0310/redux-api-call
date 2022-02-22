import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../Actions/userActions'

export const  userReducers = createSlice({
  name: 'anything',
  initialState:{
      users:[],
      loader:false,
      errors:{}
  },
  //reducer:{} for only normal actions
  reducers: {
      addUser:(state,action)=>{
         state.users = [...state.users,action.payload]
      }
  },
  //extraReducers:{} for those actions in which async function are called
  extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.loader = true;
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.loader = false;
            state.users = action.payload;
        },
        [getUsers.rejected]:(state,action)=>{
            state.loader = false;
            state.errors = action.payload;
        },
  }
})

export const {addUser} = userReducers.actions;
export default userReducers.reducer