import React, {useState, useRef, useEffect} from 'react'
import ReactDOM  from 'react-dom'
import styled from 'styled-components';

export default function FinalizeOrder() {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phonenumber: "",
      });
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    };

    const handleLastNameChange = (event) =>{
        setLastName(event.target.value)
    };

    const handleaddressChange = (event) =>{
        setAddress(event.target.value)
    }

    const handlePhoneNumChange = (event) =>{
        setPhoneNum(event.target.value)
    }
    
     let firstN = useRef()
     let lastN = useRef();
     let add = useRef();
     let phone = useRef();

    // useEffect(() => {
  
    //   }, []);
    const handelSubmit=(e)=>{
        // setFirstName(firstN.current.value)
        // console.log(firstName)

        //alert(firstName)
        debugger
        //setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
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
        <Form onSubmit={(e) =>{handelSubmit(e)}} >
        <Title>Finalize Order</Title>

        <Input type="name" ref={firstN} placeholder="first name" onChange={handleFirstNameChange} value={firstName} ></Input>

        <Input type="text"  ref={lastN} placeholder="last name" onChange={handleLastNameChange} value={lastName}></Input><br/>
  
        <Input type="text" ref={add} value={address} placeholder="address" onChange={handleaddressChange} value={address}></Input><br/>

        <Input type="text" ref={phone} placeholder="phone number" onChange={handlePhoneNumChange} value={phoneNum}></Input><br/>
        
        <Input type="submit" value="Buy"/>
        </Form>
    </Container>
  )
}
