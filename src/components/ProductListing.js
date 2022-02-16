import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { SetProducts } from '../Actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function ProductListing() {
    const products = useSelector((state)=> state)
    const dispatch = useDispatch()
    const fetchData=async()=>{
        const res = await axios.get('https://fakestoreapi.com/products');
         dispatch(SetProducts(res.data));
    }
    useEffect(()=>{
        fetchData();
    },[]);
    console.log(products)
  return (
    <div className='ui grid container'>
     <ProductComponent/>
    </div>
  )
}
