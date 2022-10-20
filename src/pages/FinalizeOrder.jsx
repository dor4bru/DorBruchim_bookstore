import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function FinalizeOrder(props) {
   // const navigate = useNavigate();
    const booksData = props.data;
    const order = {
        firstName: "",
        lastName: "",       
        address: "",
        phonenumber: "",
    }
    let firstN;
    let lastN;
    let add;
    let phone;

    const handelSubmit= () => {
        buildJsonForPostApi()
    }

    function buildJsonForPostApi(){
        console.log('got resp 0 props: ' + JSON.stringify(props));
        const totalAmount = booksData.map(b => b.price).reduce((p1, p2) => p1 + p2, 0);
        console.log('got resp amount: ' + totalAmount);
        

        axios.post(`https://logical-calf-89.hasura.app/api/rest/orders`,{ address: order.address,
        amount: totalAmount,
        books: booksData,
        firstName: order.firstName,
        lastName: order.lastName,
        phoneNumber: order.phonenumber
     })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        //     // POST request using axios inside useEffect React hook
        //     const article = { title: JSON.stringify({ address: order.address,
        //                         amount: totalAmount,
        //                         books: booksData,
        //                         firstName: order.firstName,
        //                         lastName: order.lastName,
        //                         phoneNumber: order.phonenumber
        //                     }) };
        //     axios.post('https://logical-calf-89.hasura.app/api/rest/orders',{ address: order.address,
        //     amount: totalAmount,
        //     books: booksData,
        //     firstName: order.firstName,
        //     lastName: order.lastName,
        //     phoneNumber: order.phonenumber
        // }).then(response =>  console.log(response.json()))

        // // console.log('posting: ' + requestOptions);
        // // axios.post('https://logical-calf-89.hasura.app/api/rest/orders', requestOptions)
        // .then(response =>  response.json())
        // .then(body => {
        //     console.log('post body: ' + JSON.stringify(body));
        //     navigate('/Thanks')
        //('https://logical-calf-89.hasura.app/api/rest/orders', requestOptions).then((response) => {
        //     console.log('got resp');
        //     return response.json();
        // }).then(body => {
        //     console.log('post body: ' + JSON.stringify(body));
        //     navigate('/Thanks');
        // }).catch(err => {
        //     console.log('error occurred due to post: ' + JSON.stringify(err));
        //     console.log('error occurred due to post: ' + err.code);
        //     console.log('error occurred due to post: ' + err.message);
        //     console.log('error occurred due to post: ' + err.type);
        // }).finally(() => {
        //     console.log('in finally');
        // });
        
        
        
        
    
    }

    const Container = styled.div`
    text-align: center;
    background-color: white;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    `
    const Form = styled.form`
    border:2px solid black;
    padding: 20px;
    `

    const Title = styled.h2`
    `
    const Input = styled.input`
    display: grid
    align-items: center;
    border:2px solid black;
    margin: 3px;`

  return (
    <Container>
        <Form onSubmit={(e) =>{handelSubmit()}} >
            <Title>Finalize Order</Title>
            <Input type="text" required value={firstN} placeholder="first name" onChange={(e) => order.firstName = e.target.value} ></Input>
            <Input type="text"  required value={lastN} placeholder="last name" onChange={(e) => order.lastName = e.target.value} ></Input><br/>
            <Input type="text" required value={add} placeholder="address" onChange={(e) => order.address = e.target.value}></Input><br/>
            <Input type="text" required value={phone} placeholder="phone number" onChange={(e) => order.phonenumber = e.target.value}></Input><br/>
            <Input type="submit" value="Buy"/>
        </Form>
    </Container>
  )
}
