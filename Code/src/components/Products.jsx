import styled from "styled-components";
import Product from "./Product";
import Cart from "./Product";
import React, { useState, useEffect } from "react"; 
import Axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  const [title, setFoodname] = useState('')
  const [type, setTypename] = useState('')
  const [description, setDesc] = useState('')
  const [price, setPrice] = useState(0)
  const [img, setimg] = useState('');

  const [foodlist, setfoodlist] = useState([]);

  useEffect(()=> {
       
    Axios.get("http://localhost:3001/food").then((response)=> {
        setfoodlist(response.data);
      })
  })
  return (
    <Container>
      {foodlist.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
    
  );
};

export default Products;