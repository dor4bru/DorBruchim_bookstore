import React from 'react'
import {VscStarEmpty, VscStarFull, VscStarHalf} from "react-icons/vsc";
import { Container } from '../styles/productStyles'

function RatingStar({rating, max= 5}) {

    if(!rating || rating > max) {
        return;
    }
    const numOfFullStar = Math.floor(rating);
    const numOfHalfStar = (rating % 1 > 0)? 1 : 0
    const numOfEmptyStars = max - (numOfFullStar + numOfHalfStar);

    const fullStars = Array(numOfFullStar).fill(1);
    const halfStar = Array(numOfHalfStar).fill(0.5);
    const emptyStars = Array(numOfEmptyStars).fill(0);
    const allStars = fullStars.concat(halfStar, emptyStars);

    function drawStar(type, id) {
        switch(type) {
            case 1:
                return <VscStarFull key={id}></VscStarFull>
            case 0.5:
                return <VscStarHalf key={id}></VscStarHalf>
            default:
                return <VscStarEmpty key={id}></VscStarEmpty>
        }
    }

    return (
        <Container>
            {allStars.map((star, idx) => drawStar(star, idx))}
        </Container>
    );
}

export default RatingStar