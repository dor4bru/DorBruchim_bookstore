import React, {useState} from 'react'
import ReactDOM  from 'react-dom'
import styled from 'styled-components';

const FinalizeOrder = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '', address: '', phoneNum: ''  }])
        
    //update state of first name
    const handleFirstNameChange =(e)=>{
        debugger
        setFirstName(e.target.value);
    }

    //update state of last name
    const handleLastNameChange =(e)=>{
        setLastName(e.target.value);
    }

    //update state of address
    const handleAddressChange =(e)=>{
        setAddress(e.target.value);
    }

    //update state of phone number
    const handlePhoneNumChange =(e)=>{
        setPhoneNum(e.target.value);
    }

    const handelSubmit=(e)=>{
        alert(firstName)
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
        <Form onSubmit={(e) =>{handelSubmit(e)}}>
        <Title>Finalize Order</Title>
        {/* {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='first'
                placeholder='first name'
                value={input.firstName}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='name'
                placeholder='last name'
                value={input.lastName}
                onChange={event => handleFormChange(index, event)}
              />
            </div>
          )
        })} */}
        <Input type="name" id="firstname" value={firstName} placeholder="first name" 
        onChange={(e) => handleFirstNameChange(e)}></Input>

        <Input type="text"  id="lastname" value={lastName} placeholder="last name" onChange={(e) =>{
            handleLastNameChange(e)
        }}></Input><br/>
  
        <Input type="text"  value={address} placeholder="address" onChange={(e) =>{
            handleAddressChange(e)
        }}></Input><br/>

        <Input type="text" value={phoneNum} placeholder="phone number" onChange={(e) =>{
            handlePhoneNumChange(e)
        }}></Input><br/>
        <Input type="submit" value="Buy"/>
        </Form>
    </Container>
  )
}

export default FinalizeOrder