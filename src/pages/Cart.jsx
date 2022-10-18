import React, { useState } from 'react'
import styled from 'styled-components';
import FinalizeOrder from './FinalizeOrder';
import Thanks from './Thanks';

function Cart () {
    const [contacts, updateContacts] = useState([]);

    const addContact = (contact) => {
        updateContacts([...contacts, contact]);
      };

    console.log(contacts)

    const Container = styled.div``

  return (
      <Container>
          {/* <FormOrder addContact={addContact}/> */}
          <Thanks contacts = {contacts}/>
      </Container>
  )
}

export default Cart