import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postOrder } from '../api/Order'
import Navbar from '../components/Navbar';
import {Container, Form, Title, Input} from '../styles/finilaizeOrderStyles'

export default function FinalizeOrder(props) {
    const navigate = useNavigate();
    const booksData = props.data;
    const [body, setBody] = useState();
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
