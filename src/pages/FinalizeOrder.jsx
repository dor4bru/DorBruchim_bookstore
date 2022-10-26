import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CounterCart from '../components/CounterCart';
import Navbar from '../components/Navbar';
import { postOrder } from '../api/Order'
import { Container, Form, Title, Input, FormDiv } from '../styles/finilaizeOrderStyles'

import BookCartModel from '../model/BookCartModel'

export default function FinalizeOrder() {
    // for translate
    const { t } = useTranslation()

    const { getBookCart, getTotalPrice, clearCart, getTotalBookCount } = BookCartModel;
    const booksData = getBookCart();

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const phoneRegex = /^[0-9]{9,10}$/;
    const nameRegex = /^[a-zA-Z]+$/;

    // move to thanks page
    function navigateToThanks(thanksData) {
        navigate('/Thanks', { state: { thanksData } });
    }

    // handle submit
    const handelSubmit = async (e) => {
        e.preventDefault();
        const inputErrors = checkInput()
        if (inputErrors.length > 0) {
            alert(inputErrors.join(',\r\n'));
            return;
        }

        // Sum the total amount in order to present final price
        const totalAmount = getTotalPrice();
        const body = {
            books: booksData,
            amount: totalAmount,
            firstName, lastName, phoneNumber, address
        }
        const postOrderAsync = async () => {
            const orderId = await postOrder(body);
            clearCart();
            navigateToThanks({
                firstName: body.firstName,
                lastName: body.lastName,
                orderId: orderId.insert_orders_one.id
            });
        };
        setIsLoading(true);
        try {
            await postOrderAsync();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    // check if the input is currect
    const checkInput = () => {
        const errors = [];
        if (!phoneNumber.match(phoneRegex)) {
            errors.push("Phone number must be 9 or 10 numeric digits");
        }
        if (!firstName.match(nameRegex)) {
            errors.push("Name must be a non empty alphabetic string");
        }
        if (!lastName.match(nameRegex)) {
            errors.push("Lastname must be a non empty alphabetic string");
        }
        if (address.length === 0) {
            errors.push("Address must be supplied");
        }
        return errors;
    }

    return (
        <Container>
            <Navbar></Navbar>
            {/* <CounterCart count={getTotalBookCount()}></CounterCart> */}
            <NavLink to="/Cart">
                <CounterCart count={getTotalBookCount()}></CounterCart>
            </NavLink>
            <FormDiv>
                <Form onSubmit={(e) => { handelSubmit(e) }} >
                    <Title>{t('Finalize')} {t('Order')}</Title>
                    <Input type="text" required value={firstName} placeholder='first name' onChange={(e) => setFirstName(e.target.value)} ></Input>
                    <Input type="text" required value={lastName} placeholder="last name" onChange={(e) => setLastName(e.target.value)} ></Input><br />
                    <Input type="text" required value={address} placeholder="address" onChange={(e) => setAddress(e.target.value)}></Input><br />
                    <Input type="text" required value={phoneNumber} placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)}></Input><br />
                    <Input type="submit" value={t('Buy')} style={{ background: `#01befd` }} />
                </Form>
            </FormDiv>
            <div>
                {isLoading && <h2>{t('Loading')}...</h2>}
            </div>
        </Container>
    )
}
