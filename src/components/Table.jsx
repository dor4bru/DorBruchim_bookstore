import React from 'react'
import { CartTable, Td, Thead, Tr, Title, Description, TBody, Th } from '../styles/tableStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEuro } from "@fortawesome/free-solid-svg-icons"

const Table = ({ data, column, deleteBookSelect }) => {
    debugger
    return (
        <CartTable>
            <Thead>
                <Tr>
                    {column.map((item, index) => <TableHeadItem item={item} key={index} />)}
                </Tr>
            </Thead>
            <TBody>
                {data.map((item, index) => <TableRow item={item} column={column} key={index}/>)}
            </TBody>
            <TBody>
                <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td>{data.sum}
                        <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                    </Td>
                </Tr>
            </TBody>
        </CartTable>
    )
}

const TableHeadItem = ({ item }) => <Th>{item.heading}</Th>
const TableRow = ({ item, column }) => (
    <Tr>
        {column.map((columnItem, index) => {
            switch (columnItem.value) {
                case 'name':
                    return (
                        <Td>
                            <Title>{item[`${columnItem.value}`]}</Title>
                            <Description>{item.description}</Description>
                        </Td>
                    )
                case 'price':
                    return (
                        <Td> {item.price}
                            <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                        </Td>
                    )
                case 'icon':
                    return <Td><FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }}></FontAwesomeIcon></Td>

                case 'quantity':
                    return <Td>{item[`${columnItem.value}`]}</Td>
                default:
                    return
            }
        })}
    </Tr>

)

export default Table