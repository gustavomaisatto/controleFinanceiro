import React from "react";

import * as styled from './styles'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash} from 'react-icons/fa'

const GridItems = ({item, onDelete}) => {
    return (
        <styled.Tr>
            <styled.Td>{item.desc}</styled.Td>
            <styled.Td>{item.amount}</styled.Td>
            <styled.Td alignCenter>{item.expense ? (
                <FaRegArrowAltCircleUp color="red" />
            ) : (
                <FaRegArrowAltCircleDown color="green" />
            )}
            </styled.Td>
            <FaTrash onClick={() => onDelete(item.id)} />
        </styled.Tr>
    )
}

export default GridItems