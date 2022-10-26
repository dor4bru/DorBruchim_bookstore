//import
import React,{useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEuro} from "@fortawesome/free-solid-svg-icons"
import Navbar from '../components/Navbar';
import {
    Container, ListProduct, NameBook, NameAuthor, Description,
    Title, DataBook, AddCart, Button, Price, ProductDiv, ButtonDiv, PriceDiv, StarDiv, DivRatingAndStar
} from '../styles/productStyles'

import RatingStar from "../components/RatingStar"
import CounterCart from '../components/CounterCart';
import BookCartModel from '../model/BookCartModel'

// product
function Product() {
    const {t} = useTranslation()
    const { getTotalBookCount, addBookToCart } = BookCartModel;
    const location = useLocation();
    const {theBook} = location.state;
    let [cartBooksCount, setCartBooksCount] = useState(getTotalBookCount());

    // add the book to the cart
    function addBook(theBook) {
        addBookToCart(theBook);
        setCartBooksCount(getTotalBookCount());
    }

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
            <CounterCart count={cartBooksCount}></CounterCart>
            </NavLink>
            <ListProduct>
                <ProductDiv>
                    <NameBook>{theBook.name}</NameBook>
                    <NameAuthor>{theBook.author}</NameAuthor>
                    <DivRatingAndStar>
                        <RatingStar rating={theBook.stars}></RatingStar>
                        <StarDiv>({theBook.ratings} {t('ratings')})</StarDiv>
                    </DivRatingAndStar>
                    <Description>{theBook.description}</Description>
                    <Title>{t('Product ')} {t('Deatlies')}</Title>
                    <DataBook>{t('publisher')}: {theBook.publisher}</DataBook>
                    <DataBook>{t("language")}: {theBook.language}</DataBook>
                    <DataBook>{t("paper back")}: {theBook.paperback}</DataBook>
                </ProductDiv>
                <AddCart>
                    <PriceDiv>
                        <Price>{t("Buy")}: {theBook.price} <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                        </Price>
                    </PriceDiv>
                    <Description>
                        {t('As')} {t('an')} {t('alternative')} {t('pre')}-{t('order')} {t('the')} {t('Kindle')}
                    </Description>
                    <Description>
                        {t('eBook')} {t('insteat')} {t('to')} {t('automatiaclly')} {t('receive')} {t('on')} {t('day')} {t('of')} {t('release')}
                    </Description>
                    <ButtonDiv>
                        <Button onClick={() => addBook({
                            id: theBook.id,
                            name: theBook.name,
                            description: theBook.description,
                            author: theBook.author,
                            price: theBook.price
                        })}>{t('Add')} {t('to')} {t('Cart')}</Button>
                    </ButtonDiv>
                </AddCart>
            </ListProduct>

        </Container>
    )

}

export default Product