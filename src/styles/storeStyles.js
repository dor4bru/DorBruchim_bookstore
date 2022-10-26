import styled from "styled-components";

export const Container = styled.div`
width: 100%
border-radius: 2px;
transition: all 0.3s ease
display: grid;
border-style: solid;
border-color: #33b5e5;
margin :2px`

export const DivImg = styled.div`
width: 100%;
height: auto;
min-height: 100%;
text-align: center;`

export const ListStore = styled.div`
padding: 5%
`
export const Info = styled.div`
    border 1px solid #fff
@media (max-width: 767px){
    width:100%
}
`
export const NameStore = styled.h1`
font-size: large;
font-wieght: bold;
text-align: center;
`

export const DataStore = styled.div`
text-align: center;
font-size: meduim;
`

export const Button = styled.button`
object-fit: cover;
overflow: hidden;
cursor: pointer;
padding: 0;
border: none;
background: none;
`

export const Imgstore = styled.img`
cursor: pointer;
width: 15vh;
height: 14vh;`