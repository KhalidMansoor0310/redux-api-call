import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState:{
      users:[
          {id:1 , name:'khalid mansoor'},
          {id:2 , name:'Salman khan'}
      ]
  },
  reducers: {},
})

export default counterSlice.reducer