import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
    width: 100%
    border-radius: 2px;
    transition: all 0.3s ease
    display: flex;
`
export const DivImg = styled.div`
    width: 100%;
    height: auto;
    min-height: 100%;
    text-align: center;
    `

export const ListStore = styled.div`
padding: 5%
`
export const Info = styled.div`
    border 1px solid #fff
@media (max-width: 767px){
    width:100%
}
`
export const NameStore = styled.h3`
font-size: 20px;
font-wieght: bold;
text-align: center;
`

export const DataStore = styled.div`
text-align: center;
`
export const Button = styled.button`
object-fit: cover;
        overflow: hidden;
`
// export const Imgstore = styled.img`
// cursor: pointer;
// width: 50%; /*set the width or max-width*/
// height: auto
// `

export const Imgstore = styled.img`
cursor: pointer;
width: 100%;
height: 10vh;


`
// max-width: 100%;
// width: 500px