import React from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar'
import {Container, HomePage, Title, GoodBye, Order, ThanksDiv, ButtonDiv} from '../styles/thanksStyles'

const Thanks = () => {
    const {t} = useTranslation()
    const location = useLocation();
    const {thanksData} = location.state;

    return (
        <Container>
            <Navbar/>
            <ThanksDiv>
                <Title>{t('Congrats')}, {thanksData.firstName} {thanksData.lastName}</Title>
                <Order>{t('Your')} {t('order')} {t('ID')} {t('is')}: {thanksData.orderId}</Order>
                <GoodBye>{t('BookStore')} {t('Bookshop')} {t('will')} {t('hope')} {t('to')} {t('see')} {t('you')} {t('again')}</GoodBye>
                <NavLink to='/' >
                    <ButtonDiv>
                        <HomePage>{t('Back')} {t('to')} {t('Home')} {t('Page')}</HomePage>
                    </ButtonDiv>
                </NavLink>
            </ThanksDiv>
        </Container>
    )
}

export default Thanks