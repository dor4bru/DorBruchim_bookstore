import React from 'react'
import { CartTableStyle, Td, Tr, Title, Description, TBody, Th, THead } from '../styles/tableStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEuro } from "@fortawesome/free-solid-svg-icons"

const CartTable = ({ data, chargeAmount, columns, onDeleteBook }) => {

    const TableHeadItem = ({ name }) => {
        return (<Th>{name}</Th>)
    }

    // create table row
    const TableRow = ({ item, columns }) => {
        const bookData = item.data;
        return (
            <Tr>
                {columns.map((columnItem, index) => {
                    switch (columnItem.value) {
                        case 'name':
                            return (
                                <Td key={index}>
                                    <Title>{bookData.author} - {bookData[`${columnItem.value}`]}</Title>
                                    <Description>{bookData.description}</Description>
                                </Td>
                            )
                        case 'price':
                            return (
                                <Td key={index}>
                                    {item.totalPrice}
                                    <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                                </Td>
                            )
                        case 'icon':
                            return <Td key={index}>
                                <FontAwesomeIcon icon={faTrashCan}
                                    style={{ color: "red", cursor: "pointer" }}
                                    onClick={() => onDeleteBook(bookData.id)}></FontAwesomeIcon></Td>

                        case 'quantity':
                            return <Td key={index}>{item.count}</Td>
                        default:
                            return <Td key={index}></Td>
                    }
                })}
            </Tr>
        )
    };

    return (
        <CartTableStyle>
            <THead>
                <Tr>
                    {columns.map((item, index) => <TableHeadItem name={item.heading} key={index} />)}
                </Tr>
            </THead>
            <TBody>
                {Object.keys(data).map((bookId, index) => <TableRow item={data[bookId]} columns={columns} key={index} />)}
                <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td>
                        {chargeAmount}
                        <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                    </Td>
                </Tr>
            </TBody>
        </CartTableStyle>
    )
}

export default CartTable
