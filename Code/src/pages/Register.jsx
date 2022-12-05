import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),

        url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    align-items: center;
    justify-content: center;
        `;
        const Containerr = styled.div`
        `;
const Wrapper = styled.div`
    padding: 30px;
    width: 40%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    @media only screen and (max-width: 480px){
        width: 75%;
        };
        `
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    `
const Title = styled.div`
    font-size: 24px;
    font-weight: 300;
    `
const Input = styled.div`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.div`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
      
        
      <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <input placeholder="name"></input>
            <input placeholder="last name"></input>
            <input placeholder="username"></input>
            <input placeholder="email"></input>
            <input placeholder="password"></input>
            <input placeholder="confirm password"></input>
            <Agreement> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b> </Agreement>
            <Button>CREATE</Button>
        </Form>
        </Wrapper>
      </Container>
      );
    };

export default Register