import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
    width: 100%
    border-radius: 5px;
    transition: all 0.3s ease
    display: flex;
`
export const DivImg = styled.div`
width: 100%;
height: auto;
min-height: 100%;
`
// export const Container = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin: ${px2vw(32)}
//     justify-content: center;
//     max-width: 100%
// `
// export const Container = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-column-gap: 20px;
//     padding: 20px;
//     justify-content: space-between;
// `
// export const ListStore = styled.div`
// flex: 1;
// margin: 5px;
// border-radius: 10px;
// `

export const ListStore = styled.div`
display: flex;
width:100%
`
export const Info = styled.div`
    width: 50%;
    padding: 30px 20px;
    border 1px solid #fff
@media (max-width: 767px){
    width:100%
}
`
export const NameStore = styled.h3`
display:flex;
width: cala(100%- 80px)
font-size: 20px;
font-wieght: bold;`

export const DataStore = styled.div`
width: 80px;
text-align: right;
`
export const Button = styled.button`

`
export const Imgstore = styled.img`
cursor: pointer;
width: 50%; /*set the width or max-width*/
height: auto
`


