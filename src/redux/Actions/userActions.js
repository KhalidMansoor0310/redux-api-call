import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
export const getUsers = createAsyncThunk('users',async()=>{
    // users/pending
    // user/fullfilled 
    // user/reject 
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})