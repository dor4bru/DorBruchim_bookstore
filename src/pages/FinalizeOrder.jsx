import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { postOrder } from '../api/Order'
import Navbar from '../components/Navbar';

export default function FinalizeOrder(props) {
    const navigate = useNavigate();
    const booksData = props.data;
    const [body, setBody] = useState();
    const [finalOrder, setFinalOrder] = useState([])
    const [doPost, setDoPost] = useState(false)

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
    let resapi;

    useEffect(() => {
        if (typeof body != undefined) {
            setDoPost(true)
        }
        if (doPost) {
            const getBookDataAsync = async () => {
                const idOrder = (await postOrder(body));
                const finalOrder = ({
                    firstName: body.firstName,
                    lastName: body.lastName,
                    dataIdOrder: idOrder
                })
                props.getOrderId(finalOrder)
                navigate('/Thanks');
            };
            try {
                getBookDataAsync();
            } catch (error) {
                console.log(error)
            }
        }
    }, [body]);

    const handelSubmit = (e) => {
        e.preventDefault();
        const totalAmount = booksData.map(b => b.price).reduce((p1, p2) => p1 + p2, 0);
        resapi = {
            address: order.address,
            amount: totalAmount,
            books: props.data,
            firstName: order.firstName,
            lastName: order.lastName,
            phoneNumber: order.phonenumber
        }
        setBody(resapi)
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
            <Navbar></Navbar>
            <Form onSubmit={(e) => { handelSubmit(e) }} >
                <Title>Finalize Order</Title>
                <Input type="text" required value={firstN} placeholder="first name" onChange={(e) => { order.firstName = e.target.value }} ></Input>
                <Input type="text" required value={lastN} placeholder="last name" onChange={(e) => order.lastName = e.target.value} ></Input><br />
                <Input type="text" required value={add} placeholder="address" onChange={(e) => order.address = e.target.value}></Input><br />
                <Input type="text" required value={phone} placeholder="phone number" onChange={(e) => order.phonenumber = e.target.value}></Input><br />
                <Input type="submit" value="Buy" />
            </Form>
        </Container>
    )
}
