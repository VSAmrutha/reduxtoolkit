import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

import { useDispatch,useSelector } from 'react-redux';
import {add} from "../store/cartSlice"
import {getProducts} from "../store/productSlice"
import StatusCode from "../utils/StatusCode"

const Product = () => {
    //getting store state into react component using useSelector
    const {data: products,status}=useSelector(state=>state.products)
    //using useDispatch method to dispatch the getProducts (thunk)
    const dispatch=useDispatch();
    useEffect(()=>{
        //dispatch the getProducts
        dispatch(getProducts())      
    },[])
    //using the store state status to display, loading, error etc
    if(status===StatusCode.LOADING){
        return <Alert key="warning">Loading...</Alert>
    }
    if(status===StatusCode.ERROR){
        return <Alert key="danger" variant="danger">Error occured, try after sometime..</Alert>
    }
    const addToCart=(product)=>{
        dispatch(add(product))
    }
    const cards= products.map(product=>(
        <div key={product.id}  className='col-md-3' style={{marginBottom:"100px"}}>
             <Card className="h-100">
             <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         {product.price}$
        </Card.Text>
       
      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
        </div>
    )
    )
  return (
    <>
        <h1>Product Dashboard</h1>
        <div className='row'>
            {cards}
        </div>
    </>
  )
}

export default Product

 //let data
        //async function fetchdata(){
        //     data=await axios("https://fakestoreapi.com/products") 
        //     getProducts(data)
        //    console.log(data)
        //}
        //fetchdata()
{/**/}