import styled from 'styled-components'

export const Container = styled.div`
border-style: solid;
border-color: #33b5e5;
margin :2px
`
export const DivForButton = styled.div`
text-align: center;
`

export const CartDiv = styled.div`
position: absolute;
top:0;
left:0;
margin: 0%;
`

export const ImgForBooks = styled.img`
cursor: pointer;
width: 100%;
`
export const ListBook = styled.div`
position: relative;
flex: 1;
margin: 5px;
border-radius: 10px;
`
export const Info = styled.div`
width:100%;
`
export const NameBook = styled.h1`
font-size: medium;
text-align: center;
flex-direction: column;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 20px;`

export const DataBook = styled.h2`
font-size: small;
text-align: center;
flex-direction: column;
mragin: 3px
`
export const Button = styled.button`
width:50%;
cursor: pointer;
text-align: center;
padding: 0;
border: none;
background: none;
`
